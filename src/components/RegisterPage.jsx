import react, { Component } from "react";
import Texts from "./Texts";
import InputField from "./InputField";
import { Grid, FormGroup ,Typography } from '@mui/material';
import logo_girl from '../images/logo_girl.png'
import Password from "./Password";
import Remember from "./Remember";
import CButton from "./CButton";
import Toggle from "./Toggle";
import { Link } from "react-router-dom";

class LoginPage extends Component {


    render() {
        return (
            <>

                <Grid item xs={12} sm={6} display={'flex'} flexDirection='column' justifyContent="space-evenly "
                    marginTop={15}
                    alignItems='center'
                >
                    <img style={{ width: 100, marginBottom: 30 }} src={logo_girl} alt="" srcset="" />

                    < Texts />

                </Grid>


                <Grid item xs={12} sm={6} display={'flex'} flexDirection='column' justifyContent="space-evenly"
                    marginTop={15}
                    alignItems='center'
                >

                    
                    <FormGroup action=""  >

                        <InputField text="Username" />
                        <InputField text="Email" />
                        <InputField text="Phone No" />
                        <InputField text="Password"  />
                        <Password />
                        <Remember  text={
                            <Typography style={{fontSize: 11}} >
                                
                             By creating my account, I agree to <span style={{textDecoration:'underline',color:'black'}}>
                                 Terms & Conditions</span> 
                            I have read the <span style={{textDecoration:'underline',color:'black'}}>legal Notice</span> 
                            and <span style={{textDecoration:'underline',color:'black'}}>Privacy Policy</span> 

                            </Typography >
                        }
                        />
                        < CButton text='Register' />
                        
                    </FormGroup>
                     <Link to='/' > <Toggle text='log in with an Existing Account' /> </Link>

                </Grid>
            </>
        );

    }
}

export default LoginPage;