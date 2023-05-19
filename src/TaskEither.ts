/** @since 0.0.3 */

import * as TE from 'fp-ts/TaskEither'

// -----------------------------------------------------------------------------
// TaskEither
// -----------------------------------------------------------------------------

/**
 * It lifts a function that returns a Promise to a function that returns a TaskEither
 *
 * @since 0.0.3
 * @category TaskEither
 * @example
 *   import { TaskEither } from '@xmaho/utility-ts'
 *   const task = TaskEither.liftPromise(E.toError)((a: string) => Promise.resolve(a)) // the task is a TaskEither<Error, string>
 */
export const liftPromise =
  <E>(onRejected: (e: unknown) => E) =>
  <A, Args extends unknown[]>(f: (...args: Args) => Promise<A>) =>
  (...args: Args) => {
    return TE.tryCatch(() => f(...args), onRejected)
  }
