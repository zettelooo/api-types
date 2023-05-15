import { Entity } from '../../Entity'
import { Model } from '../../Model'
import { CardEntityForExtension, PageEntityForExtension } from './types'

export namespace GetUsers {
  export interface Request {
    readonly ids: readonly string[]
  }
  export interface Response {
    readonly users: readonly Entity.User[]
  }
}

export namespace GetPages {
  export interface Request {
    readonly ids?: readonly string[]
    readonly withExtensionInstalled?: boolean
  }
  export interface Response<D = any> {
    readonly pages: readonly PageEntityForExtension<D>[]
  }
}

export namespace GetPageMembers {
  export interface Request {
    readonly userIds?: readonly string[]
    readonly pageIds?: readonly string[]
  }
  export interface Response {
    readonly pageMembers: readonly Entity.PageMember[]
  }
}

export namespace GetCards {
  export interface Request {
    readonly ids?: readonly string[]
    readonly pageIds?: readonly string[]
  }
  export interface Response {
    readonly cards: readonly CardEntityForExtension[]
  }
}

export namespace SetPageExtensionData {
  export interface Request {
    readonly pageId: string
    readonly data?: any
  }
  export interface Response {}
}

export namespace SetCardExtensionData {
  export interface Request {
    readonly cardId: string
    readonly data?: any
  }
  export interface Response {}
}

export namespace AddCard {
  export interface Request {
    readonly card: Readonly<
      Pick<CardEntityForExtension, 'ownerId' | 'pageId'> &
        Partial<Pick<CardEntityForExtension, 'color' | 'sequence' | 'extensionData'>> &
        (Pick<CardEntityForExtension, 'blocks'> | { readonly text: string })
    >
  }
  export interface Response {
    readonly cardId: string
  }
}

export namespace EditCard {
  export interface Request {
    readonly id: string
    readonly updates: Readonly<
      Partial<
        Pick<CardEntityForExtension, 'catalystUserId' | 'pageId' | 'color' | 'sequence' | 'extensionData'> &
          (Pick<CardEntityForExtension, 'blocks'> | { readonly text: string })
      >
    >
  }
  export interface Response {}
}

export namespace AddBadge {
  export interface Request {
    readonly badge: {
      readonly userId: string
      // For now only this badge action type is needed, we may improve this later:
      readonly mentionInCard: {
        readonly userId: string
        readonly cardId: string
      }
    }
  }
  export interface Response {}
}
