import {WithStyles} from "@material-ui/core";
import {styles} from "./style";


// export interface DispatchProps {
//     findCourse: (name:string) => void;
// }
// export interface State {
//     value:string;
// }
// export interface ComponentProps extends  DispatchProps,WithStyles <typeof styles>{
//
// }
export interface State {
   value:string
}
export interface Props extends WithStyles <typeof styles> {

}