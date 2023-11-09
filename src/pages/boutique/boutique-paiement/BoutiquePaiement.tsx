import NavBar from "../../../components/nav-bar/NavBar";
import Button from "@mui/material/Button";
import {NavLink} from "react-router-dom";
import Typography from "@mui/material/Typography";
import {MDBBtn, MDBCard, MDBCardBody, MDBCol, MDBContainer, MDBIcon, MDBRadio, MDBRow} from "mdb-react-ui-kit";

export default function BoutiquePaiement() {
    return (
        <>
            <NavBar/>

            RAPPEL DE L'OFFRE Option etc
            Implementer un forlaularie avant cette page de configuration domaine etc

            <Button variant="contained" sx={{bgcolor: "black", color: "white", textDecoration: "none"}}>
                <NavLink className="no-deco-link" to={"/statutpaiement"}>
                    <Typography sx={{color: 'white'}}>Payer</Typography>
                </NavLink>
            </Button>
        </>
    )
}