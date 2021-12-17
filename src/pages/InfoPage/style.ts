import {createStyles} from '@material-ui/core/styles';

export const styles = createStyles({
    root: {
        flexGrow: 1
    },
    menuButton: {
        marginRight: 'spacing(1)'
    },
    title: {
        flexGrow: 1
    },
    mainFeaturesPost: {
        position: "relative",
        color: 'palette.common.white',
        marginBottom: 'spacing(4)',
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center",
        width: '100%',
        height: 768,

    },
    mainFeaturesPostContent: {
        position: "relative",
       paddingTop:'50%',


    },
    overlay: {
        position: "absolute",
        top: 0,
        right: 0,
        bottom: 0,
        left: 0,
        backgroundOverlay: "rgba(0,0,0.3)",
    }
})