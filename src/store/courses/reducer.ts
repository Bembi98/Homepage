import { Action } from "../../utils/action";
import { ADD_COURSE, DELETE_COURSE, SET_COURSES,EDIT_COURSE,SEARCH_VALUE,CHECK_VALUE} from "./actions";
import { CoursesReducer } from "./types";

const initialState: CoursesReducer = {
    courses: [],
    inputValue : [],
};

export const coursesReducer = (state = initialState, action: Action) => {
    switch (action.type) {
        case SET_COURSES:
            return { ...state, courses: action.payload };
        case ADD_COURSE:
            return { ...state, courses: [...state.courses, action.payload] };
        case DELETE_COURSE:
            return {
                ...state, courses: state.courses.filter((course) => course.id !== action.payload)};
        case EDIT_COURSE:
            return {
                ...state, courses: state.courses.map((course) => course.id === action.payload.id? action.payload.newCourse : course )}
        case SEARCH_VALUE:
            return{
                ...state, inputValue : state.courses.filter((course)=>course.course.toLowerCase().trim().includes(action.payload.toLowerCase().trim()))
            }
        case CHECK_VALUE:
            return{
                ...state, inputValue : state.courses.filter(course => action.payload.includes(course.course)|| action.payload.includes(course.author))
            }
        default:
            return state;
    }
};
