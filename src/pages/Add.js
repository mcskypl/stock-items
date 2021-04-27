import React, {useState} from "react";
import { Link } from "react-router-dom";
import * as FirestoreService from '../services/firestore';

const Add = ({currentIndex, database}) => {

    const [newBatch, setNewBatch] = useState([]);
    const [newPlace, setNewPlace] = useState([]);

    const AddFn = () => {
        FirestoreService.db.collection("magazyn")
            .doc('mag4')
            .collection(currentIndex)
            .add({
            batch: newBatch,
            place: newPlace
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
            <h1>Add view</h1>

            Miejsce:
            <input type="text" onChange={e => setNewPlace(e.target.value.toUpperCase())}/>
            Partia:
            <input type="number" onChange={e => setNewBatch(e.target.value)}/>

            <button onClick={AddFn}>Dodaj</button>


            <h3>{currentIndex}</h3>
            {
                database.length === 0 ? <h3>{"Brak danych"}</h3> : database.map(item =>
                    <h3>{item.place} | {item.batch} | <button value={item.id} onClick={deleteData}>USUN</button></h3>)
            }
            <Link to="/">Wróć</Link>

        </>
    )
}

export default Add;
