import { create } from 'storybook/theming';

export default create({
  base: 'light',

  brandTitle: 'babs-ui',
  brandUrl: 'https://babsoyewumi.com/',
  brandImage: './logo.png',
  brandTarget: '_self',

  colorPrimary: '#3a30e8',
  colorSecondary: '#6b7380',

  appBg: '#f0f1f2',
  appContentBg: '#ffffff',
  appPreviewBg: '#ffffff',
  appBorderColor: '#e1e3e6',
  appBorderRadius: 6,

  textColor: '#15171a',
  textInverseColor: '#ffffff',
  textMutedColor: '#6b7380',

  barTextColor: '#6b7380',
  barSelectedColor: '#3a30e8',
  barHoverColor: '#3a30e8',
  barBg: '#ffffff',

  inputBg: '#ffffff',
  inputBorder: '#c4c7cc',
  inputTextColor: '#15171a',
  inputBorderRadius: 6,

  fontBase:
    'Inter, system-ui, -apple-system, BlinkMacSystemFont, Segoe UI, sans-serif',
  fontCode:
    'ui-monospace, SFMono-Regular, "SF Mono", Monaco, Consolas, monospace',
});
