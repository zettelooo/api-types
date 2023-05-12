import { Model } from './Model'

export type Entity<T extends Model.Type = Model.Type> = Entity.Metadata & Model.ByType<T>

export namespace Entity {
  export type Account = Entity<Model.Type.Account>
  export type User = Entity<Model.Type.User>
  export type Page = Entity<Model.Type.Page>
  export type PageMember = Entity<Model.Type.PageMember>
  export type Card = Entity<Model.Type.Card>

  export interface Metadata {
    readonly version: number
    readonly createdAt: number
    readonly updatedAt: number
    readonly isDeleted: boolean
  }
}
