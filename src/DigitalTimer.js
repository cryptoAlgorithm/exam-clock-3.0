import clsx from 'clsx';
import { useState } from 'react';
import useInterval from './lib/useInterval';

import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import LinearProgress from "@material-ui/core/LinearProgress";
import {makeStyles} from "@material-ui/core/styles";

import PlayArrowRoundedIcon from '@material-ui/icons/PlayArrowRounded';
import StopRoundedIcon from '@material-ui/icons/StopRounded';
import {ClickAwayListener, Tooltip} from '@material-ui/core';

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

    /*const [h, setH] = useState(props.remaining.getHours()),
        [m, setM] = useState(props.remaining.getMinutes()),
        [s, setS] = useState(props.remaining.getSeconds());*/

    const [h, setH] = useState(props.h),
        [m, setM] = useState(props.m),
        [s, setS] = useState(props.s),
    [int, setInt] = useState(null),
    [percentDone, setPercentDone] = useState(100),
    [endTime, setEndTime] = useState(0),
    [confOpen, setConfOpen] = useState(false);

    let totalTime = props.s * 1000 + props.m * 60000 + props.h * 3600000;

    const stopTimer = () => {
        setInt(null);
        setPercentDone(100);
        setConfOpen(false)
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

        setPercentDone(Math.floor(timeLeft / totalTime * 100));
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

        setInt(200);
    }

    return (
        <div>
            <Typography variant='h3' align='center'>
                {fNum(int ? h : props.h)}h {fNum(int ? m : props.m)}m {fNum(int ? s : props.s)}s
            </Typography>
            <LinearProgress variant="determinate"
                            value={percentDone}
                            className={clsx(classes.fBd, classes.nMg)} />

            <ClickAwayListener onClickAway={() => setConfOpen(false)}>
                <div>
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
                        <Button className={classes.dMg} variant='contained' disabled={confOpen}
                                startIcon={int ? <StopRoundedIcon /> : <PlayArrowRoundedIcon />}
                                onClick={startTimer}>{int ? 'Stop' : 'Start'}</Button>
                    </Tooltip>
                </div>
            </ClickAwayListener>
        </div>
    )
}