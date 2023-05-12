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
    } & (
      | {
          readonly newEntity: Entity.User
          readonly oldEntity?: Entity.User
        }
      | {
          readonly newEntity: PageEntityForExtension<D>
          readonly oldEntity?: PageEntityForExtension<D>
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
      Mutation = 'MUTATION',
    }
  }
}
