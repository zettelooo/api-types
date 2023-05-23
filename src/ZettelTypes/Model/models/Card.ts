import { Base, Type } from '../types'
import { Block } from '../types/Block'

export interface Card extends Base {
  readonly type: Type.Card
  readonly ownerUserId: string
  readonly editorUserId: string | null
  readonly color: string
  readonly pageId: string
  readonly sequence: string
  readonly blocks: readonly Block[]
}
