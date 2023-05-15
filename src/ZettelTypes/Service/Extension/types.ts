import { Entity } from '../../Entity'

export type PageEntityForExtension<D = any> = Entity.Page & {
  readonly hasExtensionInstalled: boolean
  readonly extensionData: D | undefined
}

export type CardEntityForExtension<D = any> = Entity.Card & {
  readonly extensionData: D | undefined
}
