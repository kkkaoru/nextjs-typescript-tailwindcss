import { render } from '@testing-library/react';
import { Button } from '@/components/atoms/button/Button';

describe('example', () => {
  it('should be matched snapshot', () => {
    const { asFragment } = render(<Button label="button" />);
    expect(asFragment()).toMatchSnapshot();
  });
});
