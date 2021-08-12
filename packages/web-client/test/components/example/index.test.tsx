// FIXME: Remove import React
import React from 'react';

import { render } from '@testing-library/react';
import { Example } from '@/components/example';

describe('example', () => {
  it('should be matched snapshot', () => {
    const { asFragment } = render(< Example />, {});
    expect(asFragment()).toMatchSnapshot();
  })
});
