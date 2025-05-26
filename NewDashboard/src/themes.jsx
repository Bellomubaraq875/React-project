import { createContext, useState, useMemo} from 'react'
import { createTheme } from '@mui/material/styles'

// color design tokens 


const colors = {

};


export  const tokens = (mode) => ({
    ...(mode === 'dark'
        ? {
            gray: {
                100: '#e6e6e6',
                200: '#cccccc',
                300: '#b3b3b3',
                400: '#999999',
                500: '#808080',
                600: '#666666',
                700: '#4d4d4d',
                800: '#333333',
                900: '#1a1a1a',
            },
            primary: {
                100: '#50586d',
                200: '#40475b',
                300: '#2f3648',
                400: '#232a3a',
                500: '#1a202f',
                600: '#141b2b',
                700: '#0f1522',
                800: '#0a0f17',
                900: '#05080c',
            },
            greenAccent: {
                100: '#d0f6ec',
                200: '#a5e8d6',
                300: '#7de0c3',
                400: '#5ed9b5',
                500: '#4cceac',
                600: '#36b195',
                700: '#238a74',
                800: '#166655',
                900: '#0a3f36',
            },
            redAccent: {
                100: '#f9c5c3',
                200: '#f4a19e',
                300: '#e9706c',
                400: '#e15b56',
                500: '#db4f4a',
                600: '#b73f3b',
                700: '#902e2c',
                800: '#6a201f',
                900: '#401314',
            },
            blueAccent : {
                100: '#d3d6fe',
                200: '#aab0fd',
                300: '#8891fb',
                400: '#6f79f9',
                500: '#6870fa',
                600: '#4f56c9',
                700: '#3b4298',
                800: '#2a2f6a',
                900: '#191b3e',
            },
        }
    : {
            gray: {
                100: '#1a1a1a',
                200: '#333333',
                300: '#4d4d4d',
                400: '#666666',
                500: '#808080',
                600: '#999999',
                700: '#b3b3b3',
                800: '#cccccc',
                900: '#e6e6e6',
            },
            primary: {
                100: '#05080c',
                200: '#0a0f17',
                300: '#0f1522',
                400: '#141b2b',
                500: '#1a202f',
                600: '#232a3a',
                700: '#2f3648',
                800: '#40475b',
                900: '#50586d',
            },
            greenAccent: {
                100: '#0a3f36',
                200: '#166655',
                300: '#238a74',
                400: '#36b195',
                500: '#4cceac',
                600: '#5ed9b5',
                700: '#7de0c3',
                800: '#a5e8d6',
                900: '#d0f6ec',
            },
            redAccent: {
                100: '#401314',
                200: '#6a201f',
                300: '#902e2c',
                400: '#b73f3b',
                500: '#db4f4a',
                600: '#e15b56',
                700: '#e9706c',
                800: '#f4a19e',
                900: '#f9c5c3',
            },
            blueAccent : {
                100: '#191b3e',
                200: '#2a2f6a',
                300: '#3b4298',
                400: '#4f56c9',
                500: '#6870fa',
                600: '#6f79f9',
                700: '#8891fb',
                800: '#aab0fd',
                900: '#d3d6fe',
            },
        }),
});


// mui theme settings
export const themeSettings = (mode) => {
    const colors = tokens(mode);

    return{
        palette: {
            mode: mode,
            ...(mode === 'dark'
                ?   {
                    primary: {
                        main: colors.primary[500],
                    },
                    secondary: {
                        main: colors.greenAccent[500],
                    },
                    neutral: {
                        dark: colors.gray[700],
                        main: colors.gray[500],
                        light: colors.gray[100]
                    },
                    background: {
                        default: colors.primary[500], 
                    }
                } : {
                    primary: {
                        main: colors.primary[100],
                    },
                    secondary: {
                        main: colors.greenAccent[500],
                    },
                    neutral: {
                        dark: colors.gray[700],
                        main: colors.gray[500],
                        light: colors.gray[100]
                    },
                    background: {
                        default: '#fcfcfc'
                    }
                }),
        }, 
        typography: {
            fontFamily: [ 'Poppins', 'sans-serif'].join(","),
            fontSize: 12,
            h1: {
                fontFamily: [ 'Poppins', 'sans-serif'].join(","),
                fontSize: 40,
            },
            h2: {
                fontFamily: [ 'Poppins', 'sans-serif'].join(","),
                fontSize: 32,
            },
            h3: {
                fontFamily: [ 'Poppins', 'sans-serif'].join(","),
                fontSize: 24,
            },
            h4: {
                fontFamily: [ 'Poppins', 'sans-serif'].join(","),
                fontSize: 20,
            },
            h5: {
                fontFamily: [ 'Poppins', 'sans-serif'].join(","),
                fontSize: 16,
            },
            h6: {
                fontFamily: [ 'Poppins', 'sans-serif'].join(","),
                fontSize: 14,
            }
        }
    };
};

// context for color mixBlendmode
    export const ColorModeContext = createContext({
        toggleColorMode: () => {} 
    });

    export const useMode  = () => {
        const [mode, setMode] = useState('dark');

        const colorMode = useMemo(
            () => ({
                toggleColorMode: () => 
                setMode((prev) => (prev === "light" ? "dark" : "light")),
            }),
            []
        );

        const theme = useMemo(() => createTheme(themeSettings(mode)), [mode])

        return [theme, colorMode]
    }