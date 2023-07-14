import { createContext, useState } from 'react';

const authContext = createContext();

function AuthProvider({ children }) {
    const [openAuth, setOpenAuth] = useState(false);
    return <authContext.Provider value={[openAuth, setOpenAuth]}>{children}</authContext.Provider>;
}

export { authContext };
export default AuthProvider;
