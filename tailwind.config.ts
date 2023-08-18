import type { Config } from 'tailwindcss';
import defaultTheme from 'tailwindcss/defaultTheme';
import colors from 'tailwindcss/colors';
import plugin from 'tailwindcss/plugin';
// import { addTailwindColorVariables } from './lib/utils/tailwindColorVars';

const config: Config = {
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  darkMode: 'class',
  future: {
    hoverOnlyWhenSupported: true,
  },
  theme: {
    colors: {
      // ...colors,
      transparent: 'transparent',
      current: 'currentColor',
      white: colors.white,
      black: colors.black,
      gray: colors.slate,
      primary: colors.fuchsia,
    },
    screens: {
      xs: '480px',
      ...defaultTheme.screens,
    },
    extend: {
      fontFamily: {
        sans: ['var(--font-sans)', ...defaultTheme.fontFamily.sans],
      },
    },
  },
  plugins: [
    // addTailwindColorVariables,
    plugin(function ({ addUtilities, addVariant }) {
      addVariant('hocusv', ['&:hover', '&:focus-visible']);
      addVariant('group-hocusv', [
        ':merge(.group):hover &',
        ':merge(.group):focus-visible &',
      ]);
      addVariant('peer-hocusv', [
        ':merge(.peer):hover ~ &',
        ':merge(.peer):focus-visible ~ &',
      ]);
      addUtilities({
        '.content-auto': {
          'content-visibility': 'auto',
        },
      });
    }),
  ],
};

export default config;
