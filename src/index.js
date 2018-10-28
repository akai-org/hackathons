import React from "react";
import ReactDOM from "react-dom";
import { HackathonsCollector } from "./hackathons-collector/";
import registerServiceWorker from "./registerServiceWorker";

ReactDOM.render(<HackathonsCollector />, document.getElementById("root"));
registerServiceWorker();
