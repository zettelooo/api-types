export interface Data {
  readonly page: any
  readonly card: any
}

export namespace Data {
  export type Default = Builder<{}>

  export type Builder<
    D extends {
      page?: any
      card?: any
    }
  > = {
    readonly page: D['page'] | undefined
    readonly card: D['card'] | undefined
  }
}
