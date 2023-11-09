import Button from "@mui/material/Button";
import {NavLink} from "react-router-dom";
import NavBar from "../../../components/nav-bar/NavBar";
import Typography from "@mui/material/Typography";

export default function BoutiqueConsulterSolution(){
    return(
        <>
            <NavBar/>
            <p>
            curabitur orci enim ponderum scripserit iudicabit ornare eleifend maiestatis vituperata urbanitas ancillae semper convenire neque persius vituperatoribus ligula mattis meliore voluptatum harum quot vivendo moderatius suas sanctus an menandri tincidunt viverra sea sagittis neque disputationi sonet usu ponderum legimus signiferumque quaeque saperet atomorum intellegat repudiandae dictum dignissim facilisi suscipiantur conubia
            </p>

            <Button variant="contained" sx={{bgcolor: "black", color: "white", textDecoration: "none"}}>
                <NavLink className="no-deco-link"  to={"/paiement"}>
                    <Typography sx={{  color: 'white'}}>Commencer Maintenant</Typography>
                </NavLink>
            </Button>
        </>
    )
}