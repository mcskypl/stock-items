import React, {useState} from "react";
import { Link } from "react-router-dom";
import * as FirestoreService from '../services/firestore';
import './Main.css';
import ListItems from "../components/ListItems/ListItems";

const Add = ({currentIndex, database}) => {

    const [newBatch, setNewBatch] = useState([]);
    const [newPlace, setNewPlace] = useState([]);
    const [deleteIndex, setDeleteIndex] = useState([]);

    const AddFn = () => {
        FirestoreService.db.collection("magazyn")
            .doc('mag4')
            .collection(currentIndex)
            .add({
            itemBatch: newBatch,
            itemPlace: newPlace
        })
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
            <h1 className='text-center'>{currentIndex}</h1>
            <hr/>

            <label htmlFor="place" className="form-label">Miejsce</label>
            <input required className="form-control" id="place" type="text" onChange={e => setNewPlace(e.target.value.toUpperCase())} autoComplete="off" />

            <label htmlFor="batch" className="form-label">Partia</label>
            <input required className="form-control" id="batch" type="number" onChange={e => setNewBatch(e.target.value)} autoComplete="off" />

            <div className="d-grid gap-2">
                <button className='btn btn-success' onClick={AddFn}>Dodaj</button>
            </div>

            <ListItems
                database={database}
                currentIndex={currentIndex}
            />

            <Link className="btn btn-secondary" to="/">Wróć</Link>

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

export default Add;
