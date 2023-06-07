import { Id } from '@zettelooo/commons'
import { Base } from '../Base'
import { Type } from '../Type'

export interface PageMember extends Base {
  readonly type: Type.PageMember
  readonly pageId: Id
  readonly userId: Id
  readonly role: PageMember.Role
}

export namespace PageMember {
  export enum Role {
    Owner = 'OWNER',
    Admin = 'ADMIN',
    Editor = 'EDITOR',
    Viewer = 'VIEWER',
  }
}
