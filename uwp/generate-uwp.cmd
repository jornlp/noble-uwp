@echo off
setlocal

if "%nodertcmd%"=="" SET nodertcmd="NodeRTCmd.exe"
if "%nodertwinmd%"=="" SET nodertwinmd="C:\Program Files (x86)\Windows Kits\10\UnionMetadata\10.0.18362.0\Windows.winmd"


call :genrt Windows.Foundation %1
call :genrt Windows.Storage.Streams %1
call :genrt Windows.Devices.Bluetooth %1
call :genrt Windows.Devices.Bluetooth.Advertisement %1
call :genrt Windows.Devices.Bluetooth.GenericAttributeProfile %1
call :genrt Windows.Devices.Enumeration %1
call :genrt Windows.Devices.Radios %1
goto :eof

:genrt
"%nodertcmd%" --winmd %nodertwinmd% --nobuild --namespace %1 --outdir . %2
if errorlevel 1 exit
goto :eof

endlocal