/** @since 0.0.1 */

// -----------------------------------------------------------------------------
// struct
// -----------------------------------------------------------------------------

/**
 * It's a lookup property in an struct with type safety
 *
 * @since 0.0.1
 * @category struct
 * @example
 *   import { struct } from '@xmaho/utility-ts'
 *   assert.deepStrictEqual(struct.lookup('a')({a: 'hello'}), 'hello')
 */
export const lookup =
  <K extends string | number | symbol>(k: K) =>
  <A>(a: { [P in K]: A }): A =>
    a[k]
