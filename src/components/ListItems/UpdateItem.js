import React from 'react';
import {Link} from "react-router-dom";
import updateIcon from '../../icons/edit.svg';

const UpdateItem = ({itemId, currentIndex}) => {




    return (
        <>
            <button
                className='btn btn-outline-danger'
                value={itemId}
                abc='ok'>
                <img src={updateIcon} />
            </button>
        </>
    )
}

export default UpdateItem;