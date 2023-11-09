import NavBar from "../../../components/nav-bar/NavBar";
import {Grid} from "@mui/material";
import Typography from "@mui/material/Typography";
import Compact from "@uiw/react-color-compact";
import {useState} from "react";
import Button from "@mui/material/Button";



export default function UserAccount(){

    const [hex, setHex] = useState("#fff");

    let theme = {
        "primaryColor" : "jj"
    }

    function handleSendValue(){
        theme.primaryColor = hex
        const requestOptions = {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(theme)
        };
        // fetch('http://localhost:8080/script/', requestOptions)
        //     .then(response => response.json())
        //     .then(data => console.log(data));

        fetch('http://localhost:8080/script/allBuild')
            .then(response => response.json())
            .then(data => console.log(data));

    }

    return(
        <>
            <NavBar/>

        {/*    IF compte non configuré */}

            <Grid container spacing={2} mt={30}>
                <Grid item xs={3}>
                    <Typography>Couleur primaire du theme : </Typography>
                </Grid>
                <Grid item xs={3}>
                    <Compact
                        color={hex}
                        onChange={(color) => {
                            setHex(color.hex);
                        }}
                    />
                </Grid>
            </Grid>

            <Button onClick={handleSendValue} variant="contained" sx={{bgcolor: "black", color: "white", textDecoration: "none"}}>
                    <Typography sx={{  color: 'white'}}>Valider le theme </Typography>
            </Button>

            {/*    else compte  configuré */}

                {/*   Info Vu du site     */}
        </>
    )
}