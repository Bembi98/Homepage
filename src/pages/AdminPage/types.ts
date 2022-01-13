import {WithStyles} from "@material-ui/core";
import {styles} from "./style";
import {Persons} from '../../components/StudentCard/types'



export interface State {
    value:string
    selectedStudent: Persons | null,
    inputValues:any
    inputEdit:any
    open: boolean
    students: Persons[]
    selectedForEdit : Persons | null
}

export interface DispatchProps {
    setStudent: (student: Persons[]) => void;
    addStudent: (student: Persons) => void;
    deleteStudent: (id:number) => void;
    editStudent:(id:number,student:Persons)=>void;
    findStudent: (name:string)=>void
    filterStudents:(filters:string[])=>void
}
export interface StateProps {
    students: Persons[];
    filtredStudents:any[]
}
export interface ComponentProps extends StateProps, DispatchProps,WithStyles <typeof styles>{

}