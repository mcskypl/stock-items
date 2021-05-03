import React from 'react';
import DeleteItem from "./DeleteItem";
import UpdateItem from "./UpdateItem";

const ListItems = ({database, currentIndex, setCurrentId}) => {


    return (
        <>
            {
                database.length === 0 ? <h3 className='text-center'>{"Brak danych 😴"}</h3> : database.map(item =>
                    <div className='flexItems'>
                        <div>{item.itemPlace}</div>
                        <div>{item.itemBatch}</div>
                        <div>
                            <div>
                                <DeleteItem
                                    currentIndex={currentIndex}
                                    itemId={item.id}
                                />
                            </div>
                            <div>
                                <UpdateItem
                                    currentIndex={currentIndex}
                                    itemId={item.id}
                                />
                            </div>
                        </div>
                    </div>)
            }
        </>
    )
}

export default ListItems;