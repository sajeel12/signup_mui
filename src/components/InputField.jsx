import react, { Component } from "react";
import { TextField } from '@mui/material';


class InputField extends Component {

    render() {
        return (
            <TextField
                sx={{
                    width: { xs: 250, lg: 350 },
                    marginTop: 1,
                    "& .MuiFormLabel-root": {
                        fontWeight: 'bold',
                        color: 'black'
                    }
                }}

                id="standard-basic" label={this.props.text} variant="standard" marginTop={50}
                 />
        );

    }
}

export default InputField;