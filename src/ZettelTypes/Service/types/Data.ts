export interface Data {
  readonly pagePrivate: any
  readonly cardPublic: any
  readonly cardPrivate: any
}

export namespace Data {
  export type Default = Builder<{}>

  export type Builder<
    D extends {
      pagePrivate?: any
      cardPublic?: any
      cardPrivate?: any
    }
  > = {
    readonly pagePrivate: D['pagePrivate'] | undefined
    readonly cardPublic: D['cardPublic'] | undefined
    readonly cardPrivate: D['cardPrivate'] | undefined
  }
}
