import { red } from '@material-ui/core/colors'
import { createTheme } from '@material-ui/core/styles'

// A custom theme for this app
const theme = createTheme({
  typography: {
    // Use the system font instead of the default Roboto font.
    fontFamily: ['Quicksand', 'Roboto', '"Helvetica Neue"', 'Arial', 'sans-serif'].join(','),
  },
  palette: {
    primary: {
      main: '#d23f57',
      dark: '#115293'
    },
    secondary: {
      main: '#0F3460',
    },
    error: {
      main: red.A400,
    },
    background: {
      default: '#fff',
    },
  },
  overrides: {
    MuiButton: {
      root:{
        fontSize:"0.875rem",
        fontWeight:"600"
      },
      containedPrimary:{
        "&:hover": {
          backgroundColor: "#e3364e",
        },
      },
      label: {
        fontSize: '1rem',
        textTransform: 'capitalize',
      },
    },
    MuiTextField: {
      root: {
        padding: '0.625rem 0',
      },
    },
  },
  props: {
    MuiTypography: {
      variantMapping: {
        body1: 'span',
        body2: 'span',
      },
    },
  },
})

export default theme
