import { Id } from '@zettelooo/commons'
import { Base } from '../Base'
import { Type } from '../Type'

export interface Page<PD = any> extends Base {
  readonly type: Type.Page
  readonly ownerUserId: Id
  readonly name: string
  readonly description: string
  readonly iconEmoji: string
  readonly color: string
  readonly avatarFileId: Id | null
  readonly view: Page.View
  readonly public: boolean
  readonly hasExtensionInstalled: boolean
  readonly extensionData: PD | undefined
}

export namespace Page {
  export enum View {
    List = 'LIST',
    Gallery = 'GALLERY',
  }
}
