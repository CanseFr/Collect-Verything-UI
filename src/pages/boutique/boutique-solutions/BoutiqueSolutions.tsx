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

export default function BoutiqueSolutions(){
    return(
        <>
            <NavBar/>
            <Container maxWidth="lg" sx={{marginTop: '50px'}}>
                <Grid container spacing={2}>
                    <Grid item xs={4}>
                        <Card sx={{ width: 300 }}>
                            <CardMedia
                                component="img"
                                alt="green iguana"
                                height="140"
                                image="/static/images/cards/contemplative-reptile.jpg"
                            />
                            <CardContent>
                                <Typography gutterBottom variant="h5" component="div">
                                    Solution 1
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
                        <Card sx={{ width: 300 }}>
                            <CardMedia
                                component="img"
                                alt="green iguana"
                                height="140"
                                image="/static/images/cards/contemplative-reptile.jpg"
                            />
                            <CardContent>
                                <Typography gutterBottom variant="h5" component="div">
                                    Solution 2
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
                        <Card sx={{ width: 300 }}>
                            <CardMedia
                                component="img"
                                alt="green iguana"
                                height="140"
                                image="/static/images/cards/contemplative-reptile.jpg"
                            />
                            <CardContent>
                                <Typography gutterBottom variant="h5" component="div">
                                    Solution 3
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
            </>
    )
}