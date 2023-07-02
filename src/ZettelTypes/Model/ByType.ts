import { Type } from './Type'
import { Card } from './models/Card'
import { Page } from './models/Page'
import { User } from './models/User'

export type ByType<T extends Type = Type> = {
  [Type.User]: User
  [Type.Page]: Page
  [Type.Card]: Card
}[T]
