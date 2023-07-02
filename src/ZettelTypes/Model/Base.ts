import { Id, Timestamp } from '@zettelooo/commons'
import { Type } from './Type'

export interface Base {
  readonly type: Type
  readonly id: Id
  readonly version: number
  readonly createdAt: Timestamp
  readonly updatedAt: Timestamp
  readonly isDeleted: boolean
}
