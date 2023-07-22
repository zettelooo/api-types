import { Id } from '@zettelooo/commons'
import { Base } from '../Base'
import { Type } from '../Type'

export interface Card<D = unknown> extends Base {
  readonly type: Type.Card
  readonly pageId: Id
  readonly sequence: string
  readonly data: D | undefined
}
