import { actionCreator } from "../../utils/action";
import { Persons } from "./types";

export const SET_STUDENTS = "SET_STUDENT";
export const ADD_STUDENTS = "ADD_STUDENT";
export const DELETE_STUDENTS = "DELETE_STUDENT";
export const EDIT_STUDENTS = "EDIT_STUDENT";
export const  SEARCH_STUDENTS = ' SEARCH_STUDENT';
export const CHECK_STUDENTS= 'CHECK_STUDENT'

export const setStudent = (students: Persons[]) => actionCreator(SET_STUDENTS, students);

export const addStudent = (student: Persons) => actionCreator(ADD_STUDENTS, student);

export const deleteStudent = (id: number) => actionCreator(DELETE_STUDENTS, id);

export const editStudent = (id: number,newStudent: Persons) => actionCreator(EDIT_STUDENTS, {id,newStudent});

export const findStudent = (name : string) => actionCreator(SEARCH_STUDENTS, name);

export  const filterStudents = (filters:string[])=>actionCreator(CHECK_STUDENTS,filters)