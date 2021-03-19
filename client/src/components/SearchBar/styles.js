import { makeStyles } from '@material-ui/core/styles';

export default makeStyles((theme) => ({
    form: {
        display: 'flex',
        flexWrap: 'wrap',
        justifyContent: 'center',
    },
    root: {
        '& .MuiTextField-root': {
            margin: theme.spacing(1),
        },
    },
}));