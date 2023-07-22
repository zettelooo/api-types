import { Id } from '@zettelooo/commons'
import { Model } from '../Model'
import { Data } from '../Data'

export namespace GetUsers {
  export interface Request {
    readonly userIds: readonly Id[]
  }
  export interface Response {
    readonly users: readonly Model.User[]
  }
}

export namespace GetPages {
  export interface Request {
    readonly pageIds?: readonly Id[]
    readonly withExtensionInstalled?: boolean
  }
  export interface Response<D extends Data = Data.Default> {
    readonly pages: readonly Model.Page<D['page']>[]
  }
}

export namespace EditPage {
  export interface Request<D extends Data = Data.Default> {
    readonly accountId?: Id
    readonly pageId: Id
    readonly updates: Readonly<
      Partial<
        Pick<
          Model.Page<D['page']>,
          'name' | 'description' | 'iconEmoji' | 'avatarFileId' | 'color' | 'memberUserIds' | 'public' | 'data'
        >
      >
    >
    readonly senderRegistrationKey?: string
  }
  export interface Response {}
}

export namespace GetCards {
  export interface Request {
    readonly cardIds?: readonly string[]
    readonly pageIds?: readonly string[]
  }
  export interface Response<D extends Data = Data.Default> {
    readonly cards: readonly Model.Card<D['card']>[]
  }
}

export namespace AddCard {
  export interface Request<D extends Data = Data.Default> {
    readonly accountId?: Id
    readonly card: Readonly<
      Pick<Model.Card<D['card']>, 'pageId'> & Partial<Pick<Model.Card<D['card']>, 'sequence' | 'data'>>
    >
    readonly senderRegistrationKey?: string
  }
  export interface Response {
    readonly cardId: Id
  }
}

export namespace EditCard {
  export interface Request<D extends Data = Data.Default> {
    readonly accountId?: Id
    readonly cardId: Id
    readonly updates: Readonly<Partial<Pick<Model.Card<D['card']>, 'sequence' | 'data'>>>
    readonly senderRegistrationKey?: string
  }
  export interface Response {}
}
