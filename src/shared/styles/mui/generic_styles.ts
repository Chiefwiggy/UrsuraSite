import { Theme, createTheme } from "@mui/material";
import { blueGrey } from "@mui/material/colors";

export const GenericTheme: Theme = createTheme({
    palette: {
        mode: 'dark',
        primary: {
          main: '#ce93d8',
        },
        secondary: {
          main: '#aed581',
        },
        divider: '#d1c4e9',
      },
})

export const ButtonTheme: Theme = createTheme({
    palette: {
        primary: {
            main: '#E0C2FF',
            light: '#F5EBFF',
            contrastText: '#47008F',
        }
    }
})
