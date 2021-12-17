import React from 'react';
import Button from '@mui/material/Button';
import {AppBar, Box, Container, IconButton, Toolbar, Typography, withStyles} from "@material-ui/core";
import MenuIcon from '@material-ui/icons/Menu';
import {styles} from "./style"
// import Input from '@mui/material/Input';
// import {ComponentProps, DispatchProps,} from "./types";
// import {Dispatch} from "redux";
// import {findCourse} from "../../store/courses/actions";
// import {connect} from "react-redux";
import SearchBar from "material-ui-search-bar";
import {Props,State} from "./types";


class Header extends React.Component<Props,State> {
    state={
        value:'',
    }
    // findCourse = (name:string) => () => {
    //     this.props.findCourse(name)
    // };
    render() {
        const {classes} = this.props
        return (
            <AppBar position="fixed" className={classes.appBar}>
                <Container fixed>
                    <Toolbar>

                        <IconButton edge="start" color="inherit" aria-label="menu" className={classes.menuButton}>
                            <MenuIcon/>
                        </IconButton>
                        <Typography variant="h6" className={classes.title}>Best development courses</Typography>
                        <SearchBar className={classes.searchbar}
                            value={this.state.value}
                            onChange={(newValue) => this.setState({ value: newValue })}
                            onRequestSearch={() => console.log(this.state.value)}
                        />
                        <Box mr={3}>
                            <Button color ="inherit" variant="outlined">Log In</Button>
                        </Box>
                        <Button color ="inherit" variant="outlined" >Sign Up</Button>
                    </Toolbar>
                </Container>
            </AppBar>

        );
    }
}

// const mapDispatchToProps = (dispatch: Dispatch): DispatchProps => ({
//
//         findCourse:(name:string)=>{
//         dispatch(findCourse(name))
//
// }});
// export default connect ( mapDispatchToProps) (withStyles(styles)(Header));

export default   (withStyles(styles)(Header));