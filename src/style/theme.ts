import { createMuiTheme } from '@material-ui/core/styles'
import typography from './typography'
import palette from './palette'

const generateTheme = () =>
  createMuiTheme({
    props: {},
    typography,
    palette,
  })

export default generateTheme
