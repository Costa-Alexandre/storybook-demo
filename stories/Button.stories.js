import React from 'react';
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';
import DeleteIcon from '@mui/icons-material/Delete';
import SendIcon from '@mui/icons-material/Send';

export default { 
  component: Button,
  argTypes: {
    variant: {
      options: ['text', 'outlined', 'contained'],
      control: { type: 'radio' },
      table: {
        defaultValue: { summary: 'text' },
      },
      description: 'The Button comes with three variants: text (default), contained, and outlined.',
    },
    children: {
      description: 'The content string of the button.',
    },
    disabled: {
      table: {
        defaultValue: { summary: false },
      },
      description: 'If true, the button will be disabled.',
    },
    href: {
      description: 'The URL to link to when the button is clicked.',
    },
    color: {
      options: ['primary', 'secondary', 'success', 'error', 'info', 'warning'],
      control: { type: 'inline-radio' },
      table: {
        defaultValue: { summary: 'primary' },
      },
      description: 'The color of the component. In addition to using the default button colors, you can add custom ones, or disable any you don\'t need.',
    },
    size: {
      options: ['small', 'medium', 'large'],
      control: { type: 'select' },
      table: {
        defaultValue: { summary: 'medium' },
      },
      description: 'For larger or smaller buttons, use the size prop.',
    },
    startIcon: {
      options: ['No Icon', 'DeleteIcon', 'SendIcon'],
      control: { type: 'select' },
      description: 'Sometimes you might want to have icons for certain buttons to enhance the UX of the application as we recognize logos more easily than plain text.',
      mapping: {
        DeleteIcon: React.createElement(DeleteIcon),
        SendIcon: React.createElement(SendIcon),
        'No Icon': '',
      },
    },
    endIcon: {
      options: ['No Icon', 'DeleteIcon', 'SendIcon'],
      control: { type: 'select' },
      description: 'Sometimes you might want to have icons for certain buttons to enhance the UX of the application as we recognize logos more easily than plain text.',
      mapping: {
        DeleteIcon: React.createElement(DeleteIcon),
        SendIcon: React.createElement(SendIcon),
        'No Icon': '',
      },
    },
  },
};

export const Default = {
  args: {
    variant: 'text',
    children: 'Text',
    disabled: false,
    href: '#text-buttons',
    color: 'primary',
    size: 'medium',
    startIcon: 'No Icon',
    endIcon: 'No Icon',
  },
}

export const AllVariants = {
  render: (args) => (
    <Stack spacing={2} direction="row">
      <Button {...args} variant="text">Text</Button>
      <Button {...args} variant="contained">Contained</Button>
      <Button {...args} variant="outlined">Outlined</Button>
    </Stack>
  ),
  args: {
    ...Default.args,
  },
  argTypes: {
    variant: {
      table: { disable: true },
    },
    children: {
      table: { disable: true },
    },
  },
}

export const TextButtons = {
  render: (args) => (
    <Stack spacing={2} direction="row">
      <Button {...args}>Text</Button>
      <Button {...args} disabled>Disabled</Button>
      <Button {...args} href="#text-buttons">Link</Button>
    </Stack>
  ),
  args: {
    ...Default.args,
  },
  argTypes: {
    variant: {
      table: { disable: true },
    },
    children: {
      table: { disable: true },
    },
  },
}

export const ContainedButtons = {
  render: (args) => (
    <Stack spacing={2} direction="row">
      <Button {...args}>Contained</Button>
      <Button {...args} disabled>Disabled</Button>
      <Button {...args} href="#contained-buttons">Link</Button>
    </Stack>
  ),
  args: {
    ...Default.args,
    variant: 'contained',
    disableElevation: false,
  },
  argTypes: {
    variant: {
      table: { disable: true },
    },
    children: {
      table: { disable: true },
    },
  },
}

export const disableElevation = {
  args: {
    ...Default.args,
    variant: 'contained',
    disableElevation: true,
    children: 'Disable Elevation',
  },
  argTypes: {
    variant: {
      table: { disable: true },
    },
    children: {
      table: { disable: true },
    },
    disableElevation: {
      table: { disable: true },
    },
  },
}

export const OutlinedButtons = {
  render: (args) => (
    <Stack spacing={2} direction="row">
      <Button {...args}>Outlined</Button>
      <Button {...args} disabled>Disabled</Button>
      <Button {...args} href="#outlined-buttons">Link</Button>
    </Stack>
  ),
  args: {
    ...Default.args,
    variant: 'outlined',
  },
  argTypes: {
    variant: {
      table: { disable: true },
    },
    children: {
      table: { disable: true },
    },
  },
}

export const Colors = {
  render: (args) => (
    <Stack spacing={2} direction="row">
      <Button {...args} color="secondary" variant="text">Secondary</Button>
      <Button {...args} color="success" variant="contained">Success</Button>
      <Button {...args} color="error" variant="outlined">Error</Button>
    </Stack>
  ),
  args: {
    ...Default.args,
  },
  argTypes: {
    variant: {
      table: { disable: true },
    },
    children: {
      table: { disable: true },
    },
    color: {
      table: { disable: true },
    },
  },
}
