# LibParser
**A simple minecraft library parser for ndml**

```ts
import { LibraryType } from '@ndml/types'
import { LibParser } from '@ndml/libparser'

const libs: LibraryType[] = [{
  'downloads': {
    'artifact': {
      'path': 'com/mojang/logging/1.0.0/logging-1.0.0.jar',
      'sha1': 'f6ca3b2eee0b80b384e8ed93d368faecb82dfb9b',
      'size': 15343,
      'url': 'https://libraries.minecraft.net/com/mojang/logging/1.0.0/logging-1.0.0.jar'
    }
  }, 'name': 'com.mojang:logging:1.0.0'
}]

LibParser.parseNatives(libs) // []
LibParser.parseLibraries(libs) // [{downloads: {...}, name: 'com.mojang:logging:1.0.0'}]
```
