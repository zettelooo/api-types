import { Id } from '@zettelooo/commons'
import { Base } from '../Base'
import { Type } from '../Type'
import { File } from '../types/File'

export interface Card<CD = any> extends Base {
  readonly type: Type.Card
  readonly ownerUserId: Id
  readonly editorUserId: Id | null
  readonly color: string
  readonly pageId: Id
  readonly sequence: string
  readonly text: string
  readonly files: readonly File[]
  readonly extensionData: CD | undefined
}
