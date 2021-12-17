import React from "react";
import {Props, State} from "./types";
import { withStyles} from "@material-ui/core";
import {styles} from "./style";
import Stack from "@mui/material/Stack";
import Pagination from '@mui/material/Pagination';

class Paginations extends React.Component<Props, State> {
    render() {
        const {classes} = this.props;
        return (
            <Stack spacing={2}>
                <Pagination count={3} shape="rounded" className={classes.pagination}/>
            </Stack>


        );
    }
}
export default withStyles(styles)(Paginations);