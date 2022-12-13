import React, { useState } from "react";
import RegisterComponent from "../components/RegisterComponent";
import { useHistory } from "react-router-dom";
import { authService } from "../services/AuthService";

export default function RegisterPage() {
    const [newUser, setNewUser] = useState({ first_name: '', last_name: '', email: '', password: '' });
    const history = useHistory();

     const handleOnRegisterU = async (e) => {
        e.preventDefault();
        console.log(newUser)
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