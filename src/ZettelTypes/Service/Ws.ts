import { Data } from '../Data'
import { Model } from '../Model'

export namespace GetUpdates {
  export type Request<T extends Request.Type = Request.Type> = {
    [Request.Type.Start]: {
      readonly type: Request.Type.Start
      readonly extensionAccessKey: string
    }
  }[T]

  export namespace Request {
    export enum Type {
      Start = 'START',
    }
  }

  export type Response<T extends Response.Type = Response.Type, D extends Data = Data.Default> = {
    [Response.Type.Started]: {
      readonly type: Response.Type.Started
      readonly registrationKey: string
    }
    [Response.Type.Mutation]: {
      readonly type: Response.Type.Mutation
      readonly mutation: Response.Mutation<D>
    }
  }[T]

  export namespace Response {
    export enum Type {
      Started = 'STARTED',
      Mutation = 'MUTATION',
    }

    export type Mutation<D extends Data = Data.Default> =
      | {
          readonly type: 'user'
          readonly newUser: Model.User
          readonly oldUser?: Model.User
        }
      | {
          readonly type: 'page'
          readonly newPage: Model.Page<D['page']>
          readonly oldPage?: Model.Page<D['page']>
        }
      | {
          readonly type: 'card'
          readonly newCard: Model.Card<D['card']>
          readonly oldCard?: Model.Card<D['card']>
          readonly page: Model.Page<D['page']>
        }
  }
}
