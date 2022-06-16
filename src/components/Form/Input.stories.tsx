import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import Input from './Input';
// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: 'Form/Input',
  component: Input,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
} as ComponentMeta<typeof Input>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof Input> = (args) => <Input {...args} />;

export const All = () => {
  return (
    <div className="space-y-2">
      <Input label="primary" variant="primary" />
      <div className="bg-gray-500">
        <Input label="transparent" variant="transparent" />
      </div>
      <div className="bg-gray-500">
        <Input label="white" variant="white" />
      </div>
    </div>
  );
};
export const Primary = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
Primary.args = {
  label: 'Primary',
  placeholder: 'Placeholder',
};

export const White = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
White.args = {
  label: 'White',
  placeholder: 'Placeholder',
  variant: 'white',
};
