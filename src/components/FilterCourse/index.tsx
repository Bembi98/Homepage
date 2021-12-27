import * as React from 'react';
import Box from '@mui/material/Box';
import Checkbox from '@mui/material/Checkbox';
import FormControlLabel from '@mui/material/FormControlLabel';
import {Props, State} from "./types";
import {withStyles} from "@material-ui/core";
import {styles} from "./style";



class FilterCourse extends React.Component<Props, State> {



    render() {


    return (

        <div>
            <FormControlLabel
                label="Direction"
                control={
                    <Checkbox
                        checked={this.props.checkedDir[0] && this.props.checkedDir[1]}
                        indeterminate={this.props.checkedDir[0] !== this.props.checkedDir[1]}
                        onChange={this.props.handleChangeDir}
                    />
                }
            />
            <Box sx={{ display: 'flex', flexDirection: 'column', ml: 3 }}>
                <FormControlLabel
                    label="UI/UX Design"
                    control={<Checkbox checked={this.props.checkedDir[0]} onChange={this.props.handleChangeDir2} />}
                />
                <FormControlLabel
                    label="3D Design"
                    control={<Checkbox checked={this.props.checkedDir[1]} onChange={this.props.handleChangeDir3} />}
                />

            </Box>
            <FormControlLabel
                label="Company"
                control={
                    <Checkbox
                        checked={this.props.checkedComp[0] && this.props.checkedComp[1]}
                        indeterminate={this.props.checkedComp[0] !== this.props.checkedComp[1]}
                        onChange={this.props.handleChangeComp}
                    />
                }
            />
            <Box sx={{ display: 'flex', flexDirection: 'column', ml: 3 }}>
                <FormControlLabel
                    label="Iusha  Company"
                    control={<Checkbox checked={this.props.checkedComp[0]} onChange={this.props.handleChangeComp2} />}
                />
                <FormControlLabel
                    label="Menkes Company"
                    control={<Checkbox checked={this.props.checkedComp[1]} onChange={this.props.handleChangeComp3} />}
                />
            </Box>
        </div>


    );
}}
export default withStyles(styles)(FilterCourse);
