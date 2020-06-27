import createTypography from '@material-ui/core/styles/createTypography'
import palette from './palette'

// http://www.standardista.com/px-to-rem-conversion-if-root-font-size-is-16px/
const typography = createTypography(palette, {
  h1: {
    fontSize: '1.125rem', // 18px
    fontWeight: 500,
    lineHeight: '1.5em',
    letterSpacing: '-0.6px',
  },
  body1: {
    fontSize: '0.9375rem', // 15px
    fontWeight: 300,
    lineHeight: '1.4em',
    letterSpacing: '-0.6px',
  },
  fontFamily: [
    'Do Hyeon',
    'Montserrat',
    '-apple-system',
    'BlinkMacSystemFont',
    '"Segoe UI"',
    '"Helvetica Neue"',
    'Arial',
    'sans-serif',
    '"Apple Color Emoji"',
    '"Segoe UI Emoji"',
    '"Segoe UI Symbol"',
  ].join(','),
})

export default typography
