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

  export type Response<T extends Response.Type = Response.Type, PD = any, CD = any> = {
    [Response.Type.Started]: {
      readonly type: Response.Type.Started
      readonly registrationKey: string
    }
    [Response.Type.Mutation]: {
      readonly type: Response.Type.Mutation
      readonly mutation: Response.Mutation<PD, CD>
    }
  }[T]

  export namespace Response {
    export enum Type {
      Started = 'STARTED',
      Mutation = 'MUTATION',
    }

    export type Mutation<PD = any, CD = any> =
      | {
          readonly type: 'user'
          readonly newUser: Model.User
          readonly oldUser?: Model.User
        }
      | {
          readonly type: 'page'
          readonly newPage: Model.Page<PD>
          readonly oldPage?: Model.Page<PD>
        }
      | {
          readonly type: 'page member'
          readonly newPageMember: Model.PageMember
          readonly oldPageMember?: Model.PageMember
          readonly page: Model.Page<PD>
        }
      | {
          readonly type: 'card'
          readonly newCard: Model.Card<CD>
          readonly oldCard?: Model.Card<CD>
          readonly page: Model.Page<PD>
        }
  }
}
