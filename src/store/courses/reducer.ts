import { Action } from "../../utils/action";
import { ADD_COURSE, DELETE_COURSE, SET_COURSES,EDIT_COURSE} from "./actions";
import { CoursesReducer } from "./types";

const initialState: CoursesReducer = {
    courses: []
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
        default:
            return state;
    }
};
