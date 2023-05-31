import { Card } from './models/Card'
import { Page } from './models/Page'
import { PageMember } from './models/PageMember'
import { User } from './models/User'

export enum Type {
  User = 'USER',
  Page = 'PAGE',
  PageMember = 'PAGE_MEMBER',
  Card = 'CARD',
}

export interface Base {
  readonly type: Type
  readonly id: string
}

export type ByType<T extends Type = Type> = {
  [Type.User]: User
  [Type.Page]: Page
  [Type.PageMember]: PageMember
  [Type.Card]: Card
}[T]

export type Updates<T extends Type = Type> = Base & Partial<ByType<T>>
