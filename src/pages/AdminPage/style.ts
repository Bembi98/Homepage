import {createStyles} from "@material-ui/core/styles";

export const styles = createStyles({
tab1:{
    display: "grid",
    gridTemplateColumns: "repeat(3, 1fr)",
    gridGap: 50,
    margin: 80,
},
    tab2:{
        display: "grid",
        gridTemplateColumns: "repeat(3, 1fr)",
        gridGap: 50,
        margin: 80,
    },
    tabs:{
    width:'100%',
        alignItems:"center",
        display: 'flex',
        justifyContent: 'center',
        borderColor: 'divider',
        borderBottom: 1,
    },
    tabsBox:{
        marginTop: 100,
    },
    fab: {
        position: 'absolute',
        top: '50%',
        left: '47%',
        marginBottom: 40
    },
    studentInfo:{
        padding: 20,
        alignItems: 'center',
        justifyContent: 'center',
    },
    inputAdd:{
        display:'flex',
        flexDirection:'column',
        padding:30,
        top: '60%',
        left: '50%',
    },

});