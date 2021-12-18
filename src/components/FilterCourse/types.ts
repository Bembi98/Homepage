import {WithStyles} from "@material-ui/core";
import {styles} from "./style";
import React from "react";


export interface State {
    checkedDir:boolean[]
    checkedComp:boolean[]
}
export interface Props extends WithStyles <typeof styles> {
    children: React.ReactNode
}