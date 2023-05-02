import { Base, Type } from '../types'

export interface PageMember extends Base {
  readonly type: Type.PageMember
  readonly catalystUserId: string
  readonly pageId: string
  readonly userId: string
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
