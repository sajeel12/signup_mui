import react, { Component } from "react";
import { FormControlLabel, Checkbox, Typography } from '@mui/material';


class Remember extends Component {

    render() {
        return (
            <FormControlLabel style={{ fontSize: 5 }} 
            sx={{ color: 'rgba(0, 0, 0, 0.514)', width:{xs:250 , lg:350 }}} control={<Checkbox />} label={this.props.text} 
            />

        );

    }
}

export default Remember;