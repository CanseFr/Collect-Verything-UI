import React, {useState} from 'react';
import {Button, InputAdornment, TextField} from '@mui/material';
import {styled} from '@mui/system';
import {NavLink, useNavigate} from "react-router-dom";
import Typography from "@mui/material/Typography";

const StyledButton = styled(Button)({
  borderRadius: '20px',
  marginLeft: '8px',
  fontWeight: 'bold',
  width: '20vw',
  marginRight: '5px'
});

export default function ButtonTextfield() {

  const navigate = useNavigate();
  const [email, setEmail] = useState<string>("");

  const handleRegister = () => {
    navigate(`/register?email=${encodeURIComponent(email)}`);
  };

  return (
    <div style={{display: 'flex', alignItems: 'center', borderRadius: '25px', width: "410px", marginTop: "30px"}}>
      <TextField
        fullWidth
        sx={{backgroundColor: "white", borderRadius: '25px', border: 'solid #c9c9c9 O.5px'}}
        onChange={(e) => setEmail(e.target.value)}
        placeholder="Votre adresse e-mail"
        InputProps={{
          endAdornment: (
            <InputAdornment position="end">
              <StyledButton onClick={handleRegister} variant="contained" sx={{background: "black", width: "200px", textTransform: "none"}}>
                <NavLink className={'no-deco-link'}  to={`/solution/register/email=${email}`}>
                  <Typography className={'no-deco-link'} sx={{color: 'white', textTransform: "none", fontWeight: "bold"}}>Démarer un essai </Typography>
                </NavLink>
              </StyledButton>
            </InputAdornment>
          ),
          style: {
            borderRadius: '20px 20px 20px 20px',
            paddingRight: '0',
            border: "none",
            height: "50px"
          }
        }}
        variant="outlined"
      />
    </div>
  );
}
