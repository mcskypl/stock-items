import React, {useState} from "react";
import { Link } from "react-router-dom";
import * as FirestoreService from '../services/firestore';
import './Main.css';

const Add = ({currentIndex, database}) => {

    const [newBatch, setNewBatch] = useState([]);
    const [newPlace, setNewPlace] = useState([]);

    const AddFn = () => {
        FirestoreService.db.collection("magazyn")
            .doc('mag4')
            .collection(currentIndex)
            .add({
                itemBatch: newBatch,
                itemPlace: newPlace
            })
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
            <h1 className='text-center'>{currentIndex}</h1>
            <hr/>

            <label htmlFor="place" className="form-label">Miejsce</label>
            <input className="form-control" id="place" type="text" onChange={e => setNewPlace(e.target.value.toUpperCase())} />
            <input className="form-control" id="place" type="text" onChange={e => setNewPlace(e.target.value.toUpperCase())} required />

            <label htmlFor="batch" className="form-label">Partia</label>
            <input className="form-control" id="batch" type="number" onChange={e => setNewBatch(e.target.value)} />
            <input className="form-control" id="batch" type="number" onChange={e => setNewBatch(e.target.value)} required />

            <div className="d-grid gap-2">
                <button className='btn btn-success' onClick={AddFn}>Dodaj</button>
            </div>

            {
                database.length === 0 ? <h3 className='text-center'>{"Brak danych"}</h3> : database.map(item =>
                    <h3 className='flexItems'>
                        <div>{item.itemPlace}</div>
                        <div>{item.itemBatch}</div>
                        <button className='btn btn-danger' value={item.id} onClick={deleteData}>USUN</button>
                    </h3>)
            }
            <Link className="btn btn-secondary" to="/">Wróć</Link>

        </>
    )
}

export default Add;