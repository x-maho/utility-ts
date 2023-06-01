/** @since 0.0.1 */

// -----------------------------------------------------------------------------
// struct
// -----------------------------------------------------------------------------

/**
 * Get a property in an struct with type safety
 *
 * @since 0.0.4
 * @category struct
 * @example
 *   import { struct } from '@xmaho/utility-ts'
 *   assert.deepStrictEqual(struct.get('a')({a: 'hello'}), 'hello')
 */
export const get =
  <K extends string | number | symbol>(k: K) =>
  <A>(a: { [P in K]: A }): A =>
    a[k]
