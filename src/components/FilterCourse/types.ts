import {WithStyles} from "@material-ui/core";
import {styles} from "./style";



export interface State {
    checkedDir:boolean[]
    checkedComp:boolean[]
}
export interface Props extends WithStyles <typeof styles> {
    checkedDir: boolean[]
    checkedComp: boolean[]
}
