import {useState} from "react";

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
import {Collapse, IconButton, Toolbar, Tooltip} from '@material-ui/core';

// Icons
import SettingsIconRound from '@material-ui/icons/Settings';
import FullscreenRoundedIcon from '@material-ui/icons/FullscreenRounded';
import FullscreenExitRoundedIcon from '@material-ui/icons/FullscreenExitRounded';
import VolumeUpRoundedIcon from '@material-ui/icons/VolumeUpRounded';
import VolumeOffRoundedIcon from '@material-ui/icons/VolumeOffRounded';
import MusicNoteRoundedIcon from '@material-ui/icons/MusicNoteRounded';
import ExpandMoreRoundedIcon from '@material-ui/icons/ExpandMoreRounded';

// Components
import Settings from '../components/Settings';
import DigitalTimer from '../components/DigitalTimer';
import YouTubeSearch from '../components/YouTubeSearch';
import Clock from '../components/Clock';
import MediaControlCard from '../components/MediaControlCard';

const useStyles = makeStyles((theme) => ({
    clock: {
        minHeight: '100vh',
        padding: theme.spacing(1),

        display: 'grid',
        [theme.breakpoints.down(780)]: {
            display: 'block',
        },

        gridTemplateColumns: 'auto 300px',
        gridTemplateRows: 'auto',
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
    },
    supText: { whiteSpace: 'break-spaces', textAlign: 'center' },
    divider: { marginBottom: theme.spacing(1) + ' !important' },
    btnRow: {
        display: 'flex',
        alignItems: 'center',
        borderBottom: '1px solid ' + theme.palette.divider,
        paddingBottom: theme.spacing(0.5),
    },
    flexG: { flexGrow: 1 },
    expandBtn: {
        transition: theme.transitions.create(['transform'], {
            duration: theme.transitions.duration.shortest,
        }) + '!important'
    },
    shrinkP: {
        marginBottom: theme.spacing(1),
        borderRadius: theme.shape.borderRadius,
        overflow: 'hidden',
        boxShadow: theme.shadows[12]
    }
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
        [startTime, setStartTime] = useState(new Date()),
        [jBoxOpen, setJBoxOpen] = useState(false),
        [duration, setDuration] = useState(zero),
        [ctrlOpen, setCtrlOpen] = useState(false),
        [ytVidID, setYtVidID] = useState(''),
        [ytVidT, setYtVidT] = useState({
            title: 'Nothing playing',
            channel: ''
        }),
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
        <>
            <div className={classes.clock}>
                <Clock ampm={props.a.includes('12hr')} />

                <div>
                    <Collapse in={ctrlOpen} collapsedSize={56} className={classes.shrinkP}>
                        <Card elevation={12} className={classes.cardMg} sx={{boxShadow: 'none'}}>
                            <CardContent style={{paddingBottom: 8, paddingTop: 8}}>
                                <div className={classes.btnRow}>
                                    <Typography variant='overline' className={classes.flexG}>Controls</Typography>
                                    <IconButton onClick={() => setCtrlOpen(!ctrlOpen)}
                                                aria-label='Show/hide controls and media'>
                                        <ExpandMoreRoundedIcon fontSize='small' className={classes.expandBtn}
                                                               style={{transform: `rotate(${ctrlOpen ? 180 : 0}deg)`}}
                                        />
                                    </IconButton>
                                </div>

                                <Toolbar disableGutters={true} style={{minHeight: '48px!important'}}>
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
                                        <IconButton aria-label='Enable/disable sound effects'
                                                    onClick={() => setSoundOn(!soundOn)}>
                                            {soundOn ? <VolumeUpRoundedIcon /> : <VolumeOffRoundedIcon />}
                                        </IconButton>
                                    </Tooltip>

                                    <Tooltip title='YouTube Jukebox'>
                                        <IconButton aria-label='Open YouTube Jukebox' onClick={() => setJBoxOpen(true)}>
                                            <MusicNoteRoundedIcon />
                                        </IconButton>
                                    </Tooltip>
                                </Toolbar>
                            </CardContent>
                        </Card>

                        <MediaControlCard id={ytVidID} vidT={ytVidT} fURL={props.f}/>
                    </Collapse>

                    {(examName.trim() !== '' && examDesc.trim() !== '') &&
                    <Card elevation={12} className={classes.cardMg}>
                        <CardContent>
                            <Typography variant='overline'>Exam Information</Typography>
                            <Typography variant='h2' className={classes.supText}>{examName.trim()}</Typography>
                            <Divider className={classes.divider} />
                            <Typography variant='h4' className={classes.supText}>{examDesc.trim()}</Typography>
                        </CardContent>
                    </Card>
                    }

                    <Card elevation={12} className={classes.cardMg}>
                        <CardContent style={{paddingBottom: 16}}>
                            <Typography variant='overline'>Duration</Typography>
                            <Typography variant='h4' className={classes.supText}>
                                {startTime.getHours().toString().padStart(2, '0')}
                                {startTime.getMinutes().toString().padStart(2, '0')} - 2000hrs
                            </Typography>
                            <Typography variant='h5' className={classes.supText}>100 hours</Typography>
                        </CardContent>
                    </Card>

                    <Card elevation={12} className={classes.cardMg}>
                        <CardContent style={{paddingBottom: 16}}>
                            <Typography variant='overline'>Timer</Typography>
                            <DigitalTimer h={returnIfNull(duration, zero).getHours()}
                                          m={returnIfNull(duration, zero).getMinutes()}
                                          s={returnIfNull(duration, zero).getSeconds()}/>
                        </CardContent>
                    </Card>
                </div>
            </div>

            <Fab color='primary' aria-label='add' className={classes.fab} onClick={_settingsOpen}>
                <SettingsIconRound />
            </Fab>
            <Dialog onClose={_settingsClose} aria-labelledby='st-t' open={sOpen}>
                <DialogTitle id='st-t'>Settings</DialogTitle>
                <Settings examDesc={examDesc} examDescChange={setExamDesc}
                          examTitle={examName} examTitleChange={setExamName}
                          stTime={startTime} setStTime={setStartTime}
                          duration={duration} setDuration={setDuration}
                          fontURLChange={_changeFontURL}
                          appearance={props.a} setAppearance={_changeAppear} />
                <DialogActions>
                    <Button onClick={_settingsClose}>Done</Button>
                </DialogActions>
            </Dialog>

            <Dialog open={jBoxOpen} onClose={() => setJBoxOpen(false)} aria-labelledby='jb-t'>
                <DialogTitle id='jb-t'>YouTube Jukebox</DialogTitle>
                <YouTubeSearch setID={setYtVidID} setVidT={setYtVidT} />
                <DialogActions>
                    <Button onClick={() => setJBoxOpen(false)}>Close</Button>
                </DialogActions>
            </Dialog>
        </>
    );
}