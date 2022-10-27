import React, { createContext } from 'react';

export const AuthContext = createContext();

const UserContext = ({ children }) => {
    const user = { displayName: 'ali' }

    const atuhInfo = { user: user }

    return (
        <AuthContext.Provider value={atuhInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default UserContext;