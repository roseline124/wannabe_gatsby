import createPalette from '@material-ui/core/styles/createPalette'

const palette = createPalette({
  primary: {
    main: '#2D142C',
    dark: '#061518',
    contrastText: '#FFFFFF',
  },
  secondary: {
    main: '#70737a',
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
