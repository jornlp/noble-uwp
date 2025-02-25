windows.devices.radios
=====

A Node.js wrapper for the <a href="http://msdn.microsoft.com/en-us/library/windows/apps/Windows.Devices.Radios.aspx" target="_blank">Windows.Devices.Radios</a> WinRT namespace, compatible with Windows 10 APIs.

Using this module, you'll be able to consume the <a href="http://msdn.microsoft.com/en-us/library/windows/apps/Windows.Devices.Radios.aspx" target="_blank">Windows.Devices.Radios</a> API directly from Node.js.

This module was automatically generated by <a href="https://github.com/NodeRT/NodeRT" target="_blank">NodeRT</a>. 
For more information on NodeRT and examples on how to use NodeRT modules, please visit the project page at: <a href="https://github.com/NodeRT/NodeRT" target="_blank">https://github.com/NodeRT/NodeRT</a>.

The API exposed by this module is (almost) the same as the API that is listed in: <a href="http://msdn.microsoft.com/en-us/library/windows/apps/Windows.Devices.Radios.aspx" target="_blank">http://msdn.microsoft.com/en-us/library/windows/apps/Windows.Devices.Radios.aspx</a>

The only difference in the API is in the way that asynchronous methods and events are used. (See <a href="https://github.com/NodeRT/NodeRT#ConsumingNodeRT" target="_blank">https://github.com/NodeRT/NodeRT#ConsumingNodeRT</a> for more details)

This module also contains TypeScript definition files for the API exposed by the module, as well as JavaScript intellisense support for <a href="http://nodejstools.codeplex.com/" target="_blank">Node.js tools for Visual Studio</a>.

Prequisites:
============
* Visual Studio version 2019 and above. (Express Desktop versions also work!)
* Python 2.7 (for node-gyp)
* <b>Important:</b> Updated versions of npm and node-gyp. (Note that the ones that are bundled with node might not be up to date). In order to install latest npm, run:
```
npm install -g npm
```

In order to install latest node-gyp run:
```
npm install -g node-gyp
```

Installation:
=============
In order to install this module, run npm install:

```
npm install windows.devices.radios
```

If you wish to rebuild this module using node-gyp, make sure to use the appropriate VS version using --msvs_version=2012/2013/2015/2017 flag:

For example:

```
cd [module folder path]
node-gyp rebuild --msvs_version=2019
```