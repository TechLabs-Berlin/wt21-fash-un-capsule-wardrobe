import React from "react";
import ReactDOM from "react-dom";

import App from "./components/App";

ReactDOM.render(<App />, document.querySelector("#root"));

const cors=require("cors");
const corsOptions ={
   origin:'*', 
   credentials:true,            //access-control-allow-credentials:true
   optionSuccessStatus:200,
}

App.use(cors(corsOptions)) // Use this after the variable declaration
