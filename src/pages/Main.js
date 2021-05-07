import {useState} from "react";
import Clock from '../components/Clock';

// MUI
import {makeStyles} from "@material-ui/core/styles";
import Typography from '@material-ui/core/Typography';
import Fab from '@material-ui/core/Fab';
import DialogTitle from '@material-ui/core/DialogTitle';
import DialogActions from '@material-ui/core/DialogActions';
import Dialog from '@material-ui/core/Dialog';
import Button from '@material-ui/core/Button';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Divider from '@material-ui/core/Divider';
import {IconButton, Toolbar, Tooltip} from "@material-ui/core";

// Icons
import SettingsIconRound from '@material-ui/icons/Settings';
import FullscreenRoundedIcon from '@material-ui/icons/FullscreenRounded';
import FullscreenExitRoundedIcon from '@material-ui/icons/FullscreenExitRounded';
import VolumeUpRoundedIcon from '@material-ui/icons/VolumeUpRounded';
import VolumeOffRoundedIcon from '@material-ui/icons/VolumeOffRounded';

// Components
import Settings from "../components/Settings";
import DigitalTimer from "../components/DigitalTimer";

const useStyles = makeStyles((theme) => ({
    clock: {
        height: `100vh`,
        padding: theme.spacing(1),
        display: 'grid',
        gridTemplateColumns: 'auto 300px',
        gridTemplateRows: 'auto',
        [theme.breakpoints.down(780)]: {
            gridTemplateColumns: 'auto',
            gridTemplateRows: 'auto auto',
        },
        gridGap: theme.spacing(1),
    },
    fab: {
        position: 'fixed !important',
        bottom: theme.spacing(1.5),
        right: theme.spacing(1.5),
    },
    cardMg: {
        marginTop: 0,
        marginBottom: theme.spacing(1),
        marginLeft: 'auto',
        marginRight: 'auto',
        width: 300,
    },
    supText: { whiteSpace: 'break-spaces' },
    divider: { marginBottom: theme.spacing(1) + ' !important' },
    controls: {
        display: 'flex'
    },
}));


export default function Main(props) {
    const classes = useStyles();
    const zero = new Date()
    zero.setSeconds(0);
    zero.setMinutes(0);
    zero.setHours(0);

    const returnIfNull = (v, d) => !v || v === 'null' ? d : v

    const [sOpen, setSOpen] = useState(false),
        [examDesc, setExamDesc] = useState(''),
        [examName, setExamName] = useState(''),
        [timeLeft, setTimeLeft] = useState(new Date()),
        [duration, setDuration] = useState(zero),
        [isFScn,   setIsFScn]   = useState(!!!document.fullscreenElement),
        [soundOn, setSoundOn] = useState(true);

    const _settingsClose = () => setSOpen(false);
    const _settingsOpen  = () => setSOpen(true);
    const _changeAppear  = (a) => {
        localStorage.appearance = JSON.stringify(a);
        props.sa(a);
    }
    const _changeFontURL = (f) => {
        localStorage.fontURL = f;
        props.sf(f)
    }


    return (
        <div>
            <div className={classes.clock}>
                <Clock ampm={props.a.includes('12hr')} />

                <div>
                    <Card elevation={24} className={classes.cardMg}>
                        <CardContent style={{paddingBottom: 8}}>
                            <Typography variant='overline'>Controls</Typography>

                            <Toolbar disableGutters={true}>
                                <Tooltip title={document.fullscreenEnabled ? 'Fullscreen' : 'Fullscreen mode is not supported'}>
                                    <span>
                                        <IconButton aria-label='Enter/exit fullscreen'
                                            onClick={() =>
                                        {
                                            if (document.fullscreenElement) document.exitFullscreen();
                                            else document.body.requestFullscreen();
                                            setIsFScn(!!!document.fullscreenElement)
                                        }}
                                                    disabled={!document.fullscreenEnabled}>
                                            {isFScn ? <FullscreenExitRoundedIcon /> : <FullscreenRoundedIcon />}
                                        </IconButton>
                                    </span>
                                </Tooltip>
                                <Tooltip title={(soundOn ? 'M' : 'Unm') + 'ute sound effects'}>
                                    <span>
                                        <IconButton aria-label='Enable/disable sound effects'
                                            onClick={() => setSoundOn(!soundOn)}>
                                            {soundOn ? <VolumeUpRoundedIcon /> : <VolumeOffRoundedIcon />}
                                        </IconButton>
                                    </span>
                                </Tooltip>
                            </Toolbar>
                        </CardContent>
                    </Card>

                    {(examName.trim() !== '' && examDesc.trim() !== '') &&
                    <Card elevation={24} className={classes.cardMg}>
                        <CardContent>
                            <Typography variant='overline'>Exam Information</Typography>
                            <Typography variant='h2' className={classes.supText}>{examName.trim()}</Typography>
                            <Divider className={classes.divider} />
                            <Typography variant='h4' className={classes.supText}>{examDesc.trim()}</Typography>
                        </CardContent>
                    </Card>
                    }

                    <Card elevation={24} className={classes.cardMg}>
                        <CardContent style={{paddingBottom: 16}}>
                            <Typography variant='overline'>Duration</Typography>
                        </CardContent>
                    </Card>

                    <Card elevation={24} className={classes.cardMg}>
                        <CardContent style={{paddingBottom: 16}}>
                            <Typography variant='overline'>Timer</Typography>
                            <DigitalTimer h={returnIfNull(duration, zero).getHours()}
                                          m={returnIfNull(duration, zero).getMinutes()}
                                          s={returnIfNull(duration, zero).getSeconds()}/>
                        </CardContent>
                    </Card>
                </div>
            </div>

            <Fab color="primary" aria-label="add" className={classes.fab} onClick={_settingsOpen}>
                <SettingsIconRound />
            </Fab>
            <Dialog onClose={_settingsClose} aria-labelledby="simple-dialog-title" open={sOpen}>
                <DialogTitle id="simple-dialog-title">Settings</DialogTitle>
                <Settings examDesc={examDesc} examDescChange={setExamDesc}
                          examTitle={examName} examTitleChange={setExamName}
                          stTime={timeLeft} setStTime={setTimeLeft}
                          duration={duration} setDuration={setDuration}
                          fontURLChange={_changeFontURL}
                          appearance={props.a} setAppearance={_changeAppear} />
                <DialogActions>
                    <Button onClick={_settingsClose}>Done</Button>
                </DialogActions>
            </Dialog>
        </div>
    );
}