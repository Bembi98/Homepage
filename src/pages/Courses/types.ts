import {WithStyles} from "@material-ui/core";
import {styles} from "./style";

export type Course = {
    id: any;
    course: string;
    name: string;
    img: string;
    author: string;
    stars: number;
    price: number;
    info: string;
};
export interface Props extends WithStyles <typeof styles> {
}
export interface State {
    data: Course[]
    selectedCourse: Course | null,
    open: boolean
    inputValues:any
    selectedForEdit: Course | null
    inputEdit:any
}