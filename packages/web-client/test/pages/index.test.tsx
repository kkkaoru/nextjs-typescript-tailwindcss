import { render } from '@testing-library/react';
import Home from '@/pages/index';

describe('Top page', () => {
  it('should be matched snapshot', () => {
    const { asFragment } = render(<Home />);
    expect(asFragment()).toMatchSnapshot();
  });
});
