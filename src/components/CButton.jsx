import react, { Component } from "react";
import {Button} from '@mui/material';


class CButton extends Component {

    render() {
        return (
            <>
                <Button variant="contained" sx={{
                    borderRadius:15,
                    marginTop:2,
                    backgroundImage:'linear-gradient(to right, #ffe122, #cfa54a)',
                    width: { xs: 250, lg: 350 },
                }} disableElevation>
                    {this.props.text}
                </Button>
            </>
            

        );

    }
}

export default CButton;