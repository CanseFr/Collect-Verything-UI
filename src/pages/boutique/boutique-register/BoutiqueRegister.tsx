import React, {useState} from 'react';
import Container from "@mui/material/Container";
import Box from "@mui/material/Box";
import {DatePicker} from 'antd';
import {TextField} from "@mui/material";
import Button from "@mui/material/Button";
import {useNavigate} from "react-router-dom";
import Typography from "@mui/material/Typography";
import {AlertFix} from "../../../components/alerts/AlertFix";
import dayjs from "dayjs";

const expression: RegExp = /^(?=.{1,254}$)(?=.{1,64}@)[-!#$%&'*+/0-9=?A-Z^_`a-z{|}~]+(\.[-!#$%&'*+/0-9=?A-Z^_`a-z{|}~]+)*@[A-Za-z0-9]([A-Za-z0-9-]{0,61}[A-Za-z0-9])?(\.[A-Za-z0-9]([A-Za-z0-9-]{0,61}[A-Za-z0-9])?)*$/;

export default function BoutiqueRegister() {
    const [firstname, setFirstname] = useState<string>("")
    const [lastname, setLastname] = useState<string>("")
    const [birthday, setBirthday] = useState<any>("")
    const [email, setEmail] = useState<string>("")
    const [password, setPassword] = useState<string>("")
    const [confirmPassword, setConfirmPassword] = useState<string>("")

    const [error, setError] = useState(false)
    const [errorMessage, setErrorMessage] = useState<any>("")

    const navigate = useNavigate();

    console.log(dayjs(new Date()).subtract(18, 'year'))


    function validateForm() {
        if (!firstname || !lastname || !birthday || !email || !password || !confirmPassword) {
            return 'Vous devez remplir tous les champs';
        }
        if (password.length < 8 || password.length > 15 || confirmPassword.length < 8 || confirmPassword.length > 15) {
            return 'Le mot de passe doit contenir entre 8 et 15 caractères';
        }
        if (password !== confirmPassword) {
            return 'Les mots de passe ne correspondent pas';
        }
        if (firstname.length < 2 || firstname.length > 15 || lastname.length < 2 || lastname.length > 15) {
            return 'Le nom et le prénom doivent comporter entre 2 et 15 caractères';
        }
        if (!expression.test(email)) {
            return 'Votre email est incorrect';
        }
        if (dayjs(birthday).isAfter(dayjs(new Date()).subtract(18, 'year'))) {
            return 'Vous devez avoir plus de 18 ans';
        }
        return '';
    }

    async function handleRegister() {

        const validationError = validateForm();
        if (validationError) {
            setError(true);
            setErrorMessage(validationError);
            return;
        }

        const user = { firstname, lastname, email, password, birthDay: birthday };
        const requestOptions = {
            method: 'POST',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify(user)
        };

        try {
            const response = await fetch('http://localhost:8080/auth/register', requestOptions);
            if (!response.ok) {
                throw new Error('Erreur réseau ou serveur');
            }
            const data = await response.json();
            if (data.token) {
                localStorage.setItem('token', data.token)
            }
            navigate("/");
        } catch (error) {
            setError(true);
            setErrorMessage(error);
        }
    }

    return (

        <>
            {error && <AlertFix children={errorMessage}/>}
            <Container sx={{
                display: 'flex',
                justifyContent: 'center',
                marginTop: '20vh',
                alignItems: 'center',
                boxShadow: '5px 5px 5px #c6c1c1',
                height: '70vh',
                borderRadius: '15px',
                border: '1px solid #dddddd',
            }} maxWidth="sm">

                <Box display={'flex'} flexDirection={'column'} width={'20vw'}>
                    <Typography variant={'h3'} sx={{textAlign: 'center'}}>Inscription</Typography>

                    <TextField sx={{marginTop: '10px'}}
                               value={firstname}
                               onChange={(e) => setFirstname(e.target.value)}
                               label="Nom"
                               id="standard-size-small"
                               size="small"
                               variant="standard"
                               // error={firstname.length < 5 || firstname.length > 15}
                               // helperText={(firstname.length < 5 || firstname.length > 15) && "Le champ doit comporter entre 5 et 15 caracteres"}
                    />


                    <TextField sx={{marginTop: '10px', marginBottom: '10px'}}
                               value={lastname}
                               onChange={(e) => setLastname(e.target.value)}
                               label="Prènom"
                               id="standard-size-small"
                               size="small"
                               variant="standard"
                    />

                    <DatePicker value={birthday} onChange={(date) => setBirthday(date)} placeholder={'Date de naissance'}/>

                    <TextField sx={{marginTop: '10px'}}
                               value={email}
                               onChange={(e) => setEmail(e.target.value)}
                               label="Adresse mail"
                               id="standard-size-small"
                               size="small"
                               variant="standard"
                               type={'email'}
                    />

                    <TextField sx={{marginTop: '10px'}}
                               value={password}
                               onChange={(e) => setPassword(e.target.value)}
                               label="Mot de passe"
                               id="standard-size-small"
                               size="small"
                               variant="standard"
                               type={'password'}
                    />
                    <TextField sx={{marginTop: '10px'}}
                               value={confirmPassword}
                               onChange={(e) => setConfirmPassword(e.target.value)}
                               label="Confirmation mot de passe"
                               id="standard-size-small"
                               size="small"
                               variant="standard"
                               type={'password'}
                    />

                    <Button onClick={handleRegister} variant="contained" sx={{bgcolor: "black", color: "white", textDecoration: "none", marginTop: '20px'}}>
                        <Typography sx={{color: 'white'}}>S'inscrire</Typography>
                    </Button>
                </Box>
            </Container>
        </>

    );

}