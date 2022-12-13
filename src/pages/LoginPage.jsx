import React, { useState } from "react";
import LoginComponent from "../components/LoginComponent";
import { useHistory } from "react-router-dom";
import { authService } from "../services/AuthService";
import useAuth from "../hooks/useAuth";

export default function LoginPage() {
    const [newUser, setNewUser] = useState({ email: "", password: "" });
    const { user, login } = useAuth();

    const history = useHistory();

    const handleSubmitForm = async (e) => {
        e.preventDefault();
        await login(newUser);
        history.push("/galleries");
    };
    return <LoginComponent
        handleOnLogin={handleSubmitForm}
        newUser={newUser}
        setNewUser={setNewUser} />;
    }
