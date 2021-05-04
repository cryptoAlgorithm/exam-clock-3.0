import { makeStyles } from '@material-ui/core/styles';
import { useState, useEffect } from "react";

import TextField from '@material-ui/core/TextField';
import Autocomplete from '@material-ui/core/Autocomplete';
import CircularProgress from '@material-ui/core/CircularProgress';

const useStyles = makeStyles((theme) => ({
    fullW: {
        width: '100%'
    },
    txtFSp: {
        marginTop: theme.spacing(1.5) + ' !important'
    }
}));

export default function FontSearcher(props) {
    const [open, setOpen] = useState(false);
    const [options, setOptions] = useState([]);
    const [selVal, setSelVal] = useState(null);
    const loading = open && options.length === 0;

    const classes = useStyles();

    useEffect(() => {
        let active = true;

        if (!loading) return undefined;

        (async () => {
            const resp = await fetch('https://www.googleapis.com/webfonts/v1/webfonts?key=AIzaSyCHAiEzW77cEfanXlsRhFrHXoyz3jWr9EI')
                .catch(function(err) {
                    console.log('Fetch Error :-S', err);
                });
            if (resp.status !== 200) {
                console.log('Looks like there was a problem. Status Code: ' +
                    resp.status);
                return;
            }

            if (active) setOptions((await resp.json()).items);
        })();

        return () => {
            active = false;
        };
    }, [loading]);

    return (
        <Autocomplete
            open={open}
            className={classes.fullW}
            onOpen={() => {
                setOpen(true);
            }}
            onClose={() => {
                setOpen(false);
            }}
            value={selVal}
            onChange={(e, nv) => {
                setSelVal(nv);
                const v = options[Object.keys(options).find(key => options[key] === nv)];
                if (v) props.onURLChanged(v.files.regular.replace(/^http/m, 'https'));
            }}
            getOptionSelected={(option, value) => option.family === value.family}
            getOptionLabel={(option) => option.family}
            options={options}
            loading={loading}
            renderInput={(params) => (
                <TextField
                    {...params}
                    variant='filled'
                    label='Search for a font'
                    placeholder={''}
                    InputProps={{
                        ...params.InputProps,
                        endAdornment: (
                            <>
                                {loading ? <CircularProgress color="inherit" size={20} /> : null}
                                {params.InputProps.endAdornment}
                            </>
                        ),
                    }}
                />
            )}
        />
    );
}