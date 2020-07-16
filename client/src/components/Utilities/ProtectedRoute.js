// Source: https://codesandbox.io/s/ol6z72kjy9 the youtube video for this
// source: https://www.youtube.com/watch?v=Y0-qdp-XBJg

import React from "react";
import {Route, Redirect} from "react-router-dom";
//import auth from "./auth";

export const ProtectedRoute = ({
    component: Component,
    ...rest
}) => {
    return (
        <Route
            {...rest}
            render={props => {
            if (true) {
                return <Component {...props}/>;
            } else {
                return (<Redirect
                    to={{
                    pathname: "/",
                    state: {
                        from: props.location
                    }
                }}/>);
            }
        }}/>
    );
};