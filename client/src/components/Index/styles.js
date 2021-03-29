import { makeStyles } from '@material-ui/core/styles';




export default makeStyles({
    media: {
        height: 0,
        paddingTop: '56.25%',
        backgroundColor: 'rgba(0, 0, 0, 0.5)',
        backgroundBlendMode: 'darken',
    },
    border: {
        border: 'solid',
    },
    fullHeightCard: {
        height: '100%',
    },
    card: {
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between',
        borderRadius: '15px',
        height: '100%',
        position: 'relative',
    },
    overlay: {
        marginLeft: "auto",
        marginRight: "auto",
        top: '50%',
        left: '20px',
    },
    overlay2: {
        position: 'absolute',
        top: '20px',
        right: '20px',
        color: 'white',
    },
    grid: {
        display: 'flex',
    },
    details: {
        display: 'flex',
        justifyContent: 'space-between',
        margin: '20px',
    },
    title: {
        padding: '0 16px',
    },
    cardActions: {
        padding: '0 16px 8px 16px',
        display: 'flex',
        justifyContent: 'space-between',
    },
    movieButton: {
        display: 'inline-block',
        backgroundImage: 'url(/backmovie.png)',
        backgroundSize: '100%',
        borderRadius: '10px',
        border: '4px double #cccccc',
        textAlign: 'center',
        fontSize: '45px',
        padding: '20px',
        width: '200px',
    },
    showButton: {
        display: 'inline-block',
        backgroundImage: 'url(/backshow.png)',
        backgroundSize: '100% 98%',
        borderRadius: '10px',
        border: '4px double #cccccc',
        textAlign: 'center',
        fontSize: '45px',
        padding: '20px',
        width: '200px',
    }
});
