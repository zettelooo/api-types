import { Id } from '@zettelooo/commons'
import { Base } from '../Base'
import { Type } from '../Type'

export interface User extends Base {
  readonly type: Type.User
  readonly name: string
  readonly userName: string
  readonly email: string
  readonly avatarFileId: Id | null
  readonly color: string
}
