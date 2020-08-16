import React from 'react';
import ReactDom from 'react-dom';
import {BrowserRouter} from 'react-router-dom';
import "../styles/styles.scss"
import { Provider } from "react-redux";
import store from "../lib/redux/store";

import Wireframe from './components/Wireframe/Wireframe'


ReactDom.render(<BrowserRouter>
        <Provider store={store}>
            <Wireframe/>
        </Provider>
    </BrowserRouter>, document.getElementById('root'))