import './components/Settings'
import themeOptions from './lib/themeOptions';

import { useState, lazy, Suspense } from 'react';
import {CssBaseline, Snackbar, ThemeProvider, Tooltip} from '@material-ui/core';

import {
    BrowserRouter as Router,
    Switch,
    Route,
} from 'react-router-dom';
import Credits from './pages/Credits';

import * as serviceWorkerRegistration from './serviceWorkerRegistration';
import Button from '@material-ui/core/Button';

const Main = lazy(() => import('./pages/Main'));
const NotFound = lazy(() => import('./pages/NotFound'));
const About = lazy(() => import('./pages/About'));

export default function App() {
    const returnIfNull = (v, d) => !v || v === 'null' ? d : v;

    const
        [fontURL, setFontURL] = useState(localStorage.fontURL),
        [swSnack, setSwSnack] = useState({ msg: '', open: false, act: null }),
        [appear, setAppear]   = useState(JSON.parse(returnIfNull(localStorage.appearance, '[]')));

    // If you want your app to work offline and load faster, you can change
    // unregister() to register() below. Note this comes with some pitfalls.
    // Learn more about service workers: https://cra.link/PWA
    serviceWorkerRegistration.register({
        onUpdate: r => {
            const waitingServiceWorker = r.waiting;

            if (waitingServiceWorker) {
                setSwSnack({ msg: 'An update is available', open: true,
                    act: {
                        msg: 'Update now',
                        label: 'This action will restart the clock',
                        handler: () => {
                            waitingServiceWorker.addEventListener('statechange', event => {
                                if (event.target.state === 'activated') {
                                    window.location.reload()
                                }
                            });
                            waitingServiceWorker.postMessage({ type: 'SKIP_WAITING' });
                        }
                    }
                });
            }
        },
        onSuccess: () => {
            setSwSnack({ msg: 'Ready for offline operation', open: true, act: null })
        }
    });

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
                    <Snackbar
                        open={swSnack.open}
                        autoHideDuration={3000}
                        onClose={() => setSwSnack({ msg: '', open: false, act: null })}
                        message={swSnack.msg}
                        action={swSnack.act &&
                        <Tooltip title={swSnack.act.label}>
                            <Button size='small' color='secondary' onClick={swSnack.act.handler}>
                                {swSnack.act.msg}
                            </Button>
                        </Tooltip>
                        }
                    />
                </Suspense>
            </ThemeProvider>
        </Router>
    )
}