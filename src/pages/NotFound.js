import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';
import { Button, CardActionArea, CardActions } from '@material-ui/core';
import {makeStyles} from '@material-ui/core/styles';

import oops from '../img/oops.webp';
import background from '../img/oopsBg.webp';

const useStyles = makeStyles((theme) => ({
    root: {
        backgroundImage: `url(${background})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center'
    },
    container: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        minHeight: '100vh',
        backdropFilter: 'blur(8px)',
    }
}));

export default function NotFound() {
    const classes = useStyles();

    return (
        <div className={classes.root}>
            <div className={classes.container}>
                <Card sx={{ maxWidth: 500, margin: '1rem' }} elevation={12}>
                    <CardActionArea href='/'>
                        <CardMedia
                            sx={{ aspectRatio: '16/9' }}
                            image={oops}
                            title="Long road"
                        />
                        <CardContent>
                            <Typography gutterBottom variant="h5" component="div">
                                You seem lost
                            </Typography>
                            <Typography variant="body2" color="text.secondary">
                                Oops... You seem to have fallen off the sides of the flat World Wide Web!
                                Click me to go back home!
                            </Typography>
                        </CardContent>
                    </CardActionArea>
                    <CardActions>
                        <Button size="small" href='/'>Home</Button>
                        <Button size="small" href='/about'>About</Button>
                        <Button size="small" href='/credits'>Credits</Button>
                    </CardActions>
                </Card>
            </div>
        </div>

    )
}