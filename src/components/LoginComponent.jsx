import React from "react";
import classes from "./AddGallery.module.css";

export default function LoginComponent({ handleOnLogin, newUser, setNewUser }) {

    return (
        <div>
            <form className={classes.form} onSubmit={handleOnLogin}>
                <label htmlFor="email">Email:</label>
                <input className={classes.control}
                    required
                    type="email"
                    value={newUser.email}
                    onChange={({ target }) => setNewUser({ ...newUser, email: target.value })}
                />
                <label htmlFor="password">Password:</label>
                <input className={classes.control}
                    required
                    type="password"
                    value={newUser.password}
                    onChange={({ target }) =>
                        setNewUser({ ...newUser, password: target.value })
                    }
                />
                <button type="submit">login</button>
            </form>
        </div>
    );
}