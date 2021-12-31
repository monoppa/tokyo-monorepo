import React from 'react'
import { ComponentStory, ComponentMeta } from '@storybook/react'

import { Alert } from './Alert'

export default {
  title: 'Example/Alert',
  component: Alert,
  argTypes: {
    backgroundColor: { control: 'color' },
  },
} as ComponentMeta<typeof Alert>

const Template: ComponentStory<typeof Alert> = (args) => <Alert {...args} />

export const Primary = Template.bind({})
Primary.args = {
  primary: true,
  label: 'Button',
}
