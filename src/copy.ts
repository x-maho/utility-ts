/** @since 0.0.3 */

import * as E from 'fp-ts/Either'
import { Either } from 'fp-ts/Either'
import * as Json from 'fp-ts/Json'
import { pipe } from 'fp-ts/function'

// -----------------------------------------------------------------------------
// copy
// -----------------------------------------------------------------------------

/**
 * It makes a deep copy of an object
 *
 * @since 0.0.3
 * @category copy
 * @example
 *   import { copy } from '@xmaho/utility-ts'
 *   assert.deepStrictEqual(copy.deepCopy('a'), E.right('a'))
 */
export const deepCopy = <A>(a: A): Either<unknown, A> =>
  pipe(
    Json.stringify(a),
    E.flatMap(Json.parse as (s: string) => E.Either<unknown, A>)
  )
