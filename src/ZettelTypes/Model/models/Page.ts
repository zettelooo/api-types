import { Base, Type } from '../types'

export interface Page extends Base {
  readonly type: Type.Page
  readonly ownerUserId: string
  readonly name: string
  readonly description: string
  readonly iconEmoji: string
  readonly color: string
  readonly avatarFileId: string | null
  readonly view: Page.View
  readonly public: boolean
}

export namespace Page {
  export enum View {
    List = 'LIST',
    Gallery = 'GALLERY',
  }
}
