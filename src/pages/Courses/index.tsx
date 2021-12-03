import React from "react";
import CourseCard from "../../components/CourseCard/index";
import {withStyles} from "@material-ui/core";
import {styles} from "./style";
import {Props, State} from "./types";
import {data} from '../../data'
import {Course} from "./types"
import Modal from "../../components/Modal";
import Typography from '@mui/material/Typography';
import AddIcon from '@mui/icons-material/Add';
import Fab from '@mui/material/Fab';

class CoursePage extends React.Component<Props, State> {
    state = {
        data,
        selectedCourse: null,


    };
    handleDelete = (id: number) => () => {
        this.setState(({data}) => ({
            data: data.filter((item) => item.id !== id)
        }));
    };

    handleSelectCourse = (course: Course) => () => {
        this.setState({selectedCourse: course})
    }

    handleCloseDetailsModal = () => {
        this.setState({selectedCourse: null})
    }

    render() {
        const {classes} = this.props;
        const {data,selectedCourse} = this.state;

        const course=selectedCourse as any


        return (
           <>
                <div className={classes.courseGallery}>
                    {data.map((course) => (
                        <CourseCard handleSelectCourse ={this.handleSelectCourse(course)} course={course} onDelete={this.handleDelete(course.id)}/>
                    ))}
                </div>
               <Fab className={classes.fab} color="primary" aria-label="add">
                   <AddIcon  />
               </Fab>
                <Modal open={!!selectedCourse} onClose={this.handleCloseDetailsModal}>{!!selectedCourse &&(<div className={classes.courseInfo}>
                    <Typography variant="h6" component="h2">More Info about course</Typography>
                    <Typography>{'Course: ' + course.course}</Typography>
                    <Typography>{"Tagline: " + course.name}</Typography>
                    <Typography>{"Company: " +course.author}</Typography>
                    <Typography>{"More info about direction: " + course.info}</Typography>
                </div>)}</Modal>


            </>
        );
    }
}

export default withStyles(styles)(CoursePage);