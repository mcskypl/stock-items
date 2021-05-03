import React from 'react';
import deleteIcon from "../../icons/delete.svg";
import * as FirestoreService from "../../services/firestore";

const DeleteItem = ({itemId, currentIndex}) => {

    const deleteData = (e) => {
        FirestoreService.db.collection("magazyn").doc("mag4").collection(currentIndex).doc(e.target.value).delete().then(() => {
            console.log("Document successfully deleted!");
        }).catch((error) => {
            console.error("Error removing document: ", error);
        });
    }

    return (
        <>
            <button
                className='btn btn-outline-danger'
                value={itemId}
                onClick={deleteData}>
                <img src={deleteIcon} />
            </button>
        </>
    )
}

export default DeleteItem;