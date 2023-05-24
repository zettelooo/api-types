import { Entity } from '../Entity'

export namespace GetUsers {
  export interface Request {
    readonly userIds: readonly string[]
  }
  export interface Response {
    readonly users: readonly Entity.User[]
  }
}

export namespace GetPages {
  export interface Request {
    readonly pageIds?: readonly string[]
    readonly withExtensionInstalled?: boolean
  }
  export interface Response<D = any> {
    readonly pages: readonly Entity.Page<D>[]
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
    readonly cardIds?: readonly string[]
    readonly pageIds?: readonly string[]
  }
  export interface Response<CD = any, BD = any> {
    readonly cards: readonly Entity.Card<CD, BD>[]
  }
}

export namespace SetPageExtensionData {
  export interface Request<D = any> {
    readonly pageId: string
    readonly data?: D
  }
  export interface Response {}
}

export namespace SetCardExtensionData {
  export interface Request<D = any> {
    readonly cardId: string
    readonly data?: D
  }
  export interface Response {}
}

export namespace SetCardBlockExtensionData {
  export interface Request<D = any> {
    readonly cardId: string
    readonly blockId: string
    readonly data?: D
  }
  export interface Response {}
}

export namespace AddPage {
  export interface Request<D = any> {
    readonly page: Readonly<
      Pick<Entity.Page<D>, 'ownerUserId' | 'name'> &
        Partial<
          Pick<
            Entity.Page<D>,
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
  }
  export interface Response {
    readonly pageId: string
  }
}

export namespace EditPage {
  export interface Request<D = any> {
    readonly pageId: string
    readonly updates: Readonly<
      Partial<
        Pick<
          Entity.Page<D>,
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
  }
  export interface Response {}
}

export namespace AddCard {
  export interface Request<CD = any, BD = any> {
    readonly card: Readonly<
      Pick<Entity.Card<CD, BD>, 'ownerUserId' | 'pageId'> &
        Partial<Pick<Entity.Card<CD, BD>, 'color' | 'sequence' | 'extensionData'>> &
        (Pick<Entity.Card<CD, BD>, 'blocks'> | { readonly text: string })
    >
  }
  export interface Response {
    readonly cardId: string
  }
}

export namespace EditCard {
  export interface Request<CD = any, BD = any> {
    readonly cardId: string
    readonly updates: Readonly<
      Partial<
        Pick<Entity.Card<CD, BD>, 'pageId' | 'color' | 'sequence' | 'extensionData'> &
          (Pick<Entity.Card<CD, BD>, 'blocks'> | { readonly text: string })
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
