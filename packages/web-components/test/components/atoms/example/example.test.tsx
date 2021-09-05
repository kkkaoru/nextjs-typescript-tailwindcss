import { render, screen } from '@testing-library/react';
import { TextWithUnderline } from '@web-components/components/atoms/text';

describe('example', () => {
  it('should be matched snapshot', () => {
    const { asFragment } = render(<TextWithUnderline text="snapshot" />, {});
    expect(asFragment()).toMatchSnapshot();
  });
  it('should be included props text', () => {
    render(<TextWithUnderline text="will be included" />);
    expect(screen.getByText('will be included')).toBeInTheDocument();
  });
});
