import Container from "@mui/material/Container";
import {Grid} from "@mui/material";
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import NavBar from "../../../components/nav-bar/NavBar";
import {NavLink} from "react-router-dom";
import ButtonTextfield from "../../../components/button-textfield/ButtonTextfield";

export default function BoutiqueSolutions(){
    return(
        <div style={{background: 'linear-gradient(0.25turn, #eddaf2, #ffffff, #eddaf2)', height: '100vh'}}>
            <NavBar/>
          <Container maxWidth="lg" sx={{marginTop: '2vh', textAlign: 'center', display: 'flex', flexDirection: 'column', alignItems: 'center'}}>
            <Typography variant={'h4'}>Démarrez gratuitement, puis profitez d’un tarif de 1 €/mois pendant 3 mois</Typography>
            <Typography mt={3} variant={'subtitle2'}>Essayez Shopify à moindre coup et sans risque pendant 3 mois.</Typography>

            <ButtonTextfield/>

            <Typography mt={3} variant={'subtitle2'}>En saisissant votre e-mail, vous acceptez de recevoir des e-mails de marketing de la part de Shopify.</Typography>
          </Container>

            <Container maxWidth="lg" sx={{marginTop: '5vh'}}>
                <Grid container spacing={2}>
                    <Grid item xs={4}>
                        <Card
                          sx={{
                              width: 300,
                              transition: 'transform 0.4s ease-in-out',
                              boxShadow: '10px 8px 8px #a6a6a6',
                              '&:hover': {
                                  transform: 'scale(1.2)',
                              }
                          }}
                        >
                            <CardMedia
                                component="img"
                                alt="green iguana"
                                height="300"
                                image="assets/commercial/low-level-pass.png"
                            />
                            <CardContent>
                                <Typography gutterBottom variant="h5" component="div">
                                    Low Level Pass
                                </Typography>
                                <Typography variant="body2" color="text.secondary">
                                    Lizards are a widespread group of squamate reptiles, with over 6,000
                                    species, ranging across all continents except Antarctica
                                </Typography>
                            </CardContent>
                            <CardActions>
                                <Button size="small">
                                    <NavLink to={"/prod/1"}>
                                        Decouvrire l'offre
                                    </NavLink>
                                </Button>
                            </CardActions>
                        </Card>
                    </Grid>
                    <Grid item xs={4}>
                        <Card
                          sx={{
                              width: 300,
                              transition: 'transform 0.4s ease-in-out',
                              boxShadow: '10px 8px 8px #a6a6a6',
                              '&:hover': {
                                  transform: 'scale(1.2)',
                              }
                          }}
                        >
                            <CardMedia
                                component="img"
                                alt="green iguana"
                                height="300"
                                image="assets/commercial/mid-level-pass.png"
                            />
                            <CardContent>
                                <Typography gutterBottom variant="h5" component="div">
                                  Mid Level Pass
                                </Typography>
                                <Typography variant="body2" color="text.secondary">
                                    Lizards are a widespread group of squamate reptiles, with over 6,000
                                    species, ranging across all continents except Antarctica
                                </Typography>
                            </CardContent>
                            <CardActions>
                                <Button size="small">Decouvrire l'offre</Button>
                            </CardActions>
                        </Card>
                    </Grid>
                    <Grid item xs={4}>
                        <Card
                          sx={{
                              width: 300,
                              transition: 'transform 0.4s ease-in-out',
                              boxShadow: '10px 8px 8px #a6a6a6',
                              '&:hover': {
                                  transform: 'scale(1.2)',
                              }
                          }}
                        >
                            <CardMedia
                                component="img"
                                alt="green iguana"
                                height="300"
                                image="assets/commercial/max-level-pass.png"
                            />
                            <CardContent>
                                <Typography gutterBottom variant="h5" component="div">
                                  High Level Pass
                                </Typography>
                                <Typography variant="body2" color="text.secondary">
                                    Lizards are a widespread group of squamate reptiles, with over 6,000
                                    species, ranging across all continents except Antarctica
                                </Typography>
                            </CardContent>
                            <CardActions>
                                <Button size="small">Decouvrire l'offre</Button>
                            </CardActions>
                        </Card>
                </Grid>
                </Grid>

            </Container>
            </div>
    )
}