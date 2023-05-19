/** @since 0.0.3 */

import * as TE from 'fp-ts/TaskEither'

// -----------------------------------------------------------------------------
// TaskEither
// -----------------------------------------------------------------------------

/**
 *
 *
 * @since 0.0.3
 * @category TaskEither
 * @example
 *   import { TaskEither } from '@xmaho/utility-ts'
 *   const task = TaskEither.taskify(E.toError)((a: string) => Promise.resolve(a)) // the task is a TaskEither<Error, string>
 */
export const taskify =
  <E>(onRejected: (e: unknown) => E) =>
  <A, Args extends unknown[]>(f: (...args: Args) => Promise<A>) =>
  (...args: Args) => {
    return TE.tryCatch(() => f(...args), onRejected)
  }
