import './components/Settings'
/*import Main from './pages/Main';
import NotFound from './pages/NotFound';
import About from './pages/About'; */
import themeOptions from './lib/themeOptions';

import { useState, lazy, Suspense } from 'react';
import { CssBaseline, ThemeProvider } from '@material-ui/core';

import {
    BrowserRouter as Router,
    Switch,
    Route,
} from 'react-router-dom';
import Credits from './pages/Credits';

const Main = lazy(() => import('./pages/Main'));
const NotFound = lazy(() => import('./pages/NotFound'));
const About = lazy(() => import('./pages/About'));

export default function App() {
    const returnIfNull = (v, d) => !v || v === 'null' ? d : v;

    const
        [fontURL, setFontURL] = useState(localStorage.fontURL),
        [appear, setAppear]   = useState(JSON.parse(returnIfNull(localStorage.appearance, '[]')));

    return (
        <Router>
            <ThemeProvider theme={themeOptions(appear.includes('dark') ? 'dark' : 'light', fontURL)}>
                <CssBaseline />
                <Suspense fallback={
                    <div style={{minHeight: '100vh', display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
                        Loading...
                    </div>
                }>
                    <Switch>
                        <Route exact path={['/', '/index', '/index.html', '.', './index.html']}><Main a={appear} sa={setAppear} f={fontURL} sf={setFontURL}/></Route>
                        <Route path='/about'><About /></Route>
                        <Route path='/credits'><Credits /></Route>
                        <Route path='*'><NotFound /></Route>
                    </Switch>
                </Suspense>
            </ThemeProvider>
        </Router>
    )
}