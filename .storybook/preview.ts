import type { Preview } from '@storybook/react-vite';
import '../src/index.css';
import theme from './theme';

const preview: Preview = {
  parameters: {
    backgrounds: {
      default: 'light',
      values: [
        {
          name: 'light',
          value: '#F8F8F8',
        },
        {
          name: 'dark',
          value: '#333333',
        },
      ],
    },
    docs: {
      theme: theme,
    },
  },
};

export default preview;
