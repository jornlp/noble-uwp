{
	'variables' : {
		'node_shared': 'true',
		'WIN_VER' : 'v10',
		'WIN_SDK_VER' : '10.0.18362.0',
		'VS_VER': '15.0',
	},
	'target_defaults': {
		'default_configuration': 'Release',
		'configurations': {
			'Debug': {
				'msvs_settings': {
					'VCCLCompilerTool': {
						'RuntimeLibrary': '3', # /MDd
					}
				}
			},
			'Release': {
				'msvs_settings': {
					'VCCLCompilerTool': {
						'RuntimeLibrary': '2', # /MD
					}
				}
			}
		},
		'msvs_settings': {
			'VCCLCompilerTool': {
				'AdditionalOptions': [ '/ZW'],
				'AdditionalUsingDirectories' : [
					'%ProgramFiles(x86)%/Microsoft Visual Studio/2019/Enterprise/VC/lib/store/references',
					'%ProgramFiles%/Microsoft Visual Studio/2019/Enterprise/VC/lib/x86/store/references',
					'%ProgramFiles(x86)%/Windows Kits/10/UnionMetadata/<(WIN_SDK_VER)',
					'%ProgramFiles%/Windows Kits/10/UnionMetadata/<(WIN_SDK_VER)',
				],
				'ExceptionHandling': 1, # /EHsc
			}
		}
	}
}
