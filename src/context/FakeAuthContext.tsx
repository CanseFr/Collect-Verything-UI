import {createContext, useContext, useReducer, useState} from "react";
import {jwtDecode} from "jwt-decode";

const AuthContext = createContext()

const initialState= {
    user: null,
    isAuthenticated: false,
    name: null,
    token: null,
    avatar: "https://avatars.githubusercontent.com/u/49596442?s=400&u=2b4956d5878a76f9352857c8a1e46d79d2786730&v=4",

}

function reducer(state, action){
    switch (action.type){
        case 'login':
            return {...state, ...action.payload, isAuthenticated: true}
        case 'logout':
            return {...state, user: null, isAuthenticated: false}
        default:
            throw new Error("Unknow action")
    }
}

function AuthProvider({children}){

    const [{user, isAuthenticated, name, avatar, token}, dispatch] = useReducer(reducer, initialState)
    const [ response, setResponse] = useState()
    const [error, setError] = useState(false)

    async function login(email, password) {
        // Vérification initiale des paramètres
        if (!email || !password) {
            console.error("Email or password missing");
            return; // Arrête l'exécution si l'email ou le mot de passe n'est pas fourni.
        }

        const user = {
            email,
            password
        };

        const authObject = {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(user)
        };

        try {
            const response = await fetch('http://localhost:8080/auth/authenticate', authObject);

            if (!response.ok) {
                throw new Error(`HTTP error! Status: ${response.status}`);
            }

            const responseJson = await response.json();

            // Supposant jwtDecode et dispatch sont déjà définis ailleurs dans votre code
            const decoded = jwtDecode(responseJson.token);
            setError(false)
            dispatch({ type: 'login', payload: decoded });
            console.log(decoded); // Considérer la suppression de ce log pour la production
        } catch (error) {
            console.error('Error during login:', error);
            setError(error); // Assurer que setError est défini et gère correctement l'erreur
        }
    }

    function logout(){
        dispatch({type: 'logout'})
    }


    return <AuthContext.Provider value={{user, isAuthenticated, name, avatar, logout, login,error}}>{children}</AuthContext.Provider>
}

function useAuth(){
    const context = useContext(AuthContext)
    if (context === undefined) throw new Error("AuthContext was user outside AuthProvider")
    return context
}

export {AuthProvider, useAuth}