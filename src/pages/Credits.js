import {makeStyles} from '@material-ui/core/styles';

import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import Container from '@material-ui/core/Container';
import Fab from '@material-ui/core/Fab';
import Divider from '@material-ui/core/Divider';

import KeyboardArrowUpRoundedIcon from '@material-ui/icons/KeyboardArrowUpRounded';
import DescriptionRoundedIcon from '@material-ui/icons/DescriptionRounded';
import HomeRoundedIcon from '@material-ui/icons/HomeRounded';

import ScrollTop from '../components/ScrollTop';
import IconButton from '@material-ui/core/IconButton';
import {Link} from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
    tpS: {
        marginTop: theme.spacing(1) + '!important',
        display: 'block',
    },
}));

export default function Credits(props) {
    const classes = useStyles();

    return (
        <>
            <AppBar>
                <Toolbar>
                    <DescriptionRoundedIcon sx={{ mr: 2 }} />
                    <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
                        Credits
                    </Typography>
                    <IconButton href='/'><HomeRoundedIcon /></IconButton>
                </Toolbar>
            </AppBar>
            <Toolbar id="header" /> { /* This ID is required for scrolling to top */ }
            <Container maxWidth='md'>
                <Box sx={{ my: 2 }}>
                    <Typography variant='h2'>Credits</Typography>
                    <Divider />

                    <Typography variant='h6' className={classes.tpS}>
                        Work in progress - More detailed credits coming soon
                    </Typography>
                    <Typography variant='p' className={classes.tpS}>
                        This project would not have been possible without the following amazing libraries/frameworks:
                        <ul>
                            <li><Link href='https://material-ui.com'>Material UI</Link></li>
                            <li><Link href='https://reactjs.org'>ReactJS</Link></li>
                        </ul>
                    </Typography>
                </Box>
            </Container>

            <ScrollTop {...props}>
                <Fab color="secondary" size="small" aria-label="scroll back to top"><KeyboardArrowUpRoundedIcon /></Fab>
            </ScrollTop>
        </>
    );
}