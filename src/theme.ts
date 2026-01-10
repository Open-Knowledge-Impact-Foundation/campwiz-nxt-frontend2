import { createTheme } from '@mui/material/styles';

declare module '@mui/material/styles' {
  interface Palette {
    dalgona: Palette['primary'];
  }
  interface PaletteOptions {
    dalgona?: PaletteOptions['primary'];
  }
}
// Update the Button's color options to include a salmon option
declare module '@mui/material/IconButton' {
  interface IconButtonPropsColorOverrides {
    dalgona: true;
  }
}

// const lora = Lora({
//   weight: ['400', '500', '700'],
//   subsets: ['latin'],
//   display: 'swap',
//   variable: '--font-lora',
// });

const theme = createTheme({
  typography: {
    fontFamily: `var(--font-roboto)`,
  },
  colorSchemes: {
    dark: true,
    light: true,
  },
  palette: {
    error: {
      main: '#9b0606',
    },
    primary: {
      main: '#006699'
    },
    dalgona: {
      main: '#d9aa59',
    }
  },
  cssVariables: {
    colorSchemeSelector: 'class'
  },
  breakpoints: {
    values: {
      xs: 0,
      sm: 640,
      md: 900,
      lg: 1200,
      xl: 1536,
    },
  }
});

export default theme;
