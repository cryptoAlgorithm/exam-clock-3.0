import './components/Settings'
import Main from './pages/Main';
import NotFound from './pages/NotFound';
import About from './pages/About';
import themeOptions from './lib/themeOptions';

import {useState} from 'react';
import {CssBaseline, ThemeProvider} from '@material-ui/core';

import {
    BrowserRouter as Router,
    Switch,
    Route,
} from 'react-router-dom';
import Credits from './pages/Credits';

export default function App() {
    const returnIfNull = (v, d) => !v || v === 'null' ? d : v;

    const
        [fontURL, setFontURL] = useState(localStorage.fontURL),
        [appear, setAppear]   = useState(JSON.parse(returnIfNull(localStorage.appearance, '[]')));

    return (
        <Router>
            <ThemeProvider theme={themeOptions(appear.includes('dark') ? 'dark' : 'light', fontURL)}>
                <CssBaseline />
                    <Switch>
                        <Route exact path={['/', '/index', '/index.html', '.', './index.html']}><Main a={appear} sa={setAppear} f={fontURL} sf={setFontURL}/></Route>
                        <Route path='/about'><About /></Route>
                        <Route path='/credits'><Credits /></Route>
                        <Route path='*'><NotFound /></Route>
                    </Switch>
            </ThemeProvider>
        </Router>
    )
}