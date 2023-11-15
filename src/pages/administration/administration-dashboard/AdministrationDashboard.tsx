import {NavBarAdmin} from "../../../components/nav-bar/NavBarAdmin";
import Box from "@mui/material/Box";
import {Outlet} from "react-router-dom";
import Container from "@mui/material/Container";


export default function AdministrationDashboard(){
    return(
        <>
            <Box style={{display: 'flex', flexDirection: 'row'}}>
                <NavBarAdmin/>
                <Container maxWidth='xl'>
                    <Outlet/>
                </Container>
            </Box>
        </>
    )
}