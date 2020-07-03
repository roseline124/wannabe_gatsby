import createPalette from '@material-ui/core/styles/createPalette'

const palette = createPalette({
  primary: {
    // main: '#9001f5',
    main: '#333',
    dark: '#4B2B31',
    contrastText: '#FFFFFF',
  },
  secondary: {
    main: '#233342',
    dark: '#2a2226',
  },
  error: {
    main: '#942937',
  },
  text: {
    primary: '#333333',
    secondary: '#999999',
    disabled: '#cccccc',
  },
  background: {
    default: '#fff',
  },
})

export default palette
