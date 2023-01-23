import react,{Component} from "react";
import { Typography } from '@mui/material';


class Texts extends Component{

    render(){
        return(
            <Typography  >
              <Typography
                sx={{
                  textAlign: 'center',
                  width: { xs: 250, lg: 370 }, fontSize: { xs: 25, lg: 30 }, fontWeight: 'bold', color: 'black', fontFamily: "Audiowide"
                }} >
                <p>
                  Join Our Urban Porgram and get free Shipping & free Shipping & return on every order
                </p>
              </Typography>

              <Typography sx={{
                marginLeft: 4,
                textAlign: 'center',
                width: { xs: 200, lg: 300 }, fontSize: { xs: 14, lg: 17 }, color: 'rgba(0, 0, 0, 0.700)', fontFamily: "Audiowide"
              }} >
                <p>
                  Urban Members get Exclusive access to products, events,
                  and offers. Just provide a few details, It's free to join and open to all
                </p>
              </Typography>

            </Typography>
        );

    }
}

export default Texts;