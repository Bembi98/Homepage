import { combineReducers } from "redux";
import { studentsReducer } from "./students/reducer";
import { coachesReducer } from "./coaches/reduser"
import { coursesReducer } from "./courses/reducer";
import {accountReducer} from "./account/reducer";

export const rootReducer = combineReducers({ courses: coursesReducer, account: accountReducer,students:studentsReducer,coaches:coachesReducer} );
