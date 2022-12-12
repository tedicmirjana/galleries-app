import React, { useState } from "react";
import { authService } from "../services/AuthService";
import useAuth from "../hooks/useAuth.jsx";

export default function LoginPage() {
  const [newUser, setNewUser] = useState({ email: "", password: "" });

  const { user, login } = useAuth();

  const handleOnLogin = async (e) => {
    e.preventDefault();
    try {
      await login(newUser);
    } catch (error) {}
  };
  const handleRefresh = async () => {
    try {
      await authService.refresh();
    } catch (error) {}
  };

  return (
    <div className="App">
      <form onSubmit={handleOnLogin}>
        <input
          required
          type="email"
          name="name"
          value={newUser.email}
          onChange={({ target }) =>
            setNewUser({ ...newUser, email: target.value })
          }
        />
        <input
          required
          type="password"
          value={newUser.password}
          onChange={({ target }) =>
            setNewUser({ ...newUser, password: target.value })
          }
        />
        <button type="submit">Login</button>
      </form>
      <button onClick={handleRefresh}>Refresh</button>
    </div>
  );
}
