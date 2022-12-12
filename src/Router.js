import React from "react";
import { Route, Switch, Redirect} from "react-router-dom";

import useAuth from "./hooks/useAuth";

import RegisterPage from "./pages/RegisterPage";
import LoginPage from "./pages/LoginPage";
import Galleries from "./pages/Galleries";


const AuthRoute = ({ children, ...rest }) => {
    const { user } = useAuth();
    return <Route {...rest}> {user.name ? children : <Redirect to='/login' />}</Route>
}
const GuestRoute = ({ children, ...rest }) => {
    const { user } = useAuth();
    return <Route {...rest}>{user.name ? <Redirect to='/galleries' /> : children}</Route>
}

export default function Router() {
    return (
        <Switch>
            <GuestRoute path="/login">
                <LoginPage />
            </GuestRoute>
            <GuestRoute path="/register">
                <RegisterPage />
            </GuestRoute>
            <AuthRoute path="/galleries">
                <Galleries />
            </AuthRoute>
        </Switch>
    )
}

