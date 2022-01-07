import React from 'react';
import Button from '@mui/material/Button';
import {AppBar, Box, Container, IconButton, Toolbar, Typography, withStyles} from "@material-ui/core";
import MenuIcon from '@material-ui/icons/Menu';
import {styles} from "./style"
import Input from '@mui/material/Input';
import {findCourse} from "../../store/courses/actions";
import {connect} from "react-redux";
import SearchBar from "material-ui-search-bar";
import {Props, State} from "./types";
import Modal from "../../components/Modal";
import {Dispatch} from "redux";
import {DispatchProps} from "./types";
import {setUser} from "../../store/account/actions";
import {User} from '../../store/account/types'
import {StateProps} from "./types";

class Header extends React.Component<Props, State> {
    state = {
        open: false,
        login: '',
        inputValue: ''
    }

    handleCloseModal = () => {
        this.setState({open: false})
    }
    handleOpenModal = () => {
        this.setState({open: true})
    }
    handleLogin = () => {
        this.props.setUser({email: this.state.login})
        this.setState({open: false})
    }


    render() {
        const {classes,findCourse} = this.props
        const {open} = this.state
        const isLogged = this.props.user

        return (
            <AppBar position="fixed" className={classes.appBar}>
                <Container fixed>
                    <Toolbar>

                        <IconButton edge="start" color="inherit" aria-label="menu" className={classes.menuButton}>
                            <MenuIcon/>
                        </IconButton>
                        <Typography variant="h6" className={classes.title}>Best development courses</Typography>
                        <SearchBar className={classes.searchbar}
                                   value={this.state.inputValue}
                                   onChange={(newValue) => this.setState({inputValue: newValue})}
                                   onRequestSearch={() => findCourse(this.state.inputValue)}
                        />
                        <Box mr={3}>
                            {isLogged ? <Button color="inherit" variant="outlined">Admin </Button> :
                                <Button color="inherit" variant="outlined" onClick={this.handleOpenModal}>Log
                                    In</Button>}
                        </Box>
                        <Modal open={open} onClose={this.handleCloseModal}>
                            <div className={classes.authModal}>
                                <Typography variant="h6">Login</Typography>
                                <input
                                    onChange={(event: any) => this.setState({login: event.target.value})}
                                />
                                <Typography variant="h6">Password</Typography>
                                <input color="inherit" type='number && string'/>
                            </div>
                            <Button color="inherit" variant="outlined" className={classes.authBtn}
                                    onClick={this.handleLogin}>Confirm</Button>
                        </Modal>
                        <div>
                            {isLogged ? <Button color="inherit" variant="outlined">Log Out</Button> :
                                <Button color="inherit" variant="outlined">Sign Up</Button>}
                        </div>
                    </Toolbar>
                </Container>
            </AppBar>

        );
    }
}


const mapStateToProps = (state: any): StateProps => ({
    user: state.account.user,


});
const mapDispatchToProps = (dispatch: Dispatch): DispatchProps => ({
    setUser: (user: User) => {
        dispatch(setUser(user))
    },

});
export default connect(mapStateToProps, mapDispatchToProps)(withStyles(styles)(Header));