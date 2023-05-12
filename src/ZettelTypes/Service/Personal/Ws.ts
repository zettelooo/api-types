import { Entity } from '../../Entity'

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
        readonly allUserRelatedEntities?: boolean
        readonly account?: boolean
        readonly addUserIds?: readonly string[]
        readonly removeUserIds?: readonly string[]
        readonly addPageIds?: readonly string[]
        readonly removePageIds?: readonly string[]
        readonly addPageWithCardsIds?: readonly string[]
        readonly removePageWithCardsIds?: readonly string[]
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
  }
  [Response.Type.Subscriptions]: {
    readonly type: Response.Type.Subscriptions
    readonly subscriptions: Subscriptions
  }
  [Response.Type.Mutation]: {
    readonly type: Response.Type.Mutation
  } & (
    | {
        readonly newEntity: Entity.Account
        readonly oldEntity?: Entity.Account
      }
    | {
        readonly newEntity: Entity.User
        readonly oldEntity?: Entity.User
      }
    | {
        readonly newEntity: Entity.Page
        readonly oldEntity?: Entity.Page
      }
    | {
        readonly newEntity: Entity.PageMember
        readonly oldEntity?: Entity.PageMember
      }
    | {
        readonly newEntity: Entity.Card
        readonly oldEntity?: Entity.Card
      }
  )
}[T]

export namespace Response {
  export enum Type {
    Started = 'STARTED',
    Subscriptions = 'SUBSCRIPTIONS',
    Mutation = 'MUTATION',
  }
}

export interface Subscriptions {
  readonly allUserRelatedEntities: boolean
  readonly account: boolean
  readonly userIds: readonly string[]
  readonly pageIds: readonly string[]
  readonly pageWithCardsIds: readonly string[]
  readonly pagelessCards: boolean
}
