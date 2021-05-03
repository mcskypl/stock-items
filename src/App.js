import React, { useState } from "react";
import {BrowserRouter as Router, Switch, Route} from "react-router-dom";
import './App.css';
import Search from "./pages/Search";
import Add from "./pages/Add";
import Updates from './pages/Updates';
import TopBar from "./components/TopBar";

const App = () => {

    const [currentIndex, setCurrentIndex] = useState('');
    const [database, setDatabase] = useState([]);

    return (
        <>


            <Router>
                <TopBar />
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
                </Switch>
                </div>
            </Router>
        </>
    );
}

export default App;
