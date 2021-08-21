import { repeatingMessage } from '@/utils/example';

describe('repeatingMessage', () => {
  it('should be repeating same message', () => {
    expect(repeatingMessage('example')).toBe('example');
    expect(repeatingMessage('')).toBe('');
  });
});
