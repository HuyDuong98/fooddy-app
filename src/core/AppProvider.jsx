import React, { useEffect, useState } from "react";
import {
    BrowserRouter as Router, Redirect, useHistory,
} from "react-router-dom";


// import {createBrowserHistory} from 'history'

// let browserHistory = createBrowserHistory()

export let Context = React.createContext()
function Provider({ children }) {
    //Toggle modal cart
    const [showCart, setShowCart] = useState(false);
    const toggleDrawer = (open) => (event) => {
        if (event && event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
            return;
        }

        setShowCart(open);
    };

    return (
        <Context.Provider value={{ showCart, toggleDrawer }}>
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