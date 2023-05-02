import { Model } from '../../Model'
import { PageEntityForExtension } from './types'

export namespace GetUsers {
  export interface Request {
    readonly ids: readonly string[]
  }
  export interface Response {
    readonly users: readonly Model.Entity.User[]
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
    readonly pageMembers: readonly Model.Entity.PageMember[]
  }
}

export namespace GetCards {
  export interface Request {
    readonly ids?: readonly string[]
    readonly pageIds?: readonly string[]
  }
  export interface Response {
    readonly cards: readonly Model.Entity.Card[]
  }
}

export namespace SetPageExtensionManagedData {
  export interface Request {
    readonly pageId: string
    readonly data?: any
  }
  export interface Response {}
}

export namespace AddCard {
  export interface Request {
    readonly card: Readonly<
      Pick<Model.Card, 'ownerId' | 'pageId'> &
        Partial<Pick<Model.Card, 'color' | 'sequence'>> &
        (Pick<Model.Card, 'blocks'> | { readonly text: string })
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
        Pick<Model.Card, 'catalystUserId' | 'pageId' | 'color' | 'sequence'> &
          (Pick<Model.Card, 'blocks'> | { readonly text: string })
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
