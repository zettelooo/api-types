import { Base, Type } from '../types'

export interface Account extends Base {
  readonly type: Type.Account
  readonly name: string
  readonly userName: string
  readonly email: string
  readonly color: string
  readonly avatarFileId: string | null
  readonly walletAddress: string | null
}
