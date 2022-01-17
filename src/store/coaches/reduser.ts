import { Action } from "../../utils/action";
import {
    ADD_COACHES, CHECK_COACHES, DELETE_COACHES, EDIT_COACHES, SEARCH_COACHES,
    SET_COACHES,
} from "./actions";
import { CoachesReducer } from "./types";

const initialState: CoachesReducer = {
    coaches: [],
    inputValue : [],
};

export const coachesReducer = (state = initialState, action: Action) => {
    switch (action.type) {
        case SET_COACHES:
            return { ...state, coaches: action.payload };
        case ADD_COACHES:
            return { ...state, coaches: [...state.coaches, action.payload] };
        case DELETE_COACHES:
            return {
                ...state, coaches: state.coaches.filter((coach) => coach.id !== action.payload)};
        case EDIT_COACHES:
            return {
                ...state, coaches: state.coaches.map((coach) => coach.id === action.payload.id? action.payload.newCoach : coach )}
        case SEARCH_COACHES:
            return{
                ...state, inputValue : state.coaches.filter((coach)=>coach.name.toLowerCase().trim().includes(action.payload.toLowerCase().trim()))
            }
        case CHECK_COACHES:
            return{
                ...state, inputValue : state.coaches.filter(coach => action.payload.includes(coach.name)|| action.payload.includes(coach.direction))
            }
        default:
            return state;
    }
};
