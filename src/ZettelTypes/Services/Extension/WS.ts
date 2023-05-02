import { Model } from '../../Model'
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
      readonly entity: Model.Entity.User | PageEntityForExtension<D> | Model.Entity.PageMember | Model.Entity.Card
    }
  }[T]

  export namespace Response {
    export enum Type {
      Started = 'STARTED',
      Mutation = 'MUTATION',
    }
  }
}
