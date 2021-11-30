import React from "react";
import CourseCard from "../../components/CourseCard/index";
import { withStyles } from "@material-ui/core";
import { styles } from "./style";
import { Props,State } from "./types";
import {data} from '../../data'




class CoursePage extends React.Component<Props,State> {
    state = {
        data
    };
    handleDelete = (id:number) => () => {
        this.setState(({data})=>({
            data: data.filter((item) => item.id !== id)
        }));
    };
    render() {
        const { classes } = this.props;
        const { data } = this.state;

        return (
            <div className={classes.courseGallery}>
                {data.map((course) => (
                    <CourseCard course={course} onDelete={this.handleDelete(course.id)}/>
                ))}
            </div>
        );
    }
}

export default withStyles(styles)(CoursePage);