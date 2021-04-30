import React, {useState} from "react";
import { Link } from "react-router-dom";
import * as FirestoreService from '../services/firestore';
import './Main.css';

const Search = ({currentIndex, setCurrentIndex, database, setDatabase}) => {

    const [deleteIndex, setDeleteIndex] = useState([]);

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

    const deleteDataModal = (e) => {
        setDeleteIndex(e.target.value);
    }


    const deleteData = () => {
        FirestoreService.db.collection("magazyn").doc("mag4").collection(currentIndex).doc(deleteIndex).delete().then(() => {
            console.log("Document successfully deleted!");
        }).catch((error) => {
            console.error("Error removing document: ", error);
        });
    }

    return(
        <>
            <label htmlFor="searchDb" className="form-label">Index</label>
            <input type="text" className="form-control" id="searchDb" onChange={snapData} value={currentIndex} autoComplete="off" />
            <div className="d-grid gap-2">
                <button className="btn btn-outline-secondary" onClick={() => {
                    setCurrentIndex('')
                    setDatabase([])
                }}>Wyczyść
                </button>
            </div>

            {database.length === 0 ? '' : <div><h2 className='text-center'>{currentIndex}</h2> <hr/></div>}
            {
                database.length === 0 ? <h3 className='text-center'>{"Brak danych 😴"}</h3> : database.map(item =>
                    <h3 className='flexItems'>
                        <div>{item.itemPlace}</div>
                        <div>{item.itemBatch}</div>
                        <button
                            className='btn btn-danger'
                            value={item.id}
                            data-bs-toggle="modal"
                            data-bs-target="#exampleModal"
                            onClick={deleteDataModal}>
                            USUN
                        </button>
                    </h3>)
            }

            {currentIndex === '' ? '' :
                <div className="d-grid gap-2">
                    <Link className="btn btn-success" to="/add">Dodaj</Link>
                </div>
            }

            <div className="modal fade" id="exampleModal" tabIndex="-1" aria-labelledby="exampleModalLabel"
                 aria-hidden="true">
                <div className="modal-dialog">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h5 className="modal-title" id="exampleModalLabel">CZY NA PEWNO CHCESZ USUNĄĆ {currentIndex}? 🤔</h5>
                            <button type="button" className="btn-close" data-bs-dismiss="modal"
                                    aria-label="Close"></button>
                        </div>
                        <div className="modal-footer">
                            <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">NIE</button>
                            <button type="button" className="btn btn-danger" data-bs-dismiss="modal" onClick={deleteData}>USUŃ</button>
                        </div>
                    </div>
                </div>
            </div>

        </>
    )
}

export default Search;
