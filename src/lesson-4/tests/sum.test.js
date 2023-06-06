import { sum } from '../scripts/sum';

describe('sum function', () => {
  test('two plus three equals five', () => {
    expect(sum(2)(3)).toBe(5);
  });

  test('zero plus zero', () => {
    expect(sum(0)(0)).toBe(0);
  });

  test('incorrect num1', () => {
    expect(() => sum('one')(3)).toThrow(Error);
  });

  test('incorrect num2', () => {
    expect(sum(4)('five')).toBeNaN();
  });
});
