import React from 'react'
import { ComponentStory, ComponentMeta } from '@storybook/react'
import Button from './Button'

export default {
  title: 'App/Component/Button',
  component: Button,
} as ComponentMeta<typeof Button>

const Template: ComponentStory<typeof Button> = (args) => <Button {...args} />

export const Solid = Template.bind({})
Solid.args = {
  colorScheme: 'teal',
  children: 'Button',
  variant: 'solid',
}

export const SolidDisabled = Template.bind({})
SolidDisabled.args = {
  colorScheme: 'teal',
  children: 'Button',
  variant: 'solid',
  disabled: true,
}

export const Outline = Template.bind({})
Outline.args = {
  colorScheme: 'teal',
  children: 'Button',
  variant: 'outline',
}

export const OutlineDisabled = Template.bind({})
OutlineDisabled.args = {
  colorScheme: 'teal',
  children: 'Button',
  variant: 'outline',
  disabled: true,
}

export const Ghost = Template.bind({})
Ghost.args = {
  colorScheme: 'teal',
  children: 'Button',
  variant: 'ghost',
}

export const GhostDisabled = Template.bind({})
GhostDisabled.args = {
  colorScheme: 'teal',
  children: 'Button',
  variant: 'ghost',
  disabled: true,
}
