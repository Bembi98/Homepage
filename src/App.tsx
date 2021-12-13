import React from "react";
import CourseGallery from "./pages/Courses";
import { Provider } from "react-redux";
import { createStore } from "redux";
import { rootReducer } from "./store";

const store = createStore(rootReducer);
class App extends React.Component {

    render() {
        return(
            <Provider store={store}>
        <CourseGallery  />
            </Provider>
    )
    }
}

export default App;
