// Copyright (c) Microsoft Corporation, Nadav Bar, and Felix Rieseberg
// All rights reserved.
//
// Licensed under the Apache License, Version 2.0 (the ""License""); you may
// not use this file except in compliance with the License. You may obtain a
// copy of the License at http://www.apache.org/licenses/LICENSE-2.0
//
// THIS CODE IS PROVIDED ON AN  *AS IS* BASIS, WITHOUT WARRANTIES OR CONDITIONS
// OF ANY KIND, EITHER EXPRESS OR IMPLIED, INCLUDING WITHOUT LIMITATION ANY
// IMPLIED WARRANTIES OR CONDITIONS OF TITLE, FITNESS FOR A PARTICULAR PURPOSE,
// MERCHANTABLITY OR NON-INFRINGEMENT.
//
// See the Apache Version 2.0 License for specific language governing permissions
// and limitations under the License.

const path = require('path');
const fs = require('fs');

const npmScope = '';

// This little trick makes Node.js Tools for VS load IntelliSense for the module
if (fs.existsSync(path.join(__dirname, 'NodeRT_Windows_Devices_Bluetooth_GenericAttributeProfile.d.js)'))) {
  module.exports = require('./NodeRT_Windows_Devices_Bluetooth_GenericAttributeProfile.d.js');
} else {
  module.exports = require('../build/Release/binding.node');
}

var externalReferencedNamespaces = ['Windows.Devices.Bluetooth', 'Windows.Storage.Streams', 'Windows.Devices.Enumeration', 'Windows.Foundation'];

if (externalReferencedNamespaces.length > 0) {
  var namespaceRegistry = global.__winRtNamespaces__;

  if (!namespaceRegistry) {
    namespaceRegistry = {};

    Object.defineProperty(global, '__winRtNamespaces__', {
      configurable: true,
      writable: false,
      enumerable: false,
      value: namespaceRegistry
    });
  }

  function requireNamespace(namespace) {
    var moduleName = namespace.toLowerCase();

    if (npmScope) {
      moduleName = '@' + npmScope + '/' + moduleName;
    }

    var m = require(moduleName);
    delete namespaceRegistry[namespace];
    namespaceRegistry[namespace] = m;
    return m;
  }

  for (var i in externalReferencedNamespaces) {
    var ns = externalReferencedNamespaces[i];

    if (!namespaceRegistry.hasOwnProperty(ns)) {
      Object.defineProperty(namespaceRegistry, ns, {
        configurable: true,
        enumerable: true,
        get: requireNamespace.bind(null, ns)
      });
    }
  }
}
