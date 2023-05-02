import { Model } from '../../Model'

export type PageEntityForExtension<D = any> = Model.Entity.Page & {
  readonly hasExtensionInstalled: boolean
  readonly extensionManagedData: D | undefined
}
