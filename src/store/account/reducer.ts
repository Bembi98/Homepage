import { Action } from "../../utils/action";
import {SET_ACCOUNT  } from "./actions";
import { AccountReducer } from "./types";

const initialState: AccountReducer = {
  user:null
};

export const accountReducer = (state = initialState, action: Action) => {
    switch (action.type) {
        case SET_ACCOUNT :
            return { ...state, user: action.payload };
        default:
            return state;
    }
};
