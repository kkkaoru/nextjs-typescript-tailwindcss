import React from 'react';
import { Example } from './Example';

export default {
  title: 'Example/Text',
  component: Example,
};

const Template = (args) => <Example {...args} />;

export const ExampleTest = Template.bind({});
