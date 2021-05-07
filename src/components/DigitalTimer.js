import clsx from 'clsx';
import { useState } from 'react';
import useInterval from '../lib/useInterval';

import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import LinearProgress from "@material-ui/core/LinearProgress";
import {makeStyles} from "@material-ui/core/styles";

import PlayArrowRoundedIcon from '@material-ui/icons/PlayArrowRounded';
import StopRoundedIcon from '@material-ui/icons/StopRounded';
import {ClickAwayListener, FormControlLabel, FormGroup, Snackbar, Switch, Tooltip} from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
    nMg: { marginTop: theme.spacing(1) + '!important' },
    dMg: { marginTop: theme.spacing(2) + '!important' },
    fBd: {
        marginLeft: '-' + theme.spacing(2),
        marginRight: '-' + theme.spacing(2),
    },
    confB: {
        marginBottom: theme.spacing(.5) + '!important',
        marginTop: theme.spacing(.5) + '!important',
        backgroundColor: theme.palette.error.main + '!important'
    }
}));

export default function DigitalTimer(props) {
    const classes = useStyles();

    const fNum = (n) => n.toString().padStart(2, '0');

    const [h, setH] = useState(props.h),
        [m, setM] = useState(props.m),
        [s, setS] = useState(props.s),
        [int, setInt] = useState(null),
        [percentDone, setPercentDone] = useState(100),
        [endTime, setEndTime] = useState(0),
        [fTT, setFTT] = useState(0), // Decouple from totalTime which might change when timer is running
        [snack, setSnack] = useState({
            msg: '',
            open: false
        }),
        [confOpen, setConfOpen] = useState(false);

    let totalTime = props.s * 1000 + props.m * 60000 + props.h * 3600000;

    const stopTimer = () => {
        setInt(null);
        setPercentDone(100);
        setConfOpen(false);

        setSnack({
            open: true,
            msg: 'Timer finished!'
        })
    }

    useInterval(() => {
        const timeLeft = endTime - new Date();

        if (timeLeft < 0) {
            stopTimer();
            return;
        }

        let seconds = Math.floor((timeLeft / 1000) % 60),
            minutes = Math.floor((timeLeft / (1000 * 60)) % 60),
            hours = Math.floor((timeLeft / (1000 * 60 * 60)) % 24);

        setH(hours);
        setM(minutes);
        setS(seconds);

        setPercentDone(Math.floor(timeLeft / fTT * 100));
    }, int);

    const startTimer = () => {
        if (int) {
            setConfOpen(true);
            return;
        } // Show confirmation tooltip

        setH(props.h);
        setM(props.m);
        setS(props.s);

        setEndTime(+new Date() + totalTime);

        setFTT(totalTime);

        setInt(200);
    }

    return (
        <>
            <Typography variant='h3' align='center'>
                {fNum(int ? h : props.h)}h {fNum(int ? m : props.m)}m {fNum(int ? s : props.s)}s
            </Typography>
            <LinearProgress variant="determinate"
                            aria-label='Time remaining till timer ends'
                            value={percentDone}
                            className={clsx(classes.fBd, classes.nMg)} />

            <ClickAwayListener onClickAway={() => setConfOpen(false)}>
                <div style={{ display: 'flex', alignItems: 'center' }} className={classes.dMg}>
                    <Tooltip
                        PopperProps={{
                            disablePortal: true,
                        }}
                        onClose={() => setConfOpen(false)}
                        open={confOpen}
                        disableFocusListener
                        disableHoverListener
                        disableTouchListener
                        title={
                            <>
                                <Typography color="inherit">Are you sure you want to stop the timer?</Typography>
                                <Button variant='contained' onClick={stopTimer} startIcon={<StopRoundedIcon />}
                                        className={classes.confB}>Stop timer</Button>
                                <Button onClick={() => setConfOpen(false)}>Close</Button>
                            </>
                        }>
                        <Button variant='contained' disabled={confOpen || totalTime <= 0}
                                startIcon={int ? <StopRoundedIcon /> : <PlayArrowRoundedIcon />}
                                onClick={startTimer}>{int ? 'Stop' : 'Start'}</Button>
                    </Tooltip>

                    <Tooltip title='Auto-starts the timer when the start time specified in Settings is reached'>
                        <FormGroup sx={{ml: 2}}>
                            <FormControlLabel control={<Switch defaultChecked />} label="Auto-start" />
                        </FormGroup>
                    </Tooltip>
                </div>
            </ClickAwayListener>

            <Snackbar
                open={snack.open}
                autoHideDuration={5000}
                onClose={() => setSnack({
                    msg: '',
                    open: false
                })}
                message={snack.msg}
            />
        </>
    )
}