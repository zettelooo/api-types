import { Entity } from '../../Entity'
import { Model } from '../../Model'

export type PageEntityForExtension<D = any> = Entity.Page & {
  readonly hasExtensionInstalled: boolean
  readonly extensionData: D | undefined
}

export type CardEntityForExtension<CD = any, BD = any> = Omit<Entity.Card, 'blocks'> & {
  readonly blocks: readonly (Model.Block & { readonly extensionData: BD })[]
  readonly extensionData: CD | undefined
}
