'use client'

import React, { createContext, useContext } from "react";

const appContext = createContext({
    accessToken: '',
    setAccessToken : (accessToken:string) => {},
})
export const useAppContext = () =>{
    const context = useContext(appContext)
    if(!context){
        throw new Error('Thiếu app provider')
    }
    return context
}
export default function AppProvider({ children,initAccessToken='' }: { children: React.ReactNode,initAccessToken?:string },) {
    const [accessToken, setAccessToken] = React.useState(initAccessToken)
    return (
        <appContext.Provider value={{ accessToken, setAccessToken }}>
            {children}
        </appContext.Provider>
    )
}