import React, { useState } from "react";
import * as FirestoreService from "./services/firestore";
import {BrowserRouter as Router, Route, Switch} from "react-router-dom";
import Main from "./pages/Main";
import Login from "./pages/Login";

const App = () => {

    const [user, setUser] = useState('');

    FirestoreService.auth().onAuthStateChanged((user) => {
        if (user) {
            setUser(user);
        } else {
            setUser(null)
        }
    });

    return (
        <>
            <Router>
                <Switch>

                    <Route exac path='/'>
                        {user ? <Main user={user} /> : <Login />}
                    </Route>
                </Switch>
            </Router>
        </>
    );
}

export default App;
