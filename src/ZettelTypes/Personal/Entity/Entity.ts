import { Model } from '../../Model'

export type ByType<T extends Model.Type = Model.Type> = {
  [Model.Type.User]: User
  [Model.Type.Page]: Page
  [Model.Type.PageMember]: PageMember
  [Model.Type.Card]: Card
}[T]

export type User = Metadata & Model.ByType<Model.Type.User>

export type Page = Metadata & Model.ByType<Model.Type.Page>

export type PageMember = Metadata & Model.ByType<Model.Type.PageMember>

export type Card = Metadata & Model.ByType<Model.Type.Card>

export interface Metadata {
  readonly version: number
  readonly createdAt: number
  readonly updatedAt: number
  readonly isDeleted: boolean
}
