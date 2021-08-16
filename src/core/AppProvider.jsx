import React, { useEffect, useState } from "react";
import {
    BrowserRouter as Router, Redirect, useHistory,
} from "react-router-dom";


// import {createBrowserHistory} from 'history'

// let browserHistory = createBrowserHistory()

export let Context = React.createContext()
function Provider({ children }) {
    return (
        // <Context.Provider value={}>
        //         {children}
        // </Context.Provider>
        <Context.Provider value={null}>
            {children}
        </Context.Provider>
    );
}

export default function AppProvider({ children }) {
    return <Router>
        <Provider>
            {children}
        </Provider>
    </Router>
}