import { actionCreator } from "../../utils/action";
import {User} from "./types";

export const SET_ACCOUNT = "SET_ACCOUNT";


export const setUser = (user:User) => actionCreator(SET_ACCOUNT, user);