import { createMuiTheme } from '@material-ui/core/styles';

const theme = createMuiTheme({
  palette: {
    primary: {
      main: '#00b3f5',
    },
    secondary: {
      main: '#00cd50',
    },
    default: {
      main: '#c81a0d',
    },
    background: {
      default: '#fff',
    },
    greys: {
      one: '#445368',
      two: '#8d99aa',
      three: '#d0d5dc',
    },
  },
  typography: {
    useNextVariants: true,
    fontFamily: "'Hind'",
    fontSize: 14,
    fontWeightBold: 700,
    fontWeightLight: 300,
    fontWeightMedium: 500,
    fontWeightRegular: 400,
    htmlFontSize: 16,
  },
});

export default theme;
