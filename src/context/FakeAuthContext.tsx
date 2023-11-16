import {createContext, useContext, useReducer, useState} from "react";
import {jwtDecode} from "jwt-decode";
import {AuthenticationRequest} from "../types/interface/AuthenticationRequest";

const AuthContext = createContext<any>(null);

const initialState = {
    user: null,
    isAuthenticated: false,
    name: null,
    token: null,
    avatar: "https://avatars.githubusercontent.com/u/49596442?s=400&u=2b4956d5878a76f9352857c8a1e46d79d2786730&v=4",
    role: null
}

function reducer(state: any, action: any) {
    switch (action.type) {
        case 'role':
            console.log('ici')
            console.log(action.payload)
            console.log('ici')
            return {...state, role :action.payload}
        case 'login':
            return {...state, ...action.payload, isAuthenticated: true}
        case 'logout':
            localStorage.clear()
            return {...state, user: null, isAuthenticated: false}
        default:
            throw new Error("Unknow action")
    }
}

function AuthProvider({children}: any) {

    const [{user, isAuthenticated, name, avatar, role}, dispatch] = useReducer(reducer, initialState)
    const [response, setResponse] = useState()
    const [error, setError] = useState<any>(false)

    async function login(email: string, password: string) {
        if (!email || !password) {
            console.error("Email or password missing");
            return;
        }

        let user: AuthenticationRequest = {
            email,
            password
        };

        const authObject = {
            method: 'POST',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify(user)
        };

        try {
            const response = await fetch('http://localhost:8080/auth/authenticate', authObject);

            if (!response.ok) {
                throw new Error(`HTTP error! Status: ${response.status}`);
            }

            const responseJson = await response.json();
            if (responseJson) {
                localStorage.setItem('token', responseJson.token)
            }
            const decoded: any = jwtDecode(responseJson.token);
            setError(false)
            dispatch({type: 'login', payload: decoded});

            dispatch({type: 'role', payload: decoded.authorities[0].authority});
            // console.log(decoded.authorities[0].authority);
        } catch (error) {
            console.error('Error during login:', error);
            setError(error);
        }
    }

    function logout() {
        dispatch({type: 'logout'})
    }


    return <AuthContext.Provider value={{user, isAuthenticated, name, avatar, logout, login, error, role}}>{children}</AuthContext.Provider>
}

function useAuth() {
    const context = useContext(AuthContext)
    if (context === undefined) throw new Error("AuthContext was user outside AuthProvider")
    return context
}

export {AuthProvider, useAuth}