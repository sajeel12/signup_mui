import react, { Component } from "react";
import Texts from "./Texts";
import InputField from "./InputField";
import { Grid, FormGroup } from '@mui/material';
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

                <Grid item xs={12} sm={6} display={'flex'} justifyContent="space-evenly "
                    marginTop={15}
                >
                    < Texts />

                </Grid>


                <Grid item xs={12} sm={6} display={'flex'} flexDirection='column' justifyContent="space-evenly"
                    marginTop={15}
                    alignItems='center'
                >

                    <img style={{ width: 100, marginBottom: 50 }} src={logo_girl} alt="" srcset="" />

                    <FormGroup action=""  >

                        <InputField text="Username or Email" />
                        <InputField text="Password" />
                        <Password />
                        <Remember text='Remember me' />
                        < CButton text='Login' />

                    </FormGroup>
                    <Link to='register' > <Toggle text='Create an new Account' /> </Link>

                </Grid>
            </>
        );

    }
}

export default LoginPage;