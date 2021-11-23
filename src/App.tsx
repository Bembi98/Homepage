
import React from "react";
import { data } from "./data";
import CourseCard from "./components/CourseCard"





class App extends React.Component {
    render() {
        return <CourseCard course={data[0]} />;

    }
}

export default App;
