import { Id } from '@zettelooo/commons'
import { Model } from '../Model'

export type Request<T extends Request.Type = Request.Type> = {
  [Request.Type.Start]: {
    readonly type: Request.Type.Start
    readonly authentication: {
      readonly accessToken?: string
      readonly apiKey?: string
    }
    readonly subscriptions?: Partial<Subscriptions>
  }
  [Request.Type.UpdateSubscriptions]: {
    readonly type: Request.Type.UpdateSubscriptions
  } & (
    | {
        readonly unsubscribeAll: true
        readonly newSubscriptions?: undefined
      }
    | {
        readonly unsubscribeAll?: false
        readonly newSubscriptions: Partial<Subscriptions>
      }
    | {
        readonly unsubscribeAll?: false
        readonly newSubscriptions?: undefined
        readonly allUserRelatedModels?: boolean
        readonly account?: boolean
        readonly addUserIds?: readonly Id[]
        readonly removeUserIds?: readonly Id[]
        readonly addPageIds?: readonly Id[]
        readonly removePageIds?: readonly Id[]
        readonly addPageWithCardsIds?: readonly Id[]
        readonly removePageWithCardsIds?: readonly Id[]
        readonly pagelessCards?: boolean
      }
  )
}[T]

export namespace Request {
  export enum Type {
    Start = 'START',
    UpdateSubscriptions = 'UPDATE_SUBSCRIPTIONS',
  }
}

export type Response<T extends Response.Type = Response.Type> = {
  [Response.Type.Started]: {
    readonly type: Response.Type.Started
    readonly registrationKey: string
  }
  [Response.Type.Subscriptions]: {
    readonly type: Response.Type.Subscriptions
    readonly subscriptions: Subscriptions
  }
  [Response.Type.Mutation]: {
    readonly type: Response.Type.Mutation
    readonly mutation: Response.Mutation
  }
}[T]

export namespace Response {
  export enum Type {
    Started = 'STARTED',
    Subscriptions = 'SUBSCRIPTIONS',
    Mutation = 'MUTATION',
  }

  export type Mutation =
    | {
        readonly type: 'user'
        readonly newUser: Model.User
        readonly oldUser?: Model.User
      }
    | {
        readonly type: 'page'
        readonly newPage: Model.Page
        readonly oldPage?: Model.Page
      }
    | {
        readonly type: 'page member'
        readonly newPageMember: Model.PageMember
        readonly oldPageMember?: Model.PageMember
      }
    | {
        readonly type: 'card'
        readonly newCard: Model.Card
        readonly oldCard?: Model.Card
      }
}

export interface Subscriptions {
  readonly allUserRelatedModels: boolean
  readonly account: boolean
  readonly userIds: readonly Id[]
  readonly pageIds: readonly Id[]
  readonly pageWithCardsIds: readonly Id[]
  readonly pagelessCards: boolean
}
