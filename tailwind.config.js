/** @type {import('tailwindcss').Config} */
export const content = [
  "./src/**/*.{js,jsx,ts,tsx}",
];
export const theme = {
  extend: {
    colors: {
      'hover-color': '#f3ea28',
      'default-color': '#F8FAFC',
    },
    fontFamily: {
      title: ['"Your Font Family"', 'sans-serif'],
    },
    lineHeight: {
      '0': '0',
    },
  },
};
export const plugins = [
  function ({ addComponents, addUtilities }) {
    addComponents({
      '.btn--pri, .btn-second': {
        position: 'relative',
        overflow: 'hidden',
      },
      '.btn--pri::before, .btn--pri::after, .btn--second::before, .btn--second::after': {
        content: '""',
        height: '100%',
        position: 'absolute',
        transitionProperty: 'all',
        transitionDuration: '400ms',
        transitionTimingFunction: 'ease-in-out',
      },
      '.btn--pri:hover::after, .btn--second:hover::after': {
        width: '100%',
      },
      '.btn--pri::before': {
        backgroundColor: '#f3ea28',
        top: '0',
        right: '0',
        width: '100%',
        zIndex: '-2',
      },
      '.btn--pri::after': {
        background: 'linear-gradient(106deg, #639, #36c 102.69%)',
        bottom: '0',
        left: '0',
        width: '0',
        zIndex: '-1',
      },
      '.btn--second::before': {
        background: '#639',
        right: '0',
        top: '0',
        width: '100%',
        zIndex: '-2',
      },
      '.btn--second::after': {
        background: 'linear-gradient(90deg, #ff6d00, #ffc107)',
        bottom: '0',
        height: '100%',
        left: '0',
        width: '0',
        zIndex: '-1',
      },
      '.btn': {
        display: 'flex',
        alignItems: 'center',
        backgroundColor: 'transparent',
        borderRadius: '.4rem',
        cursor: 'pointer',
        fontFamily: 'var(--font-title)',
        gap: '1rem',
        justifyContent: 'center',
        letterSpacing: '.8px',
        outline: 'none',
        overflow: 'hidden',
        padding: '.8rem 1.2rem',
        textAlign: 'center',
        textTransform: 'uppercase',
      },
    });

    addUtilities({
      '.underline-position-under': {
        textDecoration: 'underline',
        textUnderlinePosition: 'under',
      },
      '.hover:underline-position-under:hover': {
        textDecoration: 'underline',
        textUnderlinePosition: 'under',
      },
      '.hover-color': {
        color: '#f3ea28',
      },
      '.hover-color-white': {
        color: '#F8FAFC',
      },
      '.hover-shine': {
        'color': '#f3ea28',
        'animation': 'shine 1s infinite',
        '-webkit-mask-image': 'linear-gradient(-75deg, rgba(243, 234, 40, .6) 30%, #f3ea28 50%, rgba(243, 234, 40, .6) 70%)',
        '-webkit-mask-size': '200%',
        'mask-image': 'linear-gradient(-75deg, rgba(243, 234, 40, .6) 30%, #f3ea28 50%, rgba(243, 234, 40, .6) 70%)',
        'mask-size': '200%',
      },
    }, ['responsive', 'hover']);
  },
];
