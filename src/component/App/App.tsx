import React from 'react'
import Header from "../Header/Header";
import {createMuiTheme, ThemeProvider} from '@material-ui/core/styles';
import './App.scss'

const theme = createMuiTheme({
    palette: {
        primary: {main: '#fff'},
        secondary: {main: '#000'},
    },
});

const App: React.FC = () => {
    return (
        <ThemeProvider theme={theme}>
            <Header/>
            testing
        </ThemeProvider>
    )
}

export default App;
