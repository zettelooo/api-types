import { Entity } from './Entity'
import { Model } from './Model'

export type CardEntityForExtension<CD = any, BD = any> = Omit<Entity.Card, 'blocks'> & {
  readonly blocks: readonly (Model.Block & { readonly extensionData: BD | undefined })[]
  readonly extensionData: CD | undefined
}
