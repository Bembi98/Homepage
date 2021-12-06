import React from "react";
import {Props} from "../../pages/Courses/types";
import AddIcon from "@mui/icons-material/Add";
import Fab from "@mui/material/Fab";

class CardAddForm extends React.Component<Props> {
    render() {
        const {classes} = this.props;
        return (
        <Fab className={classes.fab} color="primary" aria-label="add">
            <AddIcon/>
        </Fab>
        )
    }
}
export default CardAddForm;