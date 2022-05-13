import { TextField } from "@mui/material";
import { Grid } from "@mui/material";
import Button from '@mui/material/Button';
import React from 'react';
import ReactDOM from 'react-dom/client';
function Updateform(props)
{
    var productname=props.name;
    var producttype=props.producttype;
    var manufacturer=props.productmanufacturer;
    var year=props.productmakeyear;
    return(
        <div className="Mainform">
        <Grid container spacing={0}>
            <Grid item xs={3} >
            <TextField
            required
            id="outlined-required"
            label="Product name"
            onChange={(event)=> productname=event.target.value}
            placeholder="Enter product name"
            defaultValue={productname}
            />
            </Grid> 
            <Grid item xs={3}>
                <TextField
                required
                id="outlined-required"
                label="Product type"
                placeholder="Enter product type"
                onChange={(event)=> producttype=event.target.value}
                defaultValue={producttype}
               />
            </Grid>
            <Grid item xs={3}>
                <TextField
                required
                id="outlined-required"
                label="Product Manufacturer"
                placeholder="Enter product manufacturer"
                onChange={(event)=>manufacturer =event.target.value}
                defaultValue={manufacturer}
               />
            </Grid>
            <Grid item xs={3}>
                <TextField
                required
                id="outlined-required"
                label="Product make year"
                onChange={(event)=>year =event.target.value}
                placeholder="Enter product make year"
                defaultValue={year}
                />
            </Grid>
        </Grid>
        <Button >Update</Button>
        </div>);
}
export default Updateform;