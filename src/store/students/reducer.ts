import { Action } from "../../utils/action";
import {ADD_STUDENTS, DELETE_STUDENTS, SET_STUDENTS, EDIT_STUDENTS, SEARCH_STUDENTS, CHECK_STUDENTS,} from "./actions";
import { StudentsReducer } from "./types";

const initialState: StudentsReducer = {
    students: [],
    inputValue : [],
};

export const studentsReducer = (state = initialState, action: Action) => {
    switch (action.type) {
        case SET_STUDENTS:
            return { ...state, students: action.payload };
        case ADD_STUDENTS:
            return { ...state, students: [...state.students, action.payload] };
        case DELETE_STUDENTS:
            return {
                ...state, students: state.students.filter((student) => student.id !== action.payload)};
        case EDIT_STUDENTS:
            return {
                ...state, students: state.students.map((student) => student.id === action.payload.id? action.payload.newStudent : student )}
        case SEARCH_STUDENTS:
            return{
                ...state, inputValue : state.students.filter((student)=>student.name.toLowerCase().trim().includes(action.payload.toLowerCase().trim()))
            }
        case CHECK_STUDENTS:
            return{
                ...state, inputValue : state.students.filter(student => action.payload.includes(student.name)|| action.payload.includes(student.direction))
            }
        default:
            return state;
    }
};
