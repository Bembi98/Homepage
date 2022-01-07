import {WithStyles} from "@material-ui/core";
import {styles} from "./style";
import {User} from '../../store/account/types'


export interface State {
    inputValue: string
    open: boolean
    login: string
}

export interface Props extends StateProps, DispatchProps, WithStyles <typeof styles> {
findCourse:(name:string)=>void
}

export interface DispatchProps {
    setUser: (user: User) => void
}

export interface StateProps {
    user: null | User;

}