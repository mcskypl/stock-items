import React from 'react';
import userIcon from '../icons/user.svg'
import {Link} from "react-router-dom";
import * as FirestoreService from "../services/firestore";

const TopBar = ({user}) => {

    const logoutFn = () => {
        FirestoreService.auth().signOut().then(() => {
            console.log('Wylogowano')
        }).catch((error) => {
            // An error happened.
        });
    }

    return (
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
            <div className="container-fluid">
                <Link className="navbar-brand" to='/'>
                    <img src={userIcon} alt="User"/> {user.displayName}
                </Link>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarText"
                        aria-controls="navbarText" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarText">
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                        <li className="nav-item">
                            <Link to='/updates' className="nav-link">Aktualizacje</Link>
                        </li>
                        <li className="nav-item">
                            <Link to='/user' className="nav-link">Użytkownik</Link>
                        </li>
                        <li className="nav-item">
                            <Link to='/' className="nav-link" onClick={logoutFn}>Wyloguj się</Link>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    )
}

export default TopBar;