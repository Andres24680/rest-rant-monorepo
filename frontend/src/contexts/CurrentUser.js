import { createContext, useState } from "react";


export const CurrentUser = createContext()

function CurrentUserProvider({ children }){

    const [currentUser, setCurrentUser] = useState(null)
<<<<<<< Updated upstream
=======
    useEffect(() => {

        const getLoggedInUser = async () => {
            let response = await fetch('http://localhost:5001/authentication/profile')
            let user = await response.json()
            setCurrentUser(user)
        }
        getLoggedInUser()
    }, [])
  


>>>>>>> Stashed changes

    return (
        <CurrentUser.Provider value={{ currentUser, setCurrentUser }}>
            {children}
        </CurrentUser.Provider>
    )
}

export default CurrentUserProvider