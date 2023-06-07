import { Id } from '@zettelooo/commons'

export interface File {
  readonly id: Id
  readonly name: string
  readonly mimeType: string
  readonly size: number
}
