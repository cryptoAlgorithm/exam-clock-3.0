import * as React from 'react';
import { useTheme } from '@material-ui/core/styles';
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

import YouTube from 'react-youtube';
import {useState} from 'react';
import {CircularProgress, LinearProgress, Tooltip} from '@material-ui/core';
import useInterval from '../lib/useInterval';

export default function MediaControlCard(props) {
    const theme = useTheme();

    const [state, setState] = useState(-2),
        [progress, setProg] = useState(0),
        [buf, setBuf] = useState(0),
        [yt, setYt] = useState(null);

    const update = () => {
        if (!yt) return;

        setProg(yt.getCurrentTime() / yt.getDuration() * 100);
        setBuf(yt.getVideoLoadedFraction() * 100);
    }

    const seek = (s) => {
        yt.seekTo(yt.getCurrentTime() + s, true);
        update(); // Update UI immediately
    }

    useInterval(update, 500);

    return (
        <>
            <Card sx={{ display: 'flex' }} elevation={12}>
                <Box sx={{ display: 'flex', flexDirection: 'column' }}>
                    <CardContent sx={{ flex: '1 0 auto', pb: 1 }}>
                        <Typography component="div" variant="h5">{props.vidT.title}</Typography>
                        <Typography variant="subtitle1" color="text.secondary" component="div">{props.vidT.channel}</Typography>
                    </CardContent>

                    <LinearProgress variant="buffer" value={progress} valueBuffer={buf} sx={{width: '100%'}} />

                    <Box sx={{ display: 'flex', alignItems: 'center', padding: 1 }}>
                        <Tooltip title='Rewind 10s'>
                            <IconButton aria-label='rewind' onClick={() => seek(- 10)}
                                        disabled={state === -2}>
                                {theme.direction === 'rtl' ? <FastForwardRoundedIcon /> : <FastRewindRoundedIcon />}
                            </IconButton>
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
                            <IconButton aria-label='fast-forward' onClick={() => seek(10)}
                                        disabled={state === -2}>
                                {theme.direction === 'rtl' ? <FastRewindRoundedIcon /> : <FastForwardRoundedIcon />}
                            </IconButton>
                        </Tooltip>
                    </Box>
                </Box>
            </Card>

            <span style={{display: 'none'}}>
                 <YouTube
                     onReady={(e) => setYt(e.target)}
                     onStateChange={(e) => setState(e.data)}
                     opts={{
                         width: '0',
                         height: '0',
                         playerVars: {
                             // https://developers.google.com/youtube/player_parameters
                             autoplay: 1,
                             modestbranding: 1,
                         },
                     }} videoId={props.id}/>
            </span>
        </>

    );
}