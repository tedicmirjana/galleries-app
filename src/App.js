// imporet React, { useState } from "react"; 
// import React from 'react';
// import './App.css';

// function App() {
//   return (
//     <div className="App">

//     </div>
//   );
// }

// export default App;

import React, { useState } from "react";
import { authService } from "./services/AuthService";
import "./App.css";

function App() {
  const [user, setUser] = useState({ email: "", password: "" });

  const handleOnLogin = async (e) => {
    e.preventDefault();
    await authService.login(user);
  };
  const handleRefresh = async () => {
    await authService.refresh();
  };

  return (
    <div className="App">
      <form onSubmit={handleOnLogin}>
        <input
          required
          type="email"
          name="name"
          value={user.email}
          onChange={({ target }) => setUser({ ...user, email: target.value })}
        />
        <input
          required
          type="password"
          value={user.password}
          onChange={({ target }) =>
            setUser({ ...user, password: target.value })
          }
        />
        <button type="submit">Login</button>
      </form>
      <button onClick={handleRefresh}>Refresh</button>
    </div>
  );
}

export default App;

