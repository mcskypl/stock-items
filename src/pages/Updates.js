import React from "react";

import './Main.css';
import {Link} from "react-router-dom";

const Updates = () => {
    return(
        <>
            <h1>Aktualizacje 👀</h1>
            <hr/>

            <div className="list-group">
                <span className="list-group-item list-group-item-action" aria-current="true">
                    <div className="d-flex w-100 justify-content-between">
                        <h5 className="mb-1">1.1.0</h5>
                        <small>05.05.2021</small>
                    </div>
                    <div><small>- Dodanie opcji logowania</small></div>
                    <div><small>- Zakładka z informacjami o użytkowniku</small></div>
                    <div><small>- Aktualizacja zabezpieczeń</small></div>
                </span>
            </div>

            <br/>

            <div className="list-group">
                <span className="list-group-item list-group-item-action" aria-current="true">
                    <div className="d-flex w-100 justify-content-between">
                        <h5 className="mb-1">1.0.3</h5>
                        <small>05.05.2021</small>
                    </div>
                    <div><small>- Dodanie panelu nawigacji</small></div>
                    <div><small>- Aktualizacja zabezpieczeń</small></div>
                </span>
            </div>

            <br/>

            <div className="list-group">
                <span className="list-group-item list-group-item-action" aria-current="true">
                    <div className="d-flex w-100 justify-content-between">
                        <h5 className="mb-1">1.0.2</h5>
                        <small>29.04.2021</small>
                    </div>
                    <div><small>- Aktualizacja przycisku usuwania pozycji</small></div>
                    <div><small>- Dodanie zakładki z listami zmian</small></div>
                </span>
            </div>

            <br/>

            <div className="d-grid gap-2">
                <Link to='/' className="btn btn-outline-secondary">Powrót</Link>
            </div>
        </>
    )
}

export default Updates;
