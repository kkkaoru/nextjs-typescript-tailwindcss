import { Story } from '@storybook/react';
import { Example } from '@/components/atoms/example/Example';

export default {
  title: 'Example/Text',
  component: Example,
};

const Template: Story = () => <Example />;

export const ExampleTest = Template.bind({});
