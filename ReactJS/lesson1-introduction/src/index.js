import React, { Fragment } from "react";
import ReactDOM from "react-dom";

class App extends React.Component {
    render() {
        return (
            <Fragment>
                <h1>Hello React!</h1>
            </Fragment>
        )
    }
}


ReactDOM.render(<App />, document.querySelector("#root"));
