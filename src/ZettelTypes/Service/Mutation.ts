export interface Mutation<T, E> {
  readonly type: T
  readonly newEntity: E
  readonly oldEntity?: E
}
