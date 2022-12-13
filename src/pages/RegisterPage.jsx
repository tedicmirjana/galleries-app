// import React from "react";

// export default function RegisterPage() {
//     return (
//         <div>
//             <h1>Register Page</h1>
//         </div>
//     );
// }

import React, { useState } from "react";
import RegisterComponent from "../components/RegisterComponent";
import { useHistory } from "react-router-dom";
import { authService } from "../services/AuthService";

export default function RegisterPage() {
    const [newUser, setNewUser] = useState({ name: '', email: '', password: '' });
    const history = useHistory();

    const handleOnRegisterU = async (e) => {
        e.preventDefault();
        const response = await authService.register(newUser);
        if (response) {
            alert('Registration successful.');
            history.push("/login");
        }
    };

    return (
        <RegisterComponent
            handleOnRegister={handleOnRegisterU}
            newUser={newUser}
            setNewUser={setNewUser}
        />
    )

}