import { makeStyles } from '@material-ui/core/styles';

export default makeStyles((theme) => ({
    appBar: {
        boxShadow: 'none',
        borderBottom: '1px solid rgba(0, 0, 0, 0.12)',
    },
    title: {
        display: 'flex',
        flexGrow: 1,
        alignItems: 'center',
        textDecoration: 'none'
    },
    image: {
        marginRight: '10px'
    }
}));
