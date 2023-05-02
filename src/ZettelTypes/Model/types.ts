import { Account } from './models/Account'
import { Card } from './models/Card'
import { Page } from './models/Page'
import { PageMember } from './models/PageMember'
import { User } from './models/User'

export enum Type {
  Account = 'ACCOUNT',
  User = 'USER',
  Page = 'PAGE',
  PageMember = 'PAGE_MEMBER',
  Card = 'CARD',
}

export type Model<T extends Type = Type> = {
  [Type.Account]: Account
  [Type.User]: User
  [Type.Page]: Page
  [Type.PageMember]: PageMember
  [Type.Card]: Card
}[T]

export type Entity<T extends Type = Type> = Metadata & Model<T>

export namespace Entity {
  export type Account = Entity<Type.Account>
  export type User = Entity<Type.User>
  export type Page = Entity<Type.Page>
  export type PageMember = Entity<Type.PageMember>
  export type Card = Entity<Type.Card>
}

export type Updates<T extends Type = Type> = Base & Partial<Model<T>>

export interface Base {
  readonly type: Type
  readonly id: string
}
export interface Metadata {
  readonly version: number
  readonly createdAt: number
  readonly updatedAt: number
  readonly isDeleted: boolean
}
