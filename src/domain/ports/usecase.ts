export interface Usecase<T, Q> {
  execute(data: T): Promise<Q>;
}