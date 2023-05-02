import { Base, Type } from '../types'

export interface Page extends Base {
  readonly type: Type.Page
  readonly catalystUserId: string
  readonly name: string
  readonly description: string
  readonly ownerId: string
  readonly iconEmoji: string
  readonly color: string
  readonly avatarFileId: string | null
  readonly viewMode: Page.ViewMode
  readonly public: boolean
}

export namespace Page {
  export enum ViewMode {
    List = 'LIST',
    Gallery = 'GALLERY',
  }
}
