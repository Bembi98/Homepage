import {WithStyles} from "@material-ui/core";
import {styles} from "./style";
import React from "react";



export interface State {

}
export interface Props extends WithStyles <typeof styles> {
    checkedDir: boolean[]
    checkedComp: boolean[]
    handleChangeDir :(event: React.ChangeEvent<HTMLInputElement>)=>void
    handleChangeDir2 :(event: React.ChangeEvent<HTMLInputElement>)=>void
    handleChangeDir3 :(event: React.ChangeEvent<HTMLInputElement>)=>void
    handleChangeComp:(event: React.ChangeEvent<HTMLInputElement>)=>void
    handleChangeComp2:(event: React.ChangeEvent<HTMLInputElement>)=>void
    handleChangeComp3:(event: React.ChangeEvent<HTMLInputElement>)=>void
}
