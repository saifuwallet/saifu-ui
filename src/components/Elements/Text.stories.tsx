import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import Text from './Text';
// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: 'Elements/Text',
  component: Text,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
} as ComponentMeta<typeof Text>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof Text> = (args) => <Text {...args} />;

export const Sizes = () => (
  <div>
    <Text as="p" size="xs">
      The quick brown fox jumps over the lazy dog (xs)
    </Text>
    <Text as="p" size="sm">
      The quick brown fox jumps over the lazy dog (sm)
    </Text>
    <Text as="p" size="md">
      The quick brown fox jumps over the lazy dog (md)
    </Text>
    <Text as="p" size="lg">
      The quick brown fox jumps over the lazy dog (lg)
    </Text>
    <Text as="p" size="xl">
      The quick brown fox jumps over the lazy dog (xl)
    </Text>
    <Text as="p" size="2xl">
      The quick brown fox jumps over the lazy dog (2xl)
    </Text>
    <Text as="p" size="3xl">
      The quick brown fox jumps over the lazy dog (3xl)
    </Text>
    <Text as="p" size="4xl">
      The quick brown fox jumps over the lazy dog (4xl)
    </Text>
  </div>
);

export const Variants = () => (
  <div>
    <Text as="p" variant="primary">
      The quick brown fox jumps over the lazy dog (primary)
    </Text>
    <Text as="p" variant="secondary">
      The quick brown fox jumps over the lazy dog (secondary)
    </Text>
    <Text as="p" variant="success">
      The quick brown fox jumps over the lazy dog (success)
    </Text>
    <Text as="p" variant="danger">
      The quick brown fox jumps over the lazy dog (danger)
    </Text>
    <Text as="p" variant="inverse" className="bg-gray-500">
      The quick brown fox jumps over the lazy dog (inverse)
    </Text>
    <Text as="p" variant="inverseSecondary">
      The quick brown fox jumps over the lazy dog (inverseSecondary)
    </Text>
  </div>
);

export const Loading = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
Loading.args = {
  children: 'hello text',
  isLoading: true,
};
