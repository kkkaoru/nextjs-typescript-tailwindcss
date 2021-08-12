import { render } from '@testing-library/react';
import { Example } from '@/components/example';

describe('Example', () => {
  it('should be matched snapshot', () => {
    const { asFragment } = render(< Example />, {});
    expect(asFragment()).toMatchSnapshot();
  })
});
