import React from "react";
import { Link } from "react-router-dom";
import * as FirestoreService from '../services/firestore';
import './Main.css';

const Search = ({currentIndex, setCurrentIndex, database, setDatabase}) => {

    const snapData = (e) => {
        let inputValue = e.target.value.toUpperCase();
        setCurrentIndex(inputValue);
        if (inputValue !== '') {
            FirestoreService.db
                .collection('magazyn')
                .doc('mag4')
                .collection(inputValue)
                .onSnapshot(snapshot => {
                    if (snapshot.size) {
                        const tmp = [];
                        snapshot.forEach(doc => {
                            tmp.push({id: doc.id, ...doc.data()})
                        })
                        setDatabase(tmp);
                    } else {
                        setDatabase([]);
                    }
                })
        }
    }

    const deleteData = (e) => {
        FirestoreService.db.collection("magazyn").doc("mag4").collection(currentIndex).doc(e.target.value).delete().then(() => {
            console.log("Document successfully deleted!");
        }).catch((error) => {
            console.error("Error removing document: ", error);
        });
    }

    return(
        <>
            <label htmlFor="searchDb" className="form-label">Index</label>
            <input type="text" className="form-control" id="searchDb" onChange={snapData} value={currentIndex} />
            <div className="d-grid gap-2">
                <button className="btn btn-outline-secondary" onClick={() => {
                    setCurrentIndex('')
                    setDatabase([])
                }}>Wyczyść
                </button>
            </div>

            {database.length === 0 ? '' : <div><h2 className='text-center'>{currentIndex}</h2> <hr/></div>}
            {
                database.length === 0 ? <h3 className='text-center'>{"Brak danych"}</h3> : database.map(item =>
                    <h3 className='flexItems'>
                        <div>{item.place}</div>
                        <div>{item.batch}</div>
                        <button className='btn btn-danger' value={item.id} onClick={deleteData}>USUN</button>
                    </h3>)
            }

            {currentIndex === '' ? '' :
                <div className="d-grid gap-2">
                    <Link class="btn btn-success" to="/add">Dodaj</Link>
                </div>
            }

        </>
    )
}

export default Search;
