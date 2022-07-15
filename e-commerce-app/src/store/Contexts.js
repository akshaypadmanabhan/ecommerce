import { createContext, useState} from "react"

export const AuthContext=createContext(null)

export default function Context ({children}){
    const [user,setUser]=useState()


    return(
        <AuthContext.Provider value={{user}}>
            {children}
        </AuthContext.Provider>
    )
}