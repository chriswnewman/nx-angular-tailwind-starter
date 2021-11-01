// const { guessProductionMode } = require('@ngneat/tailwind');
const colors = require('tailwindcss/colors');

// process.env.TAILWIND_MODE = guessProductionMode() ? 'build' : 'watch';

module.exports = {
  prefix: '',
  mode: 'jit',
  purge: {
    content: ['./apps/**/*.{html,ts}', './libs/**/*.{html,ts}'],
  },
  // corePlugins: {
  //   preflight: false,
  // },
  darkMode: 'class', // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        blue: colors.cyan,
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
