import clsx from 'clsx';
import {useState} from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Typography from "@material-ui/core/Typography";

const handBaseZ = 1;

const useStyles = makeStyles((theme) => ({
    root: {
        width: '0',
        height: '0',

        paddingTop: `min(100%, min(calc(100vh - ${theme.spacing(2)}), calc(100vw - calc(${theme.spacing(2)} + 300px))))`,
        paddingRight: `min(100%, min(calc(100vh - ${theme.spacing(2)}), calc(100vw - calc(${theme.spacing(2)} + 300px))))`,

        [theme.breakpoints.down(780)]: {
            paddingTop: `min(100%, calc(100vw - ${theme.spacing(2)}))`,
            paddingRight: `min(100%, calc(100vw - ${theme.spacing(2)}))`,
            marginBottom: theme.spacing(1)
        },

        position: 'relative',
        margin: 'auto',
        borderRadius: '100% !important',
    },
    face: {
        backgroundColor: 'transparent',
        borderRadius: '50%',
        width: `calc(100% - ${theme.spacing(3)})`,
        height: `calc(100% - ${theme.spacing(3)})`,
        border: `1px solid ${theme.palette.grey[400]}`,
        position: 'absolute',
        top: theme.spacing(1.5),
        left: theme.spacing(1.5),
        boxShadow: theme.shadows[1]
    },
    hands: {
        position: 'absolute',
        borderRadius: 16,
        boxShadow: theme.shadows[6],
        opacity: .9,
    },
    iFace: {
        position: 'absolute',
        left: '5%',
        top: '5%',
        height: '90%',
        width: '90%',
        borderRadius: '50%',
        border: `1px solid ${theme.palette.grey[700]}`,
    },
    s: {
        backgroundColor: '#f44336',
        transformOrigin: '1px 90%',
        zIndex: handBaseZ + 3,
        width: 2,
        height: '50%',
        top: '5%',
        left: '50%',
    },
    m: {
        backgroundColor: '#2196f3',
        zIndex: handBaseZ + 1,
        width: 6,
        height: 'calc(50% - 55px)',
        top: 55,
        left: 'calc(50% - 3px)',
        transformOrigin: '3px 100%',
    },
    h: {
        backgroundColor: '#4caf50',
        zIndex: handBaseZ,
        width: 10,
        height: 'calc(50% - 100px)',
        top: 100,
        left: 'calc(50% - 5px)',
        transformOrigin: '5px 100%',
    },
    pin: {
        backgroundColor: 'white',
        width: theme.spacing(3),
        height: theme.spacing(3),
        left: `calc(50% - ${theme.spacing(1.5)})`,
        top: `calc(50% - ${theme.spacing(1.5)})`,
        borderRadius: theme.spacing(3),
        border: `${theme.spacing(.75)} solid ${theme.palette.primary.main}`,
        position: 'absolute',
        zIndex: handBaseZ + 2,
        boxShadow: theme.shadows[8]
    },
    degMark: {
        left: '50%',
        position: 'absolute',
        transformOrigin: '1px 100%',
        height: '50%',
        zIndex: handBaseZ - 1
    },
    degLine: {
        height: '10%',
        width: 1,
        display: 'block',
        backgroundColor: theme.palette.grey[700],
    },
    longDegLine: {
        height: '20%',
        backgroundColor: theme.palette.grey[500],
    },
    digText: {
        position: 'absolute',
        width: '100%',
        top: `calc(75% - ${theme.spacing(10)})`,
        textAlign: 'center',
        fontFamily: 'sevenSeg,Roboto,serif !important',
    },
    digTextBg: {
        opacity: .1
    }
}));

export default function Clock(props) {
    const classes = useStyles();

    const fNum = (n) => n.toString().padStart(2, '0');

    const doUpdate = () => {
        const now = new Date();
        let h = now.getHours();
        if (h > 12) h -= 12;
        setDegS((now.getSeconds()) * 6);
        setDegM(now.getMinutes() * 6 + (now.getSeconds()) / 10);
        setDegH(h * 30 + now.getMinutes() / 2);
        setDigS(fNum(now.getSeconds()));
        setDigM(fNum(now.getMinutes()));
        setDigH(now.getHours());
        setAmpm(now.getHours() > 12 ? 'pm' : 'am');
    }

    const [s, setDegS] = useState(0),
        [m, setDegM] = useState(0),
        [h, setDegH] = useState(0),
        [digS, setDigS] = useState('00'),
        [digM, setDigM] = useState('00'),
        [digH, setDigH] = useState(0),
        [ampm, setAmpm] = useState('am');

    setInterval(doUpdate, 200);

    let faceMarks = [];
    for (let i = 0; i < 360; i += 6) faceMarks.push(i);

    return (
        <Paper elevation={12} className={classes.root}>
            <div className={classes.face}>
                <div className={classes.iFace} />

                <div className={clsx(classes.hands, classes.s)} style={{transform: `rotate(${s}deg)`}}/>
                <div className={clsx(classes.hands, classes.m)} style={{transform: `rotate(${m}deg)`}}/>
                <div className={clsx(classes.hands, classes.h)} style={{transform: `rotate(${h}deg)`}}/>

                <Typography className={clsx(classes.digText, classes.digTextBg)} variant='h2'>
                    ~~:~~:~~
                    { props.ampm && <br/> }
                    { props.ampm ? '~~' : '' }
                </Typography>
                <Typography className={classes.digText} variant='h2'>{fNum(digH > 12 && props.ampm ? digH - 12 : digH)}
                    :{digM}{digS % 2 === 0 ? ':' : ' '}{digS}
                    { props.ampm && <br/> }
                    { props.ampm ? ampm : '' }
                </Typography>

                <div className={classes.pin} />

                {faceMarks.map(d => {
                    return (<div
                        className={classes.degMark}
                        style={{transform: `rotate(${d}deg)`}}
                        key={d.toString()}
                    >
                        <span className={clsx(classes.degLine,
                            {[classes.longDegLine]: (d % 30 === 0)}
                        )} />
                    </div>)
                })}
            </div>
        </Paper>
    )
}