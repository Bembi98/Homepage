import * as React from 'react';
import Box from '@mui/material/Box';
import Checkbox from '@mui/material/Checkbox';
import FormControlLabel from '@mui/material/FormControlLabel';
import {Props, State} from "../Footer/types";
import {withStyles} from "@material-ui/core";
import {styles} from "../Footer/style";


class FilterCourse extends React.Component<Props, State> {
    state= {
        checkedDir: [false,false],
        checkedComp: [false,false]


    }

    handleChangeDir = (event: React.ChangeEvent<HTMLInputElement>) => {
        this.setState([event.target.checked,event.target.checked]);
    };
    handleChangeDir2= (event: React.ChangeEvent<HTMLInputElement>) => {
        this.setState({ checkedDir: [event.target.checked, this.state.checkedDir[1]] })
    };

    handleChangeDir3 = (event: React.ChangeEvent<HTMLInputElement>) => {
        this.setState({ checkedDir: [ this.state.checkedDir[0], event.target.checked] })
    };
    handleChangeComp = (event: React.ChangeEvent<HTMLInputElement>) => {
        this.setState([event.target.checked,event.target.checked]);
    };
    handleChangeComp2= (event: React.ChangeEvent<HTMLInputElement>) => {
        this.setState({ checkedComp: [event.target.checked, this.state.checkedComp[1]] })
    };

    handleChangeComp3= (event: React.ChangeEvent<HTMLInputElement>) => {
        this.setState({ checkedComp: [ this.state.checkedComp[0], event.target.checked] })
    };

    render() {
    return (

        <div>
            <FormControlLabel
                label="Direction"
                control={
                    <Checkbox
                        checked={this.state.checkedDir[0] && this.state.checkedDir[1]}
                        indeterminate={this.state.checkedDir[0] !== this.state.checkedDir[1]}
                        onChange={this.handleChangeDir}
                    />
                }
            />
            <Box sx={{ display: 'flex', flexDirection: 'column', ml: 3 }}>
                <FormControlLabel
                    label="UI/UX Design"
                    control={<Checkbox checked={this.state.checkedDir[0]} onChange={this.handleChangeDir2} />}
                />
                <FormControlLabel
                    label="3D Design"
                    control={<Checkbox checked={this.state.checkedDir[1]} onChange={this.handleChangeDir3} />}
                />

            </Box>
            <FormControlLabel
                label="Company"
                control={
                    <Checkbox
                        checked={this.state.checkedComp[0] && this.state.checkedComp[1]}
                        indeterminate={this.state.checkedComp[0] !== this.state.checkedComp[1]}
                        onChange={this.handleChangeComp}
                    />
                }
            />
            <Box sx={{ display: 'flex', flexDirection: 'column', ml: 3 }}>
                <FormControlLabel
                    label="Iusha  Company"
                    control={<Checkbox checked={this.state.checkedComp[0]} onChange={this.handleChangeComp2} />}
                />
                <FormControlLabel
                    label="Menkes Company"
                    control={<Checkbox checked={this.state.checkedComp[1]} onChange={this.handleChangeComp3} />}
                />
            </Box>
        </div>


    );
}}
export default withStyles(styles)(FilterCourse);
