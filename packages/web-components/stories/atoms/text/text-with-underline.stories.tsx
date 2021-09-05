import { Story } from '@storybook/react';
import { TextWithUnderline, Props } from '@web-components/components/atoms/text';

export default {
  title: 'text/TextWithUnderline',
  component: TextWithUnderline,
};

const Template: Story<Props> = (args) => <TextWithUnderline {...args} />;

export const Normal = Template.bind({});

Normal.args = {
  text: 'Text with underline',
};
