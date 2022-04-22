import { DownloadableResource, LibraryType, MojangResourceType, NotIncludeCP, RequireOne } from '@ndml/types'
import { NDMLUtils } from '@ndml/utils'
import path from 'path'

export type Pathed = { path: string }
export type NativeLib = RequireOne<MojangResourceType, 'url'> & { isNative: boolean } & Pathed
export type DefaultLib = DownloadableResource & NotIncludeCP & Pathed

export namespace LibParser {
  export const parseRule = (lib: LibraryType) => {
    const os = NDMLUtils.getOS()
    if (lib.rules) {
      if (lib.rules.length > 1) {
        if (
          lib.rules[0].action === 'allow' &&
          lib.rules[1].action === 'disallow' &&
          lib.rules[1].os?.name === 'osx'
        ) {
          return os === 'osx'
        } else {
          return true
        }
      } else {
        if (lib.rules[0].action === 'allow' && lib.rules[0].os)
          return os !== 'osx'
      }
    } else {
      return false
    }
  }

  export const nativeos = `natives-${NDMLUtils.getOS()}`

  export const parseNatives = (libraries: LibraryType[]): NativeLib[] => {
    return libraries
      .filter(
        lib =>
          lib.downloads &&
          lib.downloads.classifiers &&
          !parseRule(lib) &&
          (lib.downloads.classifiers[nativeos] ||
            lib.downloads.classifiers['natives-osx'])
      )
      .map(lib => {
        const nlib = lib.downloads?.classifiers?.[nativeos]
        return {
          url: nlib.url,
          size: nlib.size,
          path: nlib.path.split('/').pop(),
          isNative: true
        }
      })
  }

  const popSlashPath = (path: string): string => {
    const tempArray = path.split('/')
    tempArray.pop()
    return tempArray.join('/')
  }

  export const parseLibraries = (libraries: LibraryType[]): DefaultLib[] => {
    return libraries
      .filter(lib => lib && !parseRule(lib))
      .filter(lib => !(lib.downloads?.classifiers?.[nativeos] && !parseRule(lib)))
      .map(lib => {
        const libparts = lib?.name?.split(':') || []
        let jarPath, name
        if (lib.downloads?.artifact?.path) {
          name =
            lib.downloads.artifact.path.split('/')[
            lib.downloads.artifact.path.split('/').length - 1
              ]
          jarPath = popSlashPath(lib.downloads.artifact.path)
        } else {
          name = `${libparts[1]}-${libparts[2]}${
            libparts[3] ? '-' + libparts[3] : ''
          }.jar`
          jarPath = `${libparts[0].replace(/\./g, '/')}/${libparts[1]}/${
            libparts[2]
          }`
        }
        let url
        if (lib.url)
          url = `${lib.url}${libparts[0].replace(/\./g, '/')}/${libparts[1]}/${
            libparts[2]
          }/${name}`
        else url = lib.downloads?.artifact?.url
        return {
          size: lib.downloads?.artifact?.size,
          url,
          path: path.join(jarPath, name),
          hash: lib.downloads?.artifact?.sha1,
          notIncludeCP: lib.notIncludeCP
        }
      })
  }

}
