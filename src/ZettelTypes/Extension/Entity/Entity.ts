import { Model } from '../../Model'

export type ByType<T extends Model.Type = Model.Type> = {
  [Model.Type.Account]: Account
  [Model.Type.User]: User
  [Model.Type.Page]: Page
  [Model.Type.PageMember]: PageMember
  [Model.Type.Card]: Card
}[T]

export type Account = Metadata & Model.ByType<Model.Type.Account>

export type User = Metadata & Model.ByType<Model.Type.User>

export type Page<D = any> = Metadata &
  Model.ByType<Model.Type.Page> & {
    readonly hasExtensionInstalled: boolean
    readonly extensionData: D | undefined
  }

export type PageMember = Metadata & Model.ByType<Model.Type.PageMember>

export type Card<CD = any, BD = any> = Omit<Metadata & Model.ByType<Model.Type.Card>, 'blocks'> & {
  readonly blocks: readonly Block<Model.Block.Type, BD>[]
  readonly extensionData: CD | undefined
}

export type Block<T extends Model.Block.Type = Model.Block.Type, D = any> = Model.Block<T> & {
  readonly extensionData: D | undefined
}

export interface Metadata {
  readonly version: number
  readonly createdAt: number
  readonly updatedAt: number
  readonly isDeleted: boolean
}
