import { render, screen } from '@testing-library/react';
import { Example } from '@/components/atoms/example/Example';

describe('example', () => {
  it('should be matched snapshot', () => {
    const { asFragment } = render(<Example />, {});
    expect(asFragment()).toMatchSnapshot();
  });
  it('should be included text about example', () => {
    render(<Example />);
    expect(screen.getByText('Example')).toBeInTheDocument();
  });
});
