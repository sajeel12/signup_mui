import react, { Component } from "react";
import {Typography} from '@mui/material';


class Toggle extends Component {

    render() {
        return (
            <>
                <Typography sx={{
                textAlign: 'center',
                width: 350, fontSize: 12,
                // marginRight: { xs: 30, lg: 0 }

              }} >
                <Typography sx={{ marginRight:{xs:0, lg:0}, marginTop:3,
                color:'black',
                 ':hover':{cursor:'pointer'} 
                 }} >
                  <u> {this.props.text}</u>
                  </Typography>

              </Typography>
            </>

        );

    }
}

export default Toggle;