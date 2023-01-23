import react, { Component } from "react";
import { Typography } from '@mui/material';


class Password extends Component {

    render() {
        return (
            <Typography width={{ xs: 250, lg: 350 }} style={{ fontSize: 12, color: 'rgba(0, 0, 0, 0.514)' }} >
                <p>
                    Passwords must be 18 charachters long and can't be easy
                    to guess. commonly used and silly passwords are not permitted
                </p>
            </Typography>
        );

    }
}

export default Password;