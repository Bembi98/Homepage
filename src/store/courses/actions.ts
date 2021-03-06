import { actionCreator } from "../../utils/action";
import { Course } from "./types";

export const SET_COURSES = "SET_COURSES";
export const ADD_COURSE = "ADD_COURSE";
export const DELETE_COURSE = "DELETE_COURSE";
export const EDIT_COURSE = "EDIT_COURSE";
export const  SEARCH_VALUE = ' SEARCH_VALUE';
export const CHECK_VALUE = 'CHECK_VALUE'

export const setCourses = (courses: Course[]) => actionCreator(SET_COURSES, courses);

export const addCourse = (course: Course) => actionCreator(ADD_COURSE, course);

export const deleteCourse = (id: number) => actionCreator(DELETE_COURSE, id);

export const editCourse = (id: number,newCourse: Course) => actionCreator(EDIT_COURSE, {id,newCourse});

export const findCourse = (name : string) => actionCreator(SEARCH_VALUE, name);

export  const filterCourses = (filters:string[])=>actionCreator(CHECK_VALUE,filters)