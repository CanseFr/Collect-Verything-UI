import NavBar from "../../../components/nav-bar/NavBar";
import Container from "@mui/material/Container";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import ButtonTextfield from "../../../components/button-textfield/ButtonTextfield";

export default function BoutiqueHome(){
    return(
        <>
            <NavBar/>
            <Container maxWidth={'xl'} sx={{marginTop: '5%'}}>
                <Box sx={{width: '80%', height: '68vh', opacity: '0.5', background: '#EDCBE9', borderRadius: '161px',position: 'absolute',
                    zIndex: '-1'}}>
                </Box>
            </Container>
            <Container sx={{display: 'flex', flexDirection: "raw"}}>
                <Box sx={{display: 'flex', flexDirection: "column", alignItems: "center", justifyContent: "center"}}>
                    <Typography mt={"20px"} variant={'h3'}>La plateforme de commerce internationale</Typography>
                    <Typography mt={"30px"} variant={'subtitle1'}>Créez votre entreprise avec Shopify pour vendre en ligne, hors ligne et partout où se trouvent vos clients.</Typography>
                  <ButtonTextfield/>
                </Box>
                <Box>
                    <img width={'600px'} src={"assets/illustration-top-home.png"}/>
                </Box>
            </Container>
        </>
    )
}