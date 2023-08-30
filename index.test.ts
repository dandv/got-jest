import { foo } from './index.ts';

test('foo', () => {
  const result = foo();
  expect(result).toEqual(42);
});
