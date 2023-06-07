import { Id } from '@zettelooo/commons'
import { Model } from '../Model'

export namespace Utilities {
  export namespace Ids {
    /** No authentication. */
    export namespace Get {
      export interface RequestQuery {
        readonly count?: number
      }
      export interface ResponseBody {
        ids: Id[]
      }
    }
  }

  export namespace Sequence {
    /** No authentication. */
    export namespace Get {
      export interface RequestQuery {
        readonly previous_sequence?: string
        readonly next_sequence?: string
      }
      export interface ResponseBody {
        sequence: string
      }
    }
  }
}

export namespace Auth {
  /** Sign-in with Ethereum */
  export namespace Siwe {
    export namespace Check {
      /** No authentication. */
      export namespace Get {
        export interface RequestQuery {
          readonly wallet_address: string
        }
        export interface ResponseBody {
          readonly userExists: boolean
        }
      }
    }

    export namespace Nonce {
      /** No authentication. */
      export namespace Get {
        export interface RequestQuery {
          readonly wallet_address: string
          readonly name?: string
          readonly user_name?: string
          readonly email?: string
        }
        export interface ResponseBody {
          readonly nonceMessage: string
        }
      }
    }

    export namespace Verify {
      /** No authentication. */
      export namespace Post {
        export interface RequestBody {
          readonly walletAddress: string
          readonly nonceMessage: string
          readonly signedNonceMessage: string
          readonly deviceId: Id
        }
        export interface ResponseBody {
          readonly accessToken: string
          readonly refreshToken: string
        }
      }
    }
  }

  export namespace RefreshAccessToken {
    /** No authentication. */
    export namespace Post {
      export interface RequestBody {
        readonly refreshToken: string
      }
      export interface ResponseBody {
        readonly accessToken: string
        readonly refreshToken: string
      }
    }
  }

  export namespace ApiKeys {
    /** Authenticated with `Access-Token` only. */
    export namespace Get {
      export interface ResponseBody {
        readonly apiKeys: readonly string[]
      }
    }

    /** Authenticated with `Access-Token` only. */
    export namespace Post {}

    export namespace ApiKey {
      /** Authenticated with `Access-Token` only. */
      export namespace Delete {
        export interface RequestParams {
          readonly apiKey: string
        }
      }
    }
  }
}

export namespace Account {
  /** Authenticated with `Access-Token` or `API-Key`. */
  export namespace Get {
    export interface ResponseBody {
      readonly account: Model.User
    }
  }

  export namespace Put {
    /** Authenticated with `Access-Token` only. */
    export interface RequestBody {
      readonly updates: Partial<Pick<Model.User, 'name' | 'userName' | 'email' | 'color' | 'avatarFileId'>>
      readonly senderRegistrationKey?: string
    }
  }
}

export namespace Users {
  export namespace User {
    /** No authentication. */
    export namespace Get {
      export interface RequstParams {
        readonly userId: Id
      }
      export interface ResponseBody {
        readonly user: Model.User
      }
    }
  }

  export namespace Search {
    /** Authenticated with `Access-Token` or `API-Key`. */
    export namespace Get {
      export interface RequestQuery {
        readonly query: string
        readonly skip?: number
        readonly limit?: number
      }
      export interface ResponseBody {
        readonly users: readonly Model.User[]
      }
    }
  }
}

export namespace Pages {
  /** Authenticated with `Access-Token` or `API-Key`. */
  export namespace Get {
    export interface ResponseBody {
      readonly pages: readonly Model.Page[]
    }
  }

  export namespace Post {
    /** Authenticated with `Access-Token` or `API-Key`. */
    export interface RequestBody {
      readonly page: Readonly<
        Pick<Model.Page, 'name'> &
          Partial<Pick<Model.Page, 'description' | 'iconEmoji' | 'color' | 'avatarFileId' | 'view' | 'public'>>
      >
      readonly addOwnerPageMember?: boolean
      readonly senderRegistrationKey?: string
    }
    export interface ResponseBody {
      readonly id: Id
      readonly ownerPageMemberId?: Id
    }
  }

  export namespace Page {
    /** Authenticated with `Access-Token` or `API-Key`. */
    export namespace Get {
      export interface RequestParams {
        readonly pageId: Id
      }
      export interface ResponseBody {
        readonly page: Model.Page
        readonly membership: Model.PageMember
      }
    }

    /** Authenticated with `Access-Token` or `API-Key`. */
    export namespace Put {
      export interface RequestParams {
        readonly pageId: Id
      }
      export interface RequestBody {
        readonly updates: Readonly<
          Partial<Pick<Model.Page, 'name' | 'description' | 'iconEmoji' | 'color' | 'avatarFileId' | 'view' | 'public'>>
        >
        readonly senderRegistrationKey?: string
      }
    }

    /** Authenticated with `Access-Token` or `API-Key`. */
    export namespace Delete {
      export interface RequestParams {
        readonly pageId: Id
      }
      export interface RequestBody {
        readonly senderRegistrationKey?: string
      }
    }
  }
}

export namespace PageMembers {
  /** Authenticated with `Access-Token` or `API-Key`. */
  export namespace Get {
    export interface RequestQuery {
      readonly page_id: string
    }
    export interface ResponseBody {
      readonly pageMembers: readonly Model.PageMember[]
    }
  }

  /** Authenticated with `Access-Token` or `API-Key`. */
  export namespace Post {
    export interface RequestBody {
      readonly pageMember: Readonly<
        Pick<Model.PageMember, 'pageId'> & Partial<Pick<Model.PageMember, 'userId' | 'role'>>
      >
      readonly senderRegistrationKey?: string
    }
    export interface ResponseBody {
      readonly id: Id
    }
  }

  export namespace PageMember {
    /** Authenticated with `Access-Token` or `API-Key`. */
    export namespace Get {
      export interface RequestParams {
        readonly pageMemberId: Id
      }
      export interface ResponseBody {
        readonly pageMember: Model.PageMember
      }
    }

    /** Authenticated with `Access-Token` or `API-Key`. */
    export namespace Put {
      export interface RequestParams {
        readonly pageMemberId: Id
      }
      export interface RequestBody {
        readonly updates: Readonly<Partial<Pick<Model.PageMember, 'role'>>>
        readonly senderRegistrationKey?: string
      }
    }

    /** Authenticated with `Access-Token` or `API-Key`. */
    export namespace Delete {
      export interface RequestParams {
        readonly pageMemberId: Id
      }
      export interface RequestBody {
        readonly senderRegistrationKey?: string
      }
    }
  }
}

export namespace Cards {
  /** Authenticated with `Access-Token` or `API-Key`. */
  export namespace Get {
    export interface RequestQuery {
      readonly page_id?: string
      readonly skip?: number
      readonly limit?: number
    }
    export interface ResponseBody {
      readonly cards: readonly Model.Card[]
    }
  }

  /** Authenticated with `Access-Token` or `API-Key`. */
  export namespace Post {
    export interface RequestBody {
      readonly card: Readonly<
        Pick<Model.Card, 'pageId'> & Partial<Pick<Model.Card, 'color' | 'sequence' | 'text' | 'files'>>
      >
      readonly senderRegistrationKey?: string
    }
    export interface ResponseBody {
      readonly id: Id
    }
  }

  export namespace Card {
    /** Authenticated with `Access-Token` or `API-Key`. */
    export namespace Get {
      export interface RequestParams {
        readonly cardId: Id
      }
      export interface ResponseBody {
        readonly card: Model.Card
      }
    }

    /** Authenticated with `Access-Token` or `API-Key`. */
    export namespace Put {
      export interface RequestParams {
        readonly cardId: Id
      }
      export interface RequestBody {
        readonly updates: Readonly<Partial<Pick<Model.Card, 'color' | 'pageId' | 'sequence' | 'text' | 'files'>>>
        readonly senderRegistrationKey?: string
      }
    }

    /** Authenticated with `Access-Token` or `API-Key`. */
    export namespace Delete {
      export interface RequestParams {
        readonly cardId: Id
      }
      export interface RequestBody {
        readonly senderRegistrationKey?: string
      }
    }
  }
}

export namespace PublicPages {
  export namespace PublicPage {
    /** No authentication. */
    export namespace Get {
      export interface RequestParams {
        readonly publicPageId: Id
      }
      export interface ResponseBody {
        readonly publicPage: Model.Page
      }
    }

    export namespace Cards {
      /** No authentication. */
      export namespace Get {
        export interface RequestParams {
          readonly publicPageId: Id
        }
        export interface RequestQuery {
          readonly skip?: number
          readonly limit?: number
        }
        export interface ResponseBody {
          readonly cards: readonly Model.Card[]
        }
      }

      export namespace Card {
        /** No authentication. */
        export namespace Get {
          export interface RequestParams {
            readonly publicPageId: Id
            readonly cardId: Id
          }
          export interface ResponseBody {
            readonly card: Model.Card
          }
        }
      }
    }
  }
}
