import React from "react";
import { Link } from "react-router-dom";
import * as FirestoreService from '../services/firestore';

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
            <h1>Main view</h1>
            <input onChange={snapData} value={currentIndex}/>
            <button onClick={() => {
                setCurrentIndex('')
                setDatabase([])
            }}>Wyczyść</button>
            {database.length === 0 ? '' : <h2>{currentIndex}</h2>}
            <Link to="/add">Dodaj</Link>
            {
                database.length === 0 ? <h3>{"Brak danych"}</h3> : database.map(item =>
                    <h3>{item.place} | {item.batch} | <button value={item.id} onClick={deleteData}>USUN</button></h3>)
            }
        </>
    )
}

export default Search;
