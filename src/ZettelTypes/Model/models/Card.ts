import { Base, Type } from '../types'
import { Block } from '../types/Block'

export interface Card extends Base {
  readonly type: Type.Card
  readonly catalystUserId: string
  readonly ownerId: string
  readonly color: string
  readonly pageId: string | null
  readonly sequence: string
  readonly blocks: readonly Block[]
}
