import {createMuiTheme, } from "@material-ui/core";


export default function themeOptions(mode, fontURL) {
    const customFont = fontURL != null && fontURL !== 'null';
    const options = {
        shape: {
            borderRadius: 7,
        },
        palette: {
            mode: mode,
            primary: {
                main: '#1976d2',
            },
            secondary: {
                main: '#9c27b0',
            },
        },
        typography: {
            fontFamily: (customFont ? '"customFont",' : '') + '"Roboto","Helvetica","Arial",sans-serif',
        },
        components: {
            MuiCssBaseline: {
                styleOverrides: (customFont ? `
            @font-face {
                font-family: 'customFont';
                font-style: normal;
                font-display: swap;
                font-weight: 400;
                src: url('${fontURL}') format('truetype');
            }
            ` : '') + (mode === 'dark' ?
                    `/* ====== Custom scrollbar ======= */
::-webkit-scrollbar {
    background-color: #fff;
    width: 14px
}

/* Background of the scrollbar except button or resizer */
::-webkit-scrollbar-track {
    background-color: #121212;
}

::-webkit-scrollbar-corner {
    background-color: #121212;
}

body.light ::-webkit-scrollbar-track, body.light ::-webkit-scrollbar-corner {
    background-color: rgb(223, 223, 223);
}

/* scrollbar itself */
::-webkit-scrollbar-thumb {
    background-color: rgb(107, 107, 107);
    border-radius: 14px;
    border: 3px solid #121212;
    transition: all 500ms ease-out;
}
::-webkit-scrollbar-thumb:hover {
    background-color: rgb(149, 149, 149);
}

.light *::-webkit-scrollbar-thumb {
    background-color: rgb(150, 150, 150) !important;
    border: 3px solid rgb(223, 223, 223) !important;
}
.light *::-webkit-scrollbar-thumb:hover {
    background-color: rgb(101, 101, 101) !important;
}
/* ============ */` : ''),
            },
        }
    }

    console.log(createMuiTheme(options))
    return (createMuiTheme(options))
}