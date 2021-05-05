import * as React from 'react';
import FontSearcher from './FontSearcher';
import clsx from 'clsx';

import { makeStyles } from '@material-ui/core/styles';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import TextField from '@material-ui/core/TextField';

import Accordion from '@material-ui/core/Accordion';
import AccordionSummary from '@material-ui/core/AccordionSummary';
import AccordionDetails from '@material-ui/core/AccordionDetails';
import Typography from '@material-ui/core/Typography';

import ExpandMoreRoundedIcon from '@material-ui/icons/ExpandMoreRounded';
import UndoRoundedIcon from '@material-ui/icons/UndoRounded';
import ModeNightRoundedIcon from '@material-ui/icons/ModeNightRounded';
import AccessTimeRoundedIcon from '@material-ui/icons/AccessTimeRounded';
import MailRoundedIcon from '@material-ui/icons/MailRounded';

import Button from '@material-ui/core/Button';
import ButtonGroup from '@material-ui/core/ButtonGroup';

import LocalizationProvider from '@material-ui/lab/LocalizationProvider';
import TimePicker from '@material-ui/lab/TimePicker';
import AdapterDateFns from '@material-ui/lab/AdapterDateFns';

import Tooltip from '@material-ui/core/Tooltip';
import IconButton from "@material-ui/core/IconButton";
import ToggleButtonGroup from '@material-ui/core/ToggleButtonGroup'
import ToggleButton from '@material-ui/core/ToggleButton'

const useStyles = makeStyles((theme) => ({
    fullW: {
        width: '100%'
    },
    txtFSp: {
        marginTop: theme.spacing(1.5) + ' !important'
    },
    flexD: {
        display: 'flex'
    },
    supBtn: {
        width: theme.spacing(7),
        height: theme.spacing(7),
        marginLeft: theme.spacing(1) + ' !important'
    }
}));

export default function Settings(props) {
    const classes = useStyles();

    const formatAction = (e, a) => (e ? 'Disable' : 'Enable') + a;

    const openNew = (u) => window.open(u);

    return (
        <DialogContent>
            <DialogContentText>
                Settings, a place where you change settings
            </DialogContentText>

            <Accordion>
                <AccordionSummary expandIcon={<ExpandMoreRoundedIcon />}>
                    <Typography>Exam Information</Typography>
                </AccordionSummary>
                <AccordionDetails>
                    <Typography>
                        Add exam information to be displayed (e.g. Module code & title)
                    </Typography>

                    <TextField
                        label="Exam Title"
                        variant="filled"
                        className={clsx(classes.fullW, classes.txtFSp)}
                        value={props.examTitle}
                        onChange={(e) => props.examTitleChange(e.target.value)}
                    />
                    <TextField
                        label="Additional Information"
                        multiline
                        variant="filled"
                        className={clsx(classes.fullW, classes.txtFSp)}
                        maxRows={5}
                        value={props.examDesc}
                        onChange={(e) => props.examDescChange(e.target.value)}
                    />
                    <Typography variant={'caption'}>
                        {(props.examTitle.trim() === '' || props.examDesc.trim() === '') ?
                            'Both fields need to be filled in' :
                            'The information is currently displayed beside the clock'
                        }
                    </Typography>
                </AccordionDetails>
            </Accordion>

            <Accordion>
                <AccordionSummary expandIcon={<ExpandMoreRoundedIcon />}>
                    <Typography>Timer</Typography>
                </AccordionSummary>
                <AccordionDetails>
                    <Typography>
                        Edit exam durations and timer settings
                    </Typography>

                    <LocalizationProvider dateAdapter={AdapterDateFns}>
                        <TimePicker
                            mask="__:__ __"
                            label="Start Time"
                            value={props.stTime}
                            onChange={(newValue) => {
                                props.setStTime(newValue);
                            }}
                            renderInput={(params) => <TextField
                                variant="filled"
                                {...params}
                                className={clsx(classes.fullW, classes.txtFSp)}/>}
                        />
                        <TimePicker
                            ampm={false}
                            openTo="hours"
                            views={['hours', 'minutes', 'seconds']}
                            inputFormat="HH:mm:ss"
                            mask="__:__:__"
                            label="Duration"
                            value={props.duration}
                            onChange={(newValue) => {
                                props.setDuration(newValue);
                            }}
                            renderInput={(params) => <TextField
                                variant="filled"
                                {...params}
                                margin="normal"
                                className={classes.fullW}
                            />}
                        />
                    </LocalizationProvider>
                </AccordionDetails>
            </Accordion>

            <Accordion>
                <AccordionSummary expandIcon={<ExpandMoreRoundedIcon />}>
                    <Typography>Appearance</Typography>
                </AccordionSummary>
                <AccordionDetails>
                    <Typography>
                        Change theme, UI font and more
                    </Typography>

                    <ToggleButtonGroup value={props.appearance}
                                       onChange={(e, nv) => props.setAppearance(nv)}
                                       aria-label="Appearance"
                                       className={classes.txtFSp}>
                        <ToggleButton value="dark" aria-label="Dark mode">
                            <Tooltip title={formatAction(props.appearance.includes('dark'), ' dark mode')}>
                                <ModeNightRoundedIcon />
                            </Tooltip>
                        </ToggleButton>
                        <ToggleButton value="12hr" aria-label="12 hour clock">
                            <Tooltip title={formatAction(props.appearance.includes('12hr'), ' 12-hour time')}>
                                <AccessTimeRoundedIcon />
                            </Tooltip>
                        </ToggleButton>
                    </ToggleButtonGroup>

                    <div className={clsx(classes.flexD, classes.txtFSp)}>
                        <FontSearcher onURLChanged={props.fontURLChange}/>
                        <Tooltip title='Reset to default font'>
                            <IconButton className={classes.supBtn} onClick={() => props.fontURLChange(null)}>
                                <UndoRoundedIcon />
                            </IconButton>
                        </Tooltip>
                    </div>
                </AccordionDetails>
            </Accordion>

            <Accordion>
                <AccordionSummary expandIcon={<ExpandMoreRoundedIcon />}>
                    <Typography>More Info</Typography>
                </AccordionSummary>
                <AccordionDetails>
                    <Typography>
                        An exam clock to be used in exams<br/>
                        A project by Vincent Kwok, {new Date().getFullYear()}
                    </Typography>
                    <ButtonGroup variant="outlined" aria-label="Contact me"
                                 sx={{width: '100%', justifyContent: 'center'}}
                                 className={classes.txtFSp}>
                        <Button onClick={() => openNew('https://github.com/cryptoAlgorithm/exam-clock-3.0')}>GitHub</Button>
                        <Button onClick={() => openNew('/about')}>About</Button>
                        <Button onClick={() => openNew('/credits')}>Credits</Button>
                    </ButtonGroup>
                    <Button sx={{ marginTop: 1.5, width: '100%' }}
                            startIcon={<MailRoundedIcon />}
                            href='mailto:hi@clockexe.cf'
                            variant='contained'>
                        Contact Me
                    </Button>
                </AccordionDetails>
            </Accordion>
        </DialogContent>
    );
}