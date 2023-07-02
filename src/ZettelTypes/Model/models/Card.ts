import { Id } from '@zettelooo/commons'
import { Base } from '../Base'
import { Type } from '../Type'

export interface Card<PublicData = unknown, PrivateData = unknown> extends Base {
  readonly type: Type.Card
  readonly pageId: Id
  readonly sequence: string
  readonly publicData: PublicData | undefined
  readonly privateData: PrivateData | undefined
}
