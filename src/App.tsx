import React from "react";
import CourseGallery from "./pages/Courses";
import { Provider } from "react-redux";
import { createStore } from "redux";
import { rootReducer } from "./store";
import Footer from "./components/Footer";
import MainInfo from "./pages/InfoPage";
const store = createStore(rootReducer);

class App extends React.Component {
    render() {
        return(
            <Provider store={store}>

                <MainInfo/>
        <CourseGallery  />
                <Footer/>
            </Provider>
    )
    }
}

export default App;
