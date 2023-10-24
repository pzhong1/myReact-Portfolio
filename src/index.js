import React from "react"; //required everytime work with react
import ReactDOM from "react-dom"; // required everytime work with react
import App from "./App"; // app.js has all the packed element that coded in diffent components
import "./index.css"; //import this so otherwise the index.css will not apply to the website

ReactDOM.render(<App />, document.getElementById("root")); 
