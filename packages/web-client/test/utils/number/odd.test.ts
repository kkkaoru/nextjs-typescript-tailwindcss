import { isOdd } from '@/utils/number';

describe('isOdd', () => {
  it('should be true', () => {
    expect(isOdd(1)).toBeTruthy();
    expect(isOdd(-1)).toBeTruthy();
    expect(isOdd(3)).toBeTruthy();
    expect(isOdd(-3)).toBeTruthy();
  });
  it('should be falsy', () => {
    expect(isOdd(0)).toBeFalsy();
    expect(isOdd(-2)).toBeFalsy();
    expect(isOdd(2)).toBeFalsy();
  });
});
