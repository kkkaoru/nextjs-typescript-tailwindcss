import { render } from '@testing-library/react';
import { TextAndButton } from '@/components/molecules/text-and-button';

describe('example', () => {
  it('should be matched snapshot', () => {
    const { asFragment } = render(<TextAndButton label="Snapshot" />, {});
    expect(asFragment()).toMatchSnapshot();
  });
});
