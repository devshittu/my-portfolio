/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class',
  content: ['./src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      minHeight: (theme) => ({
        ...theme('spacing'),
      }),
      keyframes: {
        slideInTop: {
          '0%': {
            '-webkit-transform': 'translateY(-1000px)',
            transform: 'translateY(-1000px)',
            opacity: 0,
          },
          '100%': {
            '-webkit-transform': 'translateY(0)',
            transform: 'translateY(0)',
            opacity: 1,
          },
        },
        slideInBottom: {
          '0%': {
            '-webkit-transform': 'translateY(1000px)',
            transform: 'translateY(1000px)',
            opacity: 0,
          },
          '100%': {
            '-webkit-transform': 'translateY(0)',
            transform: 'translateY(0)',
            opacity: 1,
          },
        },
        slideInRight: {
          '0%': {
            '-webkit-transform': 'translateX(1000px)',
            transform: 'translateX(1000px)',
            opacity: 0,
          },
          '100%': {
            '-webkit-transform': 'translateX(0)',
            transform: 'translateX(0)',
            opacity: 1,
          },
        },
        slideInLeft: {
          '0%': {
            '-webkit-transform': 'translateX(-1000px)',
            transform: 'translateX(-1000px)',
            opacity: 0,
          },
          '100%': {
            '-webkit-transform': 'translateX(0)',
            transform: 'translateX(0)',
            opacity: 1,
          },
        },
        scaleInCenter: {
          '0%': {
            '-webkit-transform': 'scale(0)',
            transform: 'scale(0)',
            opacity: 1,
          },
          '100%': {
            '-webkit-transform': 'scale(1)',
            transform: 'scale(1)',
            opacity: 1,
          },
        },
        swirlInFwd: {
          '0%': {
            '-webkit-transform': ' rotate(-540deg) scale(0)',
            transform: ' rotate(-540deg) scale(0)',
            opacity: 1,
          },
          '100%': {
            '-webkit-transform': 'rotate(0) scale(1)',
            transform: 'rotate(0) scale(1)',
            opacity: 1,
          },
        },
        swingInRightFwd: {
          '0%': {
            '-webkit-transform': 'rotateY(-100deg)',
            transform: 'rotateY(-100deg)',
            '-webkit-transform-origin': 'right',
            'transform-origin': 'right',
            opacity: 0,
          },
          '100%': {
            '-webkit-transform': 'rotateY(0)',
            transform: 'rotateY(0)',
            '-webkit-transform-origin': 'right',
            'transform-origin': 'right',
            opacity: 1,
          },
        },
      },
      animation: {
        'slide-in-top': 'slideInTop 0.5s cubic-bezier(0.250, 0.460, 0.450, 0.940) both',
        'slide-in-bottom': 'slideInBottom 0.5s cubic-bezier(0.250, 0.460, 0.450, 0.940) both',
        'slide-in-right': 'slideInRight 0.5s cubic-bezier(0.250, 0.460, 0.450, 0.940) both',
        'slide-in-left': 'slideInLeft 0.5s cubic-bezier(0.250, 0.460, 0.450, 0.940) both',
        'scale-in-center': 'scaleInCenter 0.5s cubic-bezier(0.250, 0.460, 0.450, 0.940) both',
        'swirl-in-fwd': 'swirlInFwd  0.6s ease-out both;',
        'swing-in-right-fwd': 'swingInRightFwd  1.5s cubic-bezier(0.175, 0.885, 0.320, 1.275) both',
      },
    },
  },
  plugins: [],
};
