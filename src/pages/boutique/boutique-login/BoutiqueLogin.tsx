import {useEffect, useState} from "react";
import styles from "./BoutiqueLogin.module.css";
import {useNavigate} from "react-router-dom";
import {useAuth} from "../../../context/FakeAuthContext";
import Button from "@mui/material/Button";
import LoopBanner from "../../../components/loop-banner/LoopBanner";
import {LoopBanType} from "../../../types/enum/LoopBanType";
import {LoopBanChildren} from "../../../types/enum/LoopBanChildren";


export default function BoutiqueLogin(){

    const [email, setEmail] = useState("canse@canse.canse");
    const [password, setPassword] = useState("testtesttest");

    const {login, isAuthenticated,error} = useAuth()
    const navigate = useNavigate()

    function handleSubmit(e:any){
        e.preventDefault()
        if(email && password) login(email,password)
    }

    useEffect(() => {
        if(isAuthenticated) navigate("/app", {replace: true})
    }, [isAuthenticated,navigate]);

    return(
        <>
            <main className={styles.login}>
                { error !== false && <LoopBanner type={LoopBanType.WAR} children={LoopBanChildren.WRONGPASSORMAIL}/>}
                <form className={styles.form} >
                    <div className={styles.row}>
                        <label htmlFor="email">Email address</label>
                        <input
                            type="email"
                            id="email"
                            onChange={(e) => setEmail(e.target.value)}
                            value={email}
                        />
                    </div>

                    <div className={styles.row}>
                        <label htmlFor="password">Password</label>
                        <input
                            type="password"
                            id="password"
                            onChange={(e) => setPassword(e.target.value)}
                            value={password}
                        />
                    </div>

                    <div>
                        <Button onClick={handleSubmit} type="button">Login</Button>
                    </div>
                </form>
            </main>
        </>
    )
}