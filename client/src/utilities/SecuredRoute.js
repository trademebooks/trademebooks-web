import React from "react";
import {Route, Redirect} from "react-router-dom";
import {connect} from "react-redux";
import PropTypes from "prop-types";

const SecuredRoute = ({component: Component, security, ...otherProps}) => (
    <Route
        {...otherProps}
        render={props => {
            if (localStorage.getItem("tmb_jwt")/*security.validToken === true*/) {
                return <Component {...props} />
            } else {
                return <Redirect to="/login"/>
            }
        }
        }
    />
);

SecuredRoute.propTypes = {
    security: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
    security: state.security
});

export default connect(mapStateToProps)(SecuredRoute);
