import Button from "@mui/material/Button";
import {NavLink} from "react-router-dom";
import Typography from "@mui/material/Typography";

export default function BoutiqueConfirmationPaiement(){
    return(
        <>

            {/*if paiement ok */}
                Confirmation Paiement, telecharger facture ....

            <Typography sx={{  color: 'white'}}>Vous pouvez maintenant configurer votre profil commercant pour ensuite deployer votre site</Typography>


            <Button variant="contained" sx={{bgcolor: "black", color: "white", textDecoration: "none"}}>
                <NavLink className="no-deco-link"  to={"/"}>
                    <Typography sx={{  color: 'white'}}>Retourner sur la home page</Typography>
                </NavLink>
            </Button>



            {/*else paiement ko */}
        {/*    Nous avons rencontré un probleme*/}

        </>
    )
}