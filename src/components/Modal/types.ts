import {WithStyles} from "@material-ui/core";
import {styles} from "./style";
import React from "react";


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

export interface Props extends WithStyles <typeof styles> {
    children: React.ReactNode
    open:boolean
    onClose: ()=>void;
}
export interface State  {

}