import NavBar from "../../../components/nav-bar/NavBar";
import Container from "@mui/material/Container";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import {NavLink} from "react-router-dom";

export default function BoutiqueHome(){
    return(
        <>
            <NavBar/>
            <Container maxWidth={'xl'} sx={{marginTop: '5%'}}>
                <Box sx={{width: '90%', height: '68vh', opacity: '0.5', background: '#EDCBE9', borderRadius: '161px',position: 'absolute',
                    zIndex: '-1'}}>
                </Box>
            </Container>

            <Container sx={{display: 'flex', flexDirection: "raw"}}>
                <Box sx={{display: 'flex', flexDirection: "column", alignItems: "center", justifyContent: "center"}}>
                    <Typography mt={"20px"} variant={'h3'}>La plateforme de commerce internationale</Typography>
                    <Typography mt={"30px"} variant={'p'}>Créez votre entreprise avec Shopify pour vendre en ligne, hors ligne et partout où se trouvent vos clients.</Typography>
                    <Button  variant="contained" sx={{marginTop: "30px", bgcolor: "black", color: "white", textDecoration: "none", width: "200px"}}>
                        <NavLink to={'/solution'}>
                            <Typography className={'no-deco-link'} sx={{  color: 'white'}}>Demarer un essai </Typography>
                        </NavLink>
                    </Button>
                </Box>
                <Box>
                    <img width={'600px'} src={"assets/illustration-top-home.png"}/>
                </Box>
            </Container>
        </>
    )
}