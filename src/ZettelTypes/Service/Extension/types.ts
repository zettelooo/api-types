import { Entity } from '../../Entity'

export type PageEntityForExtension<D = any> = Entity.Page & {
  readonly hasExtensionInstalled: boolean
  readonly extensionData: D | undefined
}
