/** @since 0.0.3 */

import * as E from 'fp-ts/Either'

// -----------------------------------------------------------------------------
// Either
// -----------------------------------------------------------------------------

/**
 * It converts a function that throws to a function that returns an Either
 *
 * @since 0.0.3
 * @category Either
 * @example
 *   import { Either } from '@xmaho/utility-ts'
 *   const either = Either.liftThrowable(E.toError)((a: string) => { throw new Error() }) // the either is a Either<Error, void>
 */
export const liftThrowable =
  <E>(onThrow: (e: unknown) => E) =>
  <A, Args extends unknown[]>(f: (...args: Args) => A) =>
  (...args: Args) => {
    return E.tryCatch(() => f(...args), onThrow)
  }
