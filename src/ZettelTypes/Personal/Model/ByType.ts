import { Type } from './Type'
import { Card } from './models/Card'
import { Page } from './models/Page'
import { PageMember } from './models/PageMember'
import { User } from './models/User'

export type ByType<T extends Type = Type> = {
  [Type.User]: User
  [Type.Page]: Page
  [Type.PageMember]: PageMember
  [Type.Card]: Card
}[T]
