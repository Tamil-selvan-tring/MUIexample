import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { Button, CardActions } from '@mui/material';
import del from './CRUD'
import Formbuild from './Formbuild';
import Edit from './Edit';

function Cardcreate(props)
{
    var details={name:props.name,producttype:props.producttype,productmanufacturedyear:props.productyear,manufacturer:props.productmanufacturer};
    console.log(details.name);
    return(<Card sx={{ maxWidth: 345 }}>
        <CardMedia
          component="img"
          height="140"
          image="/image/hand-painted-watercolor-pastel-sky-background_23-2148902771.jpg"
          alt="green iguana"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            Product info
          </Typography>
          <Typography variant="body2" color="text.secondary">
            Name:{props.name}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            Product type:{props.producttype}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            Product make year:{props.productyear}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            Product manufacturer:{props.productmanufacturer}
          </Typography>
        </CardContent>
        <CardActions>
          <Button onClick={()=>{<Edit/>}}>Edit</Button>
          <Button onClick={()=>{del(props.cardid)}}>Delete</Button>
        </CardActions>
      </Card>);
}
export default Cardcreate;
