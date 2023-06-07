import { Id } from '@zettelooo/commons'
import { Model } from '../Model'

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
  export interface Response<PD = any> {
    readonly pages: readonly Model.Page<PD>[]
  }
}

export namespace GetPageMembers {
  export interface Request {
    readonly userIds?: readonly Id[]
    readonly pageIds?: readonly Id[]
  }
  export interface Response {
    readonly pageMembers: readonly Model.PageMember[]
  }
}

export namespace GetCards {
  export interface Request {
    readonly cardIds?: readonly string[]
    readonly pageIds?: readonly string[]
  }
  export interface Response<CD = any> {
    readonly cards: readonly Model.Card<CD>[]
  }
}

export namespace SetPageExtensionData {
  export interface Request<PD = any> {
    readonly pageId: string
    readonly data?: PD
    readonly senderRegistrationKey?: string
  }
  export interface Response {}
}

export namespace SetCardExtensionData {
  export interface Request<CD = any> {
    readonly cardId: Id
    readonly data?: CD
    readonly senderRegistrationKey?: string
  }
  export interface Response {}
}

export namespace AddPage {
  export interface Request<PD = any> {
    readonly page: Readonly<
      Pick<Model.Page<PD>, 'ownerUserId' | 'name'> &
        Partial<
          Pick<
            Model.Page<PD>,
            | 'description'
            | 'iconEmoji'
            | 'color'
            | 'avatarFileId'
            | 'public'
            | 'hasExtensionInstalled'
            | 'extensionData'
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
  export interface Request<PD = any> {
    readonly pageId: Id
    readonly updates: Readonly<
      Partial<
        Pick<
          Model.Page<PD>,
          | 'name'
          | 'description'
          | 'iconEmoji'
          | 'color'
          | 'avatarFileId'
          | 'public'
          | 'hasExtensionInstalled'
          | 'extensionData'
        >
      >
    >
    readonly senderRegistrationKey?: string
  }
  export interface Response {}
}

export namespace AddCard {
  export interface Request<CD = any> {
    readonly card: Readonly<
      Pick<Model.Card<CD>, 'ownerUserId' | 'pageId'> &
        Partial<Pick<Model.Card<CD>, 'color' | 'sequence' | 'text' | 'files' | 'extensionData'>>
    >
    readonly senderRegistrationKey?: string
  }
  export interface Response {
    readonly cardId: Id
  }
}

export namespace EditCard {
  export interface Request<CD = any> {
    readonly cardId: Id
    readonly updates: Readonly<
      Partial<Pick<Model.Card<CD>, 'pageId' | 'color' | 'sequence' | 'text' | 'files' | 'extensionData'>>
    >
    readonly senderRegistrationKey?: string
  }
  export interface Response {}
}
