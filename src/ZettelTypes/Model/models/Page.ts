import { Id } from '@zettelooo/commons'
import { Base } from '../Base'
import { Type } from '../Type'

export interface Page<PrivateData = unknown> extends Base {
  readonly type: Type.Page
  readonly name: string
  readonly description: string
  readonly iconEmoji: string
  readonly avatarFileId: Id | null
  readonly color: string
  readonly memberUserIds: readonly Id[]
  readonly public: boolean
  readonly hasExtensionInstalled: boolean
  readonly privateData: PrivateData | undefined
}
