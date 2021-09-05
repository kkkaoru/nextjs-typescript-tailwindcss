import { render } from '@testing-library/react';
import { TextAndButton } from '@web-components/components/molecules/text-and-button';

describe('example', () => {
  it('should be matched snapshot', () => {
    const { asFragment } = render(<TextAndButton textTitle="snap shot title" buttonLabel="snap shot label" />, {});
    expect(asFragment()).toMatchSnapshot();
  });
});
