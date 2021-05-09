import * as React from 'react';
import clsx from 'clsx';
import themeOptions from '../lib/themeOptions';

import {makeStyles, ThemeProvider, useTheme, withStyles} from '@material-ui/core/styles';
import Box from '@material-ui/core/Box';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';

// Icons
import FastForwardRoundedIcon from '@material-ui/icons/FastForwardRounded';
import FastRewindRoundedIcon from '@material-ui/icons/FastRewindRounded';
import PlayArrowRoundedIcon from '@material-ui/icons/PlayArrowRounded';
import PauseRoundedIcon from '@material-ui/icons/PauseRounded';
import RepeatOneOnRoundedIcon from '@material-ui/icons/RepeatOneOnRounded';
import RepeatOneRoundedIcon from '@material-ui/icons/RepeatOneRounded';
import TuneRoundedIcon from '@material-ui/icons/TuneRounded';
import BlurOnRoundedIcon from '@material-ui/icons/BlurOnRounded';
import BlurOffRoundedIcon from '@material-ui/icons/BlurOffRounded';
import BrightnessLowRoundedIcon from '@material-ui/icons/BrightnessLowRounded';
import BrightnessHighRoundedIcon from '@material-ui/icons/BrightnessHighRounded';

import YouTube from 'react-youtube';
import {useState} from 'react';
import {Alert, CircularProgress, Grid, LinearProgress, Popover, Slider, Snackbar, Tooltip} from '@material-ui/core';
import useInterval from '../lib/useInterval';

const MediaProgBar = withStyles((theme) => ({
    root: {
        borderRadius: 2,
    },
    bar: {
        borderRadius: 2,
    },
}))(LinearProgress);

const useStyles = makeStyles((theme) => ({
    bgVid: {
        position: 'absolute',
        top: -66,
        left: 0,
        width: '100%',
        height: 'calc(100% + 130px)',
    },
    hiddenVid: {
        display: 'none',
        height: 0,
        width: 0
    },
    fG: { flexGrow: 1, },
}));

export default function MediaControlCard(props) {
    const theme = useTheme();
    const classes = useStyles();

    const fSecs = (t) => {
        t = Math.floor(t);
        const m = Math.floor(t / 60).toString();
        const s = (t - m * 60).toString();

        return `${m.padStart(Math.max(2, m.length), '0')}:${s.padStart(2, '0')}`
    }

    const [state, setState] = useState(-2),
        [buf, setBuf] = useState(0),
        [loop, setLoop] = useState(false),
        [currentTime, setCurrentTime] = useState(0),
        [totalTime, setTotalTime] = useState(0),
        [sbObj, setSbObj] = useState({ open: false, severity: 'error', msg: '' }),
        [adjConf, setAdjConf] = useState({ open: false, anchor: null }),
        [picConf, setPicConf] = useState({ blur: 0, bright: 50 }),
        [yt, setYt] = useState(null);

    const update = () => {
        if (!yt) return;

        setTotalTime(yt.getDuration());
        setCurrentTime(yt.getCurrentTime());
        setBuf(yt.getVideoLoadedFraction() * 100);
    }

    const seek = (s) => yt.seekTo(yt.getCurrentTime() + s, true);

    useInterval(update, 100);

    const _handleError = (e) => {
        let humanErr;

        // Convert the error into something human-readable
        switch (e.data) {
            case 2:
                humanErr = 'An internal error has occurred';
                break;
            case 5:
                humanErr = 'An internal error has occurred in the YouTube player';
                break;
            case 100:
                humanErr = 'The requested video could not be found. It might have been removed or is private.';
                break;
            case 101:
            case 150:
                humanErr = 'The requested video cannot be played in an embedded player';
                break;
            default:
                humanErr = 'An unknown error has occurred in the YouTube Jukebox';
        }

        setSbObj({ open: true, severity: 'error', msg: humanErr });
    }

    return (
        <ThemeProvider theme={themeOptions('dark', props.fURL)}>
            <Card sx={{ boxShadow: 'none', position: 'relative' }} elevation={12}>

                <div
                    style={{filter: `brightness(${picConf.bright}%) blur(${picConf.blur / 5}px)`}}
                    className={
                        clsx(classes.bgVid,
                            {[classes.hiddenVid]: state === -2}
                        )}>
                    <YouTube
                        className={
                            clsx(classes.bgVid,
                                {[classes.hiddenVid]: state === -2}
                            )}
                        onReady={(e) => setYt(e.target)}
                        onEnd={(e) => { if (loop) e.target.playVideo(); }}
                        onError={_handleError}
                        onStateChange={(e) => {
                            setState(e.data);
                            update(); // Update UI immediately
                        }}
                        opts={{
                            playerVars: {
                                // https://developers.google.com/youtube/player_parameters
                                autoplay: 1,
                                modestbranding: 1,
                            },
                        }} videoId={props.id}/>
                </div>

                <Box sx={{ display: 'flex', flexDirection: 'column', flexGrow: 1, zIndex: 2, position: 'relative' }}>
                    <CardContent sx={{ flex: '1 0 auto', pb: 1 }}>
                        <Typography variant='overline'>YouTube Jukebox</Typography>

                        <Typography component="div" variant="h5">{props.vidT.title}</Typography>
                        <Typography variant="subtitle1" color="text.secondary" component="div">{props.vidT.channel}</Typography>
                    </CardContent>

                    <Box sx={{display: 'flex', alignItems: 'center', marginX: 2}}>
                        <Typography variant='caption' sx={{mr: .8}}>{fSecs(currentTime)}</Typography>
                        <MediaProgBar variant='buffer' value={state === -2 ? 0 : currentTime / totalTime * 100}
                                      valueBuffer={buf} sx={{width: '100%'}} />
                        <Typography variant='caption' sx={{ml: .8}}>{fSecs(totalTime - currentTime)}</Typography>
                    </Box>

                    <Box sx={{ display: 'flex', alignItems: 'center', padding: 1 }}>
                        <Tooltip title='Rewind 10s'>
                            <span>
                                <IconButton aria-label='rewind' onClick={() => seek(- 10)}
                                            disabled={state === -2}>
                                    {theme.direction === 'rtl' ? <FastForwardRoundedIcon /> : <FastRewindRoundedIcon />}
                                </IconButton>
                            </span>
                        </Tooltip>

                        { state === 3 ?
                            <CircularProgress style={{width: 62, height: 62, padding: 12}}/> :
                            <IconButton aria-label="play/pause" disabled={state === -2}
                                        onClick={() => {
                                            state === 1 ? yt.pauseVideo() : yt.playVideo()
                                        }}>
                                { state === 1 ?
                                    <PauseRoundedIcon sx={{ height: 38, width: 38 }} /> :
                                    <PlayArrowRoundedIcon sx={{ height: 38, width: 38 }} />
                                }
                            </IconButton>
                        }

                        <Tooltip title='Fast-forward 10s'>
                            <span>
                                <IconButton aria-label='fast-forward' onClick={() => seek(10)}
                                            disabled={state === -2}>
                                    {theme.direction === 'rtl' ? <FastRewindRoundedIcon /> : <FastForwardRoundedIcon />}
                                </IconButton>
                            </span>
                        </Tooltip>

                        <Tooltip title={loop ? 'Turn off loop' : 'Loop this song'}>
                            <span>
                                <IconButton aria-label='loop' onClick={() => setLoop(!loop)}
                                            disabled={state === -2}>
                                    {loop ?
                                        <RepeatOneOnRoundedIcon fontSize='small'/> :
                                        <RepeatOneRoundedIcon fontSize='small' />
                                    }
                                </IconButton>
                            </span>
                        </Tooltip>

                        <div className={classes.fG} />

                        <Tooltip title='Adjust picture appearance'>
                            <span>
                                <IconButton aria-label='loop'
                                            onClick={(e) => setAdjConf({open: true, anchor: e.currentTarget})}
                                            disabled={state === -2} className={classes.fG}>
                                    <TuneRoundedIcon fontSize='small' />
                                </IconButton>
                            </span>
                        </Tooltip>

                        <Popover
                            open={adjConf.open}
                            anchorEl={adjConf.anchor}
                            onClose={() => setAdjConf({open: false, anchor: null})}
                            anchorOrigin={{
                                vertical: 'bottom',
                                horizontal: 'left',
                            }}
                            transformOrigin={{
                                vertical: 'top',
                                horizontal: 'right',
                            }}>
                            <Box sx={{ paddingX: 2, paddingY: 1.2 }}>
                                <Typography id='blur-slider-label' gutterBottom>Blur</Typography>
                                <Grid container spacing={2} alignItems="center">
                                    <Grid item>
                                        <BlurOffRoundedIcon />
                                    </Grid>
                                    <Grid item xs>
                                        <Slider
                                            sx={{width: 200}}
                                            value={picConf.blur}
                                            scale={(v) => v / 5}
                                            onChange={(e, nv) =>
                                                setPicConf(ov => ({...ov, blur: nv}))
                                            }
                                            aria-labelledby='blur-slider-label'
                                            valueLabelDisplay='auto'
                                        />
                                    </Grid>
                                    <Grid item>
                                        <BlurOnRoundedIcon />
                                    </Grid>
                                </Grid>

                                <Typography id='br-slider-label' gutterBottom>Brightness</Typography>
                                <Grid container spacing={2} alignItems="center">
                                    <Grid item>
                                        <BrightnessLowRoundedIcon />
                                    </Grid>
                                    <Grid item xs>
                                        <Slider
                                            sx={{width: 200}}
                                            value={picConf.bright}
                                            onChange={(e, nv) =>
                                                setPicConf(ov => ({...ov, bright: nv}))
                                            }
                                            aria-labelledby='br-slider-label'
                                            valueLabelDisplay='auto'
                                        />
                                    </Grid>
                                    <Grid item>
                                        <BrightnessHighRoundedIcon />
                                    </Grid>
                                </Grid>
                            </Box>
                        </Popover>
                    </Box>
                </Box>
            </Card>

            <Snackbar open={sbObj.open} autoHideDuration={10000}
                      onClose={(event, reason) => {
                          if (reason === 'clickaway') return;
                          setSbObj({open: false, severity: 'error', msg: sbObj.msg});
                      }}>
                <Alert elevation={6} variant='filled'
                       onClose={() => setSbObj({open: false, severity: 'error', msg: sbObj.msg})}
                       severity={sbObj.severity}>
                    {sbObj.msg}
                </Alert>
            </Snackbar>
        </ThemeProvider>
    );
}