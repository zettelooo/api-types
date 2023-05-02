import { Base, Type } from '../types'

export interface User extends Base {
  readonly type: Type.User
  readonly name: string
  readonly userName: string
  readonly email: string
  readonly backgroundColor: string
  readonly avatarFileId: string | null
}
