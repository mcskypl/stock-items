import React from 'react';

const UserInfo = ({user}) => {
    return (
        <>
            <h6>Użytkownik: {user.displayName}</h6>
            <h6>Email: {user.email}</h6>
            <h6>Ostatnie logowanie: {user.metadata.creationTime}</h6>
        </>
    );
};

export default UserInfo;
