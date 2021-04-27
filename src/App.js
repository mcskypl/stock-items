import React, { useState } from "react";
import {BrowserRouter as Router, Switch, Route} from "react-router-dom";
import Search from "./pages/Search";
import Add from "./pages/Add";

const App = () => {

    const [currentIndex, setCurrentIndex] = useState('');
    const [database, setDatabase] = useState([]);

    return (
        <Router>
            <>
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
                </Switch>
            </>
        </Router>
    );
}

export default App;
