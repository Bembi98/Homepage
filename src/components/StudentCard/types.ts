import {WithStyles} from "@material-ui/core";
import {styles} from "./style";

export type Persons ={
    id: number;
    info: string;
    name: string;
    img: string;
    direction: string;
    age: number;
    type: string;
    location: string;
    birthday : string;
    gender : string;
    national : string;

}
export interface Props extends WithStyles <typeof styles> {
    student: Persons;
    onDelete:()=>void;
    handleSelectPerson: () => void
    handleOpenEditModal:()=>void
}
export interface State  {
    dataStudent:Persons;
}
interface DispatchProps {
    deleteStudent: (id: number) => void;
}