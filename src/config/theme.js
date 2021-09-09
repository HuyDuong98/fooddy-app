import { red } from '@material-ui/core/colors'
import { createTheme } from '@material-ui/core/styles'

// A custom theme for this app
const theme = createTheme({
  typography: {
    // Use the system font instead of the default Roboto font.
    fontFamily: "Open Sans, Roboto, -apple-system, BlinkMacSystemFont, Segoe UI, Oxygen, Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue, sans-serif",
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
      root: {
        fontSize: "0.875rem",
        fontWeight: "600",
        fontFamily: "Open Sans, Roboto, -apple-system, BlinkMacSystemFont, Segoe UI, Oxygen, Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue, sans-serif"
      },
      containedPrimary: {
        "&:hover": {
          backgroundColor: "#e3364e",
        },
      },
      label: {
        fontSize: '1rem',
        textTransform: 'capitalize',
      },
    },
    MuiTypography: {
      h2: {
        fontWeight: 700,
        color: "#2B3445",
        fontSize: "25px",
        textTransform: "none",
        whiteSpace: "normal",
        fontFamily: "Open Sans, Roboto, -apple-system, BlinkMacSystemFont, Segoe UI, Oxygen, Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue, sans-serif",
      },
      body2: {
        color: "#7d879c",
      }
    },
    MuiTextField: {
      root: {
        padding: '0.625rem 0',
      },
    },
    MuiCard: {
      root: {
        boxShadow: "#03004717 0px 1px 3px",
        transiton: "box-shadow 300ms cubic-bezier(0.4, 0, 0.2, 1) 0ms",
        backgroundColor: "#fff",
        borderRadius: "8px",
        color: "#2b3445",
        overflow: "hidden",
      }
    },
    MuiCardContent: {
      root: {
        padding: "1rem 1.25rem",
        "&:last-child": {
          paddingBottom: "1rem",
        }
      }
    }
  },
  // props: {
  //   MuiTypography: {
  //     variantMapping: {
  //       h2: 'span'
  //     },
  //   },
  // },
})

export default theme
