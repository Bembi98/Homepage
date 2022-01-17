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
    selectedForEditCoach : Persons | null
    coaches : Persons[]
    selectedCoach:Persons | null
}

export interface DispatchProps {
    setStudent: (student: Persons[]) => void;
    addStudent: (student: Persons) => void;
    deleteStudent: (id:number) => void;
    editStudent:(id:number,student:Persons)=>void;
    findStudent: (name:string)=>void
    filterStudents:(filters:string[])=>void
    setCoach: (coach: Persons[]) => void;
    addCoach: (coach: Persons) => void;
    deleteCoach: (id:number) => void;
    editCoach:(id:number,coach:Persons)=>void;
    findCoach: (name:string)=>void
    filterCoaches:(filters:string[])=>void
}
export interface StateProps {
    students: Persons[];
    filtredStudents:any[]
    coaches: Persons[];
    filtredCoaches:any[]
}
export interface ComponentProps extends StateProps, DispatchProps,WithStyles <typeof styles>{

}