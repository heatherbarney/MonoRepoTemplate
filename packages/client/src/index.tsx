import * as React from "react";
import * as ReactDOM from "react-dom";
import App from "./App";

const message = "This is my React/TS app.";

ReactDOM.render(<App message={message} />, document.getElementById("root"));
