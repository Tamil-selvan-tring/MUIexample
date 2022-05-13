import {CardMedia,Typography,CardContent,CardActions,Card, Grid, TextField,Button} from '@mui/material';
import {React,useState} from 'react';
function Formbuild()
{
  const [counter, setCounter] = useState(1);
  const [name,setName]=useState("");
	const [type,setType]=useState("");
	const [mfd,setmfd]=useState("");
	const[card,setCard]=useState([]);
	const[status,setStatus]=useState("add");
	const[id,setId]=useState("");
	const[mfdyear,setmfdyear]=useState("");	
	const createitem=() =>{
      if(status==="add"){
      let newCard={
      id:counter,
      name,type,mfd,mfdyear
 }
 setCounter(counter + 1);
 setCard([...card,newCard]);
}
else if(status==="edit"){
  var remainingcards=card.filter(item=>item.id!==id)
  var editedCarddetails={id,name,type,mfd,mfdyear}
  setCard([...remainingcards,editedCarddetails]);
}
setName("");
setType("");
setmfd("");
setmfdyear("");
setStatus("add");
}
	const deleteitem=(id) =>{
		let updateitem = card.filter(item => item.id !== id);
		setCard(updateitem);
	}
	const edititem=(id) =>{
		let edititem = card.filter(item => item.id === id);
		setName(edititem[0].name);
		setType(edititem[0].type);
		setmfd(edititem[0].mfd);
		setmfdyear(edititem[0].mfdyear);
    setId(edititem[0].id);
		setStatus("edit");
	}
	return(
	<div >
		 <Grid container Spacing={1}  >
		 	
         <Grid item xs={3} >
            <TextField
            required
            id="outlined-required"
            label="Product name"
            onChange={(event)=> setName(event.target.value)}
            placeholder="Enter product name"
            value={name}
            />
            </Grid> 
            <Grid item xs={3}>
                <TextField
                required
                id="outlined-required"
                label="Product type"
                placeholder="Enter product type"
                onChange={(event)=> setType(event.target.value)}
                value={type}
               />
            </Grid>
            <Grid item xs={3}>
                <TextField
                required
                id="outlined-required"
                label="Product Manufacturer"
                placeholder="Enter product manufacturer"
                onChange={(event)=>setmfd(event.target.value)}
                value={mfd}
               />
            </Grid>
            <Grid item xs={3}>
                <TextField
                required
                id="outlined-required"
                label="Product make year"
                onChange={(event)=>setmfdyear(event.target.value)}
                placeholder="Enter product make year"
                value={mfdyear}
                />
            </Grid>
            <Grid item xs={12} marginTop={2} marginBottom={5}>
        				<Button  
        				variant="contained"
        				onClick={() => createitem() }>
        				SAVE
        				</Button>        			
        	</Grid>
        		 
        		<Grid container rowSpacing={1} columnSpacing={1} >
          		{
				 card &&card.map(e =>{
				    return(
                        <Card sx={{ maxWidth: 345 }} style={{marginLeft:10}}>
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
                            Name:{e.name}
                          </Typography>
                          <Typography variant="body2" color="text.secondary">
                            Product type:{e.type}
                          </Typography>
                          <Typography variant="body2" color="text.secondary">
                            Product make year:{e.mfdyear}
                          </Typography>
                          <Typography variant="body2" color="text.secondary">
                            Product manufacturer:{e.mfd}
                          </Typography>
                        </CardContent>
                        <CardActions>
                          <Button onClick={()=>{edititem(e.id)}}>Edit</Button>
                          <Button onClick={()=>{deleteitem(e.id)}}>Delete</Button>
                        </CardActions>
                      </Card>	 			
				    )
				 })
				}
          			
        		</Grid>
      		</Grid>
	</div>
	
	);
    
}
export default Formbuild;
