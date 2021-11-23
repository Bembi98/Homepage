import {createStyles} from "@material-ui/core/styles";

export const styles = createStyles({
    card: {
        maxWidth: 345,
        padding:20,

    },
    author: {
        paddingTop: 20,
        color: '#F72585',
    },
    shareIcon:{
        color:'#1E90FF',
    },
    btnCourse:{
        top:0,
        left:'30%',
        borderRadius:8,
        background:'#FFFFFF',

    },
    like:{
        color:'#FF0000',
    },
    cardImg: {
        display:'flex',
        alignItems:'center',
        justifyContent:'center'
    },
    price :{
      paddingTop:10,
        fontWeight:'bold',
        fontSize: 20,

    },
    nameCourse:{
        paddingTop:15,
        fontSize:20,
    },
    img:{
        maxWidth:250,
        maxHeight:250,
    },
    modal: {
        position: 'absolute',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        width: 400,
        bgcolor: 'background.paper',
        border: '2px solid #000',
        boxshadow: 24,
        p: 4,
    },

});