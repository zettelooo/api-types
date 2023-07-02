import { Id } from '@zettelooo/commons'
import { Model } from '../Model'
import { Data } from './types/Data'

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
    readonly pages: readonly Model.Page<D['pagePrivate']>[]
  }
}

export namespace AddPage {
  export interface Request<D extends Data = Data.Default> {
    readonly page: Readonly<
      Pick<Model.Page<D['pagePrivate']>, 'name'> &
        Partial<
          Pick<
            Model.Page<D['pagePrivate']>,
            | 'description'
            | 'iconEmoji'
            | 'avatarFileId'
            | 'color'
            | 'memberUserIds'
            | 'public'
            | 'hasExtensionInstalled'
            | 'privateData'
          >
        >
    >
    readonly senderRegistrationKey?: string
  }
  export interface Response {
    readonly pageId: Id
  }
}

export namespace EditPage {
  export interface Request<D extends Data = Data.Default> {
    readonly pageId: Id
    readonly updates: Readonly<
      Partial<
        Pick<
          Model.Page<D['pagePrivate']>,
          | 'name'
          | 'description'
          | 'iconEmoji'
          | 'avatarFileId'
          | 'color'
          | 'memberUserIds'
          | 'public'
          | 'hasExtensionInstalled'
          | 'privateData'
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
    readonly cards: readonly Model.Card<D['cardPublic'], D['cardPrivate']>[]
  }
}

export namespace AddCard {
  export interface Request<D extends Data = Data.Default> {
    readonly card: Readonly<
      Pick<Model.Card<D['cardPublic'], D['cardPrivate']>, 'pageId'> &
        Partial<Pick<Model.Card<D['cardPublic'], D['cardPrivate']>, 'sequence' | 'publicData' | 'privateData'>>
    >
    readonly senderRegistrationKey?: string
  }
  export interface Response {
    readonly cardId: Id
  }
}

export namespace EditCard {
  export interface Request<D extends Data = Data.Default> {
    readonly cardId: Id
    readonly updates: Readonly<
      Partial<Pick<Model.Card<D['cardPublic'], D['cardPrivate']>, 'pageId' | 'sequence' | 'publicData' | 'privateData'>>
    >
    readonly senderRegistrationKey?: string
  }
  export interface Response {}
}
