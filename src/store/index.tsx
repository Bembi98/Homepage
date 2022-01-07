import { combineReducers } from "redux";

import { coursesReducer } from "./courses/reducer";
import {accountReducer} from "./account/reducer";

export const rootReducer = combineReducers({ courses: coursesReducer, account: accountReducer } );
