// // import React, { useState } from "react";
// import { authService } from "../services/AuthService";
// import useAuth from "../hooks/useAuth.jsx";

// export default function LoginPage() {
//   const [newUser, setNewUser] = useState({ email: "", password: "" });

//   const { user, login } = useAuth();

//   const handleOnLogin = async (e) => {
//     e.preventDefault();
//     try {
//       await login(newUser);
//     } catch (error) {}
//   };
//   const handleRefresh = async () => {
//     try {
//       await authService.refresh();
//     } catch (error) {}
//   };

//   return (
//     <div className="App">
//       <form onSubmit={handleOnLogin}>
//         <input
//           required
//           type="email"
//           name="name"
//           value={newUser.email}
//           onChange={({ target }) =>
//             setNewUser({ ...newUser, email: target.value })
//           }
//         />
//         <input
//           required
//           type="password"
//           value={newUser.password}
//           onChange={({ target }) =>
//             setNewUser({ ...newUser, password: target.value })
//           }
//         />
//         <button type="submit">Login</button>
//       </form>
//       <button onClick={handleRefresh}>Refresh</button>
//     </div>
//   );
// }

// import React, { useState }from "react";
// import { useDispatch } from "react-redux";
// import { authService } from "../services/AuthService";
// import useAuth from "../hooks/useAuth.jsx";
// import LoginComponent from '../components/LoginComponent';
// import { useHistory } from "react-router-dom";


// export default function Login(){
//     const dispatch = useDispatch();
//     const history = useHistory();
//     const [credentials, setCredentials] = useState({
//         email: "",
//         password: ""
//     });

//     function handleOnLogin(e) {
//         e.preventDefault();
//         dispatch(login(credentials));
//         console.log('Success!');
//         history.push('/galleries')
//     }


//     return <LoginComponent
//         handleOnLogin={handleOnLogin}
//         credentials={credentials}
//         setCredentials={setCredentials} />;
// }


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
