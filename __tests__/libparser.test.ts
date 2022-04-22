import { LibraryType } from '@ndml/types'
import { LibParser } from '../index'

const testlibs: LibraryType[] = [{
  'downloads': {
    'artifact': {
      'path': 'com/mojang/logging/1.0.0/logging-1.0.0.jar',
      'sha1': 'f6ca3b2eee0b80b384e8ed93d368faecb82dfb9b',
      'size': 15343,
      'url': 'https://libraries.minecraft.net/com/mojang/logging/1.0.0/logging-1.0.0.jar'
    }
  }, 'name': 'com.mojang:logging:1.0.0'
}, {
  'downloads': {
    'artifact': {
      'path': 'com/mojang/blocklist/1.0.10/blocklist-1.0.10.jar',
      'sha1': '5c685c5ffa94c4cd39496c7184c1d122e515ecef',
      'size': 964,
      'url': 'https://libraries.minecraft.net/com/mojang/blocklist/1.0.10/blocklist-1.0.10.jar'
    }
  }, 'name': 'com.mojang:blocklist:1.0.10'
}, {
  'downloads': {
    'artifact': {
      'path': 'com/mojang/patchy/2.2.10/patchy-2.2.10.jar',
      'sha1': 'da05971b07cbb379d002cf7eaec6a2048211fefc',
      'size': 4439,
      'url': 'https://libraries.minecraft.net/com/mojang/patchy/2.2.10/patchy-2.2.10.jar'
    }
  }, 'name': 'com.mojang:patchy:2.2.10'
}, {
  'downloads': {
    'artifact': {
      'path': 'org/lwjgl/lwjgl/3.2.1/lwjgl-3.2.1.jar',
      'sha1': '2bb514e444994c6fece99a21f76e0c90438e377f',
      'size': 317748,
      'url': 'https://libraries.minecraft.net/org/lwjgl/lwjgl/3.2.1/lwjgl-3.2.1.jar'
    }, 'classifiers': {
      'javadoc': {
        'path': 'org/lwjgl/lwjgl/3.2.1/lwjgl-3.2.1-javadoc.jar',
        'sha1': '1f6b7050737559b775d797c0ea56612b8e373fd6',
        'size': 1287174,
        'url': 'https://libraries.minecraft.net/org/lwjgl/lwjgl/3.2.1/lwjgl-3.2.1-javadoc.jar'
      },
      'natives-linux': {
        'path': 'org/lwjgl/lwjgl/3.2.1/lwjgl-3.2.1-natives-linux.jar',
        'sha1': '9bdd47cd63ce102cec837a396c8ded597cb75a66',
        'size': 87484,
        'url': 'https://libraries.minecraft.net/org/lwjgl/lwjgl/3.2.1/lwjgl-3.2.1-natives-linux.jar'
      },
      'natives-macos': {
        'path': 'org/lwjgl/lwjgl/3.2.1/lwjgl-3.2.1-natives-macos.jar',
        'sha1': '5a4c271d150906858d475603dcb9479453c60555',
        'size': 39835,
        'url': 'https://libraries.minecraft.net/org/lwjgl/lwjgl/3.2.1/lwjgl-3.2.1-natives-macos.jar'
      },
      'natives-windows': {
        'path': 'org/lwjgl/lwjgl/3.2.1/lwjgl-3.2.1-natives-windows.jar',
        'sha1': 'e799d06b8969db0610e68776e0eff4b6191098bd',
        'size': 255871,
        'url': 'https://libraries.minecraft.net/org/lwjgl/lwjgl/3.2.1/lwjgl-3.2.1-natives-windows.jar'
      },
      'sources': {
        'path': 'org/lwjgl/lwjgl/3.2.1/lwjgl-3.2.1-sources.jar',
        'sha1': '106f90ac41449004a969309488aa6e3a2f7d6731',
        'size': 255671,
        'url': 'https://libraries.minecraft.net/org/lwjgl/lwjgl/3.2.1/lwjgl-3.2.1-sources.jar'
      }
    }
  },
  'name': 'org.lwjgl:lwjgl:3.2.1',
  'natives': { 'osx': 'natives-macos' },
  'rules': [{ 'action': 'allow', 'os': { 'name': 'osx' } }]
}, {
  'downloads': {
    'artifact': {
      'path': 'org/lwjgl/lwjgl/3.2.2/lwjgl-3.2.2.jar',
      'sha1': '8ad6294407e15780b43e84929c40e4c5e997972e',
      'size': 321900,
      'url': 'https://libraries.minecraft.net/org/lwjgl/lwjgl/3.2.2/lwjgl-3.2.2.jar'
    },
    'classifiers': {
      'natives-linux': {
        'path': 'org/lwjgl/lwjgl/3.2.2/lwjgl-3.2.2-natives-linux.jar',
        'sha1': 'ae7976827ca2a3741f6b9a843a89bacd637af350',
        'size': 124776,
        'url': 'https://libraries.minecraft.net/org/lwjgl/lwjgl/3.2.2/lwjgl-3.2.2-natives-linux.jar'
      },
      'natives-macos': {
        'path': 'org/lwjgl/lwjgl/3.2.2/lwjgl-3.2.2-natives-macos.jar',
        'sha1': 'bbfb75693bdb714c0c69c2c9f9be73d259b43b62',
        'size': 48462,
        'url': 'https://libraries.minecraft.net/org/lwjgl/lwjgl/3.2.2/lwjgl-3.2.2-natives-macos.jar'
      },
      'natives-windows': {
        'path': 'org/lwjgl/lwjgl/3.2.2/lwjgl-3.2.2-natives-windows.jar',
        'sha1': '05359f3aa50d36352815fc662ea73e1c00d22170',
        'size': 279593,
        'url': 'https://libraries.minecraft.net/org/lwjgl/lwjgl/3.2.2/lwjgl-3.2.2-natives-windows.jar'
      }
    }
  },
  'name': 'org.lwjgl:lwjgl:3.2.2',
  'natives': { 'linux': 'natives-linux', 'windows': 'natives-windows' },
  'rules': [{ 'action': 'allow' }, { 'action': 'disallow', 'os': { 'name': 'osx' } }]
}]

it('should parse natives', () => {
  expect(LibParser.parseNatives(testlibs)).toHaveLength(1)
})

it('should parse libraries', () => {
  expect(LibParser.parseLibraries(testlibs)).toHaveLength(3)
})
