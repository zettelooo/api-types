import { Entity } from '../../Entity'
import { CardEntityForExtension, PageEntityForExtension } from './types'

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
          readonly newUser: Entity.User
          readonly oldUser?: Entity.User
        }
      | {
          readonly type: 'page'
          readonly newPage: PageEntityForExtension<PD>
          readonly oldPage?: PageEntityForExtension<PD>
        }
      | {
          readonly type: 'page member'
          readonly newPageMember: Entity.PageMember
          readonly oldPageMember?: Entity.PageMember
          readonly page: PageEntityForExtension<PD>
        }
      | {
          readonly type: 'card'
          readonly newCard: CardEntityForExtension<CD>
          readonly oldCard?: CardEntityForExtension<CD>
          readonly page: PageEntityForExtension<PD>
        }
  }
}
