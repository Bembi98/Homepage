import {WithStyles} from "@material-ui/core";
import {styles} from "../CourseCard/style";

export type Course = {
    id: number;
    course: string;
    name: string;
    img: string;
    author: string;
    stars: number;
    price: number;
    info: string;
};

export interface Props  {
    value: number;

}