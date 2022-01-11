import {createStyles} from '@material-ui/core/styles';

export const styles = createStyles({
    courseGallery: {
        display: "grid",
        gridTemplateColumns: "repeat(3, 1fr)",
        gridGap: 50,
        margin: 80,
        '@media (max-width: 768px)': {
            gridTemplateColumns: "repeat(2, 1fr)",
            margin: 40,
            gridGap: 40,
        },
        '@media (max-width: 420px)': {
            display: "block",
        },
    },
    courseInfo: {
        padding: 20,
        alignItems: 'center',
        justifyContent: 'center',

    },
    fab: {
        position: 'absolute',
        top: '50%',
        left: '47%',
        marginBottom: 40
    },

    inputAdd:{
        display:'flex',
       flexDirection:'column',
        padding:30,
        top: '60%',
        left: '50%',
    },
    cardsSection:{
        display:'flex',
    },
    filterCourses:{
marginTop:80
    }
});