'use client'

import React, { Dispatch, SetStateAction, createContext, useContext } from "react";
interface IUser {
    id:number;
    username: string;
    email: string;
    password: string;
    phone: number;
    postAmount: number;
}
interface IAppContext {
    accessToken:string;
    setAccessToken: (accessToken:string) =>void,
    user:IUser,
    setUser: Dispatch<SetStateAction<IUser>>
}
const appContext = createContext<IAppContext>({
    accessToken: '',
    setAccessToken: (accessToken: string) => { },
    user: {
        id:0,
        username: '',
        email: '',
        password: '',
        phone: 0,
        postAmount: 0
    },
    setUser: (user: {}) => { }
})
export const useAppContext = () => {
    const context = useContext(appContext)
    if (!context) {
        throw new Error('Thiếu app provider')
    }
    return context
}
export default function AppProvider({ children, initAccessToken = '' }: { children: React.ReactNode, initAccessToken?: string },) {
    const [accessToken, setAccessToken] = React.useState(initAccessToken)
    const [user, setUser] = React.useState<IUser>({
        id:0,
        username: '',
        email: '',
        password: '',
        phone: 0,
        postAmount: 0,
    })
    return (
        <appContext.Provider value={{ accessToken, setAccessToken, user, setUser }}>
            {children}
        </appContext.Provider>
    )
}