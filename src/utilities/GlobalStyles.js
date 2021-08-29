import { makeStyles, createStyles } from '@material-ui/styles';

const useStyles = makeStyles(() => createStyles({

    '@global': {
        '*': {
            boxSizing: 'border-box',
            margin: 0,
            padding: 0,
        },
        html: {
            '-webkit-font-smoothing': 'antialiased',
            '-moz-osx-font-smoothing': 'grayscale',
            height: '100%',
            width: '100%'
        },
        body: {
            background: 'linear-gradient( 90deg, rgba(46,44,45,1) 0%, rgba(66,64,67,1) 100%)',
            display: 'flex',
            justifyContent: 'space-evenly',
            alignItems: 'center',
            height: '100%',
            width: '100%',

        },
        a: {
            textDecoration: 'none'
        },
        '#root': {
            display: 'flex',
            justifyContent: 'space-evenly',
            flexDirection: 'column',
            alignItems: 'center',
            height: '100vh',
            width: '100vh',
            margin: '0',
            flexGrow: 1
        }
    }

}));

export default function GlobalStyles() {
    useStyles();
    return null;
}
