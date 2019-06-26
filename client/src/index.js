import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./components/App";
import registerServiceWorker from "./registerServiceWorker";
//import { Jumbotron, Container, Button } from 'react-bootstrap'

ReactDOM.render(<App />, document.getElementById("root"));
registerServiceWorker();
