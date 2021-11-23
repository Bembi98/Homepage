import React from "react";
import CourseCard from "../../components/CourseCard/index";
import { withStyles } from "@material-ui/core";
import { styles } from "./style";
import { Props } from "./types";
import {data} from '../../data'


class CoursePage extends React.Component<Props> {
    render() {
        const { classes } = this.props;

        return (
            <div className={classes.courseGallery}>
                {data.map((course) => (
                    <CourseCard course={course} />
                ))}
            </div>
        );
    }
}

export default withStyles(styles)(CoursePage);