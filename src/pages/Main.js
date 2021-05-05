import React, { useState } from "react";
import {BrowserRouter as Router, Switch, Route} from "react-router-dom";
import '../App.css'
import Search from "../pages/Search";
import Add from "../pages/Add";
import Updates from '../pages/Updates';
import TopBar from "../components/TopBar";
import UserInfo from "./UserInfo";

const App = ({user}) => {

    const [currentIndex, setCurrentIndex] = useState('');
    const [database, setDatabase] = useState([]);

    return (
        <>
            <Router>
                <TopBar user={user} />
                <div className='container'>
                    <Switch>
                        <Route exact path="/">
                            <Search
                                currentIndex={currentIndex}
                                setCurrentIndex={setCurrentIndex}
                                database={database}
                                setDatabase={setDatabase}
                            />
                        </Route>
                        <Route exact path="/add">
                            <Add
                                currentIndex={currentIndex}
                                setCurrentIndex={setCurrentIndex}
                                database={database}
                                setDatabase={setDatabase}
                            />
                        </Route>
                        <Route exact path="/updates">
                            <Updates />
                        </Route>
                        <Route exact path="/user">
                            <UserInfo user={user} />
                        </Route>
                    </Switch>
                </div>
            </Router>
        </>
    );
}

export default App;
