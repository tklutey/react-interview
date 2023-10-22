import { ThemeOptions } from '@mui/material/styles';
import {createTheme} from "@mui/material";

const themeOptions: ThemeOptions = {
    palette: {
        mode: 'light',
        primary: {
            main: '#6aa0c2',
        },
        secondary: {
            main: '#c28e6a',
        },
    },
};

export const theme = createTheme(themeOptions);