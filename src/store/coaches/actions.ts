import { actionCreator } from "../../utils/action";
import { Persons } from "./types";

export const SET_COACHES = "SET_COACH";
export const ADD_COACHES = "ADD_COACH";
export const DELETE_COACHES = "DELETE_COACH";
export const EDIT_COACHES = "EDIT_COACH";
export const  SEARCH_COACHES = ' SEARCH_COACH';
export const CHECK_COACHES= 'CHECK_COACH'

export const setCoach = (coaches: Persons[]) => actionCreator(SET_COACHES, coaches);

export const addCoach = (coach: Persons) => actionCreator(ADD_COACHES, coach);

export const deleteCoach = (id: number) => actionCreator(DELETE_COACHES, id);

export const editCoach = (id: number,newCoach: Persons) => actionCreator(EDIT_COACHES, {id,newCoach});

export const findCoach = (name : string) => actionCreator(SEARCH_COACHES, name);

export  const filterCoaches = (filters:string[])=>actionCreator(CHECK_COACHES,filters)