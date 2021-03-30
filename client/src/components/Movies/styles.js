import { makeStyles } from '@material-ui/core/styles';

export default makeStyles((theme) => ({
    mainContainer: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center'
    },
    smMargin: {
        margin: theme.spacing(1),
    },
    actionDiv: {
        textAlign: 'center',
    },
    buttonContainer: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        padding: '20px',
    },
    image: {
        marginLeft: 'auto',
        marginRight: 'auto',
        height: '20%',
        width: '20%',
    },
    container: {
        // flex: 1,
        flexDirection: 'row',
        // flexWrap: 'wrap',
        // alignItems: 'flex-start',
        item: true,
        xs: '12px',
        sm: '7px',
        width: '50%',
        container: true,
        padding: theme.spacing(3),
    },
}));
