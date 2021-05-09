import DialogContent from '@material-ui/core/DialogContent';
import TextField from '@material-ui/core/TextField';
import InputAdornment from '@material-ui/core/InputAdornment';
import Typography from '@material-ui/core/Typography';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';

import YouTubeIcon from '@material-ui/icons/YouTube';
import {makeStyles} from '@material-ui/core/styles';
import {useState} from 'react';
import {LinearProgress} from '@material-ui/core';

import {decode} from 'he';

function hexToRgb(hex) {
    // Expand shorthand form (e.g. "03F") to full form (e.g. "0033FF")
    const shorthandRegex = /^#?([a-f\d])([a-f\d])([a-f\d])$/i;
    hex = hex.replace(shorthandRegex, function(m, r, g, b) {
        return r + r + g + g + b + b;
    });

    const result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
    return result ? {
        r: parseInt(result[1], 16),
        g: parseInt(result[2], 16),
        b: parseInt(result[3], 16)
    } : null;
}

const useStyles = makeStyles((theme) => ({
    fsp: {
        marginTop: theme.spacing(1.5) + '!important',
        width: '100%',
        position: 'sticky!important',
        top: 0,
        borderRadius: `${theme.shape.borderRadius}px ${theme.shape.borderRadius}px 0 0`,
        zIndex: 1000,
        backgroundColor: `rgba(${hexToRgb(theme.palette.background.paper).r}, 
        ${hexToRgb(theme.palette.background.paper).g}, ${hexToRgb(theme.palette.background.paper).b}, .6)!important`,
        backdropFilter: 'blur(12px) saturate(120%)'
    },
    vidInfo: { marginLeft: theme.spacing(2) + '!important' },
    vidThumbs: {
        width: 120,
        height: 'auto',
        borderRadius: theme.shape.borderRadius / 3 * 2,
    },
    vidResultHolder: { borderRadius: theme.shape.borderRadius + 'px!important' }
}));


export default function YouTubeSearch(props) {
    const classes = useStyles();

    const [sVal, setSVal] = useState(''),
        [loading, setLoading] = useState(false),
        [results, setResults] = useState([]);

    const search = async () => {
        setLoading(true);
        const resp = await
            fetch(`https://youtube.googleapis.com/youtube/v3/search?part=snippet&maxResults=10&q=${encodeURI(sVal)}&type=video&key=AIzaSyCzFb9z826uhBHYmnSUpxAytb9uA99G-60`,
                {
                    headers: {
                        'Accept-Encoding': 'gzip',
                        'User-Agent': 'Clock.exe (gzip)'
                    }
                })
            .catch(function(err) {
                console.log('Fetch Error :-S', err);
            });

        if (resp.status !== 200) {
            console.log('Looks like there was a problem. Status Code: ' + resp.status);
            return;
        }

        setResults((await resp.json()).items);

        setLoading(false);
    }

    return (
        <DialogContent>
            <Typography>Search for a YouTube video below to play it</Typography>

            <TextField label='Search for a video'
                       disabled={loading}
                       className={classes.fsp}
                       value={sVal}
                       onChange={(e) => setSVal(e.target.value)}
                       onKeyPress={(ev) => {
                           if (ev.key === 'Enter') search()
                       }}
                       InputProps={{
                           endAdornment: <InputAdornment position='end'><YouTubeIcon /></InputAdornment>,
                       }}
                       variant='filled'/>
            {loading && <LinearProgress />}

            <List component="div" aria-label="main mailbox folders">
                {
                    results.map(r => {
                        return (
                            <ListItem button className={classes.vidResultHolder} key={r.id.videoId}
                                      onClick={() => {
                                          props.setID(r.id.videoId);
                                          props.setVidT({
                                              title: decode(r.snippet.title),
                                              channel: decode(r.snippet.channelTitle)
                                          });
                                      }}>
                                <img src={r.snippet.thumbnails.medium.url}
                                     alt=''
                                     className={classes.vidThumbs}
                                     width={r.snippet.thumbnails.medium.width} height={r.snippet.thumbnails.medium.height} />
                                <div className={classes.vidInfo}>
                                    <Typography sx={{fontWeight: 500}}>{decode(r.snippet.title)}</Typography>
                                    <Typography variant='body2' sx={{fontSize: 13}}>{decode(r.snippet.channelTitle)}</Typography>
                                </div>
                            </ListItem>
                        )
                    })
                }
            </List>
            {
                results.length > 0 &&
                <Typography variant='caption'>The above are the 20 (or less) most relevant results to your search.</Typography>
            }
        </DialogContent>
    )
}