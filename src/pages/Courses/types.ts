import {WithStyles} from "@material-ui/core";
import {styles} from "./style";
import {findCourse} from "../../store/courses/actions";


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

export interface State {
    data: Course[]
    selectedCourse: Course | null,
    open: boolean
    inputValues:any
    selectedForEdit: Course | null
    inputEdit:any
    checkedDir: boolean [] ,
    checkedComp:boolean []

}

export interface DispatchProps {
    setCourses: (course: Course[]) => void;
    addCourse: (course: Course) => void;
    deleteCourse: (id:number) => void;
    editCourse:(id:number,course:Course)=>void;
    findCourse: (name:string)=>void
}
export interface StateProps {
    courses: Course[];
    filtredCourses:any[]
}
export interface ComponentProps extends StateProps, DispatchProps,WithStyles <typeof styles>{

}