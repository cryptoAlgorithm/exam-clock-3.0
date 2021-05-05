import {makeStyles} from '@material-ui/core/styles';

import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import Container from '@material-ui/core/Container';
import Fab from '@material-ui/core/Fab';
import Divider from '@material-ui/core/Divider';

import KeyboardArrowUpRoundedIcon from '@material-ui/icons/KeyboardArrowUpRounded';
import InfoRoundedIcon from '@material-ui/icons/InfoRounded';
import AlarmRoundedIcon from '@material-ui/icons/AlarmRounded';

import ScrollTop from './ScrollTop';

import clock from './img/clock.svg';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import {Link} from '@material-ui/core';
import IconButton from '@material-ui/core/IconButton';
import HomeRoundedIcon from '@material-ui/icons/HomeRounded';

const useStyles = makeStyles((theme) => ({
    tpS: {
        marginTop: theme.spacing(1) + '!important',
        display: 'block',
    },
    fImg: {
        margin: theme.spacing(1),
        padding: theme.spacing(1.5),
        float: 'right',
        maxWidth: '300px',
        boxShadow: theme.shadows[6],
        borderRadius: theme.shape.borderRadius,
        backgroundColor: theme.palette.mode === 'dark' ? theme.palette.divider : 'transparent',
    },
    qHd: {
        padding: theme.spacing(2) + '!important',
        borderLeft: `5px solid ${theme.palette.primary.main}`,
        display: 'flex',
        alignItems: 'center',
        flexWrap: 'wrap',
    }
}));

export default function About(props) {
    const classes = useStyles();

    return (
        <>
            <AppBar>
                <Toolbar>
                    <InfoRoundedIcon sx={{ mr: 2 }} />
                    <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
                        About
                    </Typography>
                    <IconButton href='/'><HomeRoundedIcon /></IconButton>
                </Toolbar>
            </AppBar>
            <Toolbar id="header" /> { /* This ID is required for scrolling to top */ }
            <Container maxWidth='md'>
                <Box sx={{ my: 2 }}>
                    <Typography variant='h2'>About Clock.exe</Typography>
                    <Divider />
                    <img src={clock} alt='Clip art of clock' className={classes.fImg}/>

                    <Card className={classes.tpS} elevation={6}>
                        <CardContent className={classes.qHd}>
                            <AlarmRoundedIcon sx={{ marginRight: 1 }}/>
                            An exam clock, to be used in exams
                        </CardContent>
                    </Card>

                    <Typography variant='p' className={classes.tpS}>
                        This is an exam clock made in React. It's main aim is to be used
                        in an exam to replace one of the other exam clocks, offering more
                        features, and a more streamlined user interface.<br />
                        It has all of the features of other exam clocks such as a digital
                        & analog clock, exam information display and toilet availability
                        management, while providing even more features like a timer, all
                        for a tiny size ({'< 2MB total'}).
                        <br /><br/>
                        Over the course of development, I was inspired by the design of
                        several other similar exam clocks,
                        like <Link href='https://github.com/appventure-nush/exam-clock-2020'>this</Link> one.
                        <br /><br />
                        This is an open-source project; You are free to fork, modify and
                        distribute this project. Clock.exe is licenced under the GPL-v3
                        license and is free software.
                        <br /><br />
                        I started this project as an "icebreaker"
                        in <Link href='https://reactjs.org/'>React</Link> and <Link href='https://material-ui.com'>Material-UI</Link>,
                        and it turned out way better than I expected. Check out this and
                        my other projects at GitHub <Link href='https://github.com/cryptoAlgorithm'>here</Link>.
                    </Typography>
                </Box>
            </Container>

            <ScrollTop {...props}>
                <Fab color="secondary" size="small" aria-label="scroll back to top">
                    <KeyboardArrowUpRoundedIcon />
                </Fab>
            </ScrollTop>
        </>
    );
}