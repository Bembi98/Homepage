import {WithStyles} from "@material-ui/core";
import {styles} from "./style";
import {User} from '../../store/account/types'


export interface State {
    inputValue: string
    open: boolean
    login: string
}

export interface Props extends StateProps, DispatchProps, WithStyles <typeof styles> {

}

export interface DispatchProps {
    setUser: (user: User) => void
    findCourse: (inputValue: string) => void;
}

export interface StateProps {
    user: null | User;

}