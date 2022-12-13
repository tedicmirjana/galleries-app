import React from "react";
import { Route, Switch, Redirect} from "react-router-dom";

import useAuth from "./hooks/useAuth";

import RegisterPage from "./pages/RegisterPage";
import LoginPage from "./pages/LoginPage";
import Galleries from "./pages/Galleries";
import AddGallery from "./pages/AddGalleries";


const AuthRoute = ({ children, ...rest }) => {
    const { user } = useAuth();
    return <Route {...rest}> {user ? children : <Redirect to='/login' />}</Route>;
}
const GuestRoute = ({ children, ...rest }) => {
    const { user } = useAuth();
    return <Route {...rest}>{user ? <Redirect to='/galleries' /> : children}</Route>;
}

function Router() {
    return (
        <div className="App">
            <Switch>
                <AuthRoute path='/' exact>
                    <Redirect to='/login'></Redirect>
                </AuthRoute>
                <AuthRoute path='/galleries' exact>
                    <AppGallery />
                </AuthRoute>
                <AuthRoute path='/galleries/:id'>
                    <SingleCarPage />
                </AuthRoute>
                <AuthRoute path='/add'>
                    <AddGallery />
                </AuthRoute>
                {/* <AuthRoute exact path='/edit/:id'>
                    <AddCar />
                </AuthRoute> */}
                <GuestRoute path='/login' exact>
                    <Login />
                </GuestRoute>
                <GuestRoute path='/register' exact>
                    <Register />
                </GuestRoute>
            </Switch>
        </div>
    );
}





// export default function Router() {
//     return (
//         <Switch>
//             <GuestRoute path="/login">
//                 <LoginPage />
//             </GuestRoute>
//             <GuestRoute path="/register">
//                 <RegisterPage />
//             </GuestRoute>
//             <AuthRoute path="/galleries">
//                 <Galleries />
//             </AuthRoute>
//         </Switch>
//     )
    
// }

