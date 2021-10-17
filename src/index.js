import { render } from "@testing-library/react";
import React from "react";
import reactDom from "react-dom";

import App from "./components/App";

reactDom.render(<App/>,document.querySelector('#root'))
