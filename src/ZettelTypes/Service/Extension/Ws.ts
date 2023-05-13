import { Entity } from '../../Entity'
import { PageEntityForExtension } from './types'

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

  export type Response<T extends Response.Type = Response.Type, D = any> = {
    [Response.Type.Started]: {
      readonly type: Response.Type.Started
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

    export type Mutation<D = any> =
      | {
          readonly type: 'user'
          readonly newUser: Entity.User
          readonly oldUser?: Entity.User
        }
      | {
          readonly type: 'page'
          readonly newPage: PageEntityForExtension<D>
          readonly oldPage?: PageEntityForExtension<D>
        }
      | {
          readonly type: 'page member'
          readonly newPageMember: Entity.PageMember
          readonly oldPageMember?: Entity.PageMember
          readonly page: Entity.Page
        }
      | {
          readonly type: 'card'
          readonly newCard: Entity.Card
          readonly oldCard?: Entity.Card
          readonly page: Entity.Page
        }
  }
}
