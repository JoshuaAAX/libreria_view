import {Grid, Card, Typography, CardContent, TextField, Button} from '@mui/material'
import {useState, useEffect} from 'react';

import MenuItem from '@mui/material/MenuItem';


export default function BookForm() {
        
		const [book, setBook] = useState({           
		      title: '',
		      score: 0,
			  category: '',
		      author: '',
			  editorial: '',			
		});
		
		const handleChange = e => {
			 console.log(book)
			  setBook({...book,[e.target.name]: e.target.value});
		};
        
		const handleSubmit = async (e) => {
             e.preventDefault();
            
       
		     function replacer(key,value){
                  if(key === "score"){
				      return parseInt(value,10)
				  }else {
				      return value
				  }
			 }

		     let config = {
		          method: 'POST',
				  headers: {'Accept': 'application/json',
                            'Content-Type': 'application/json'
		         },
		          body: JSON.stringify(book,replacer)
			 }		 
		     
		     const res = await fetch('http://localhost:4000/books', config);
			 const data = await res.json();
			 
			 console.log(data)     
		};
          
		return (
          <Grid 
		   container 
		   direction='column' 
		   alignItems='center' 
		   justifyContent='center'>

			 <Grid item xs={3}>
			    <Card sx={{mt: 5}}  style={{ backgroundColor: '#FFFFFF', padding: "1rem"}}>
			       
			       <Typography variant ="14"  textAlign="center" color="black"> 
		                 Create Book                
			       </Typography>

			       <CardContent>
			           <form onSubmit={handleSubmit}>

			               <TextField
			                variant='filled' 
			                label='title'
			                sx={{display: 'block',
							     margin: '.5rem 0'
							   }}
				            name = "title"
				            onChange={handleChange}
			               />
                        
						  <TextField
						    fullWidth
						    select
			                variant='filled'
			                label="category"
			                sx={{display: 'block',
								 margin: '.5rem 0'		
						       }}
				            name = "category"
				            onChange={handleChange}
			               >
                            <MenuItem value={'a'}>Ten</MenuItem>
                           <MenuItem value={'s'}>Twenty</MenuItem>
                           <MenuItem value={'d'}>Thirty</MenuItem>
                           </TextField>

			               <TextField
						    fullWidth
						    select
			                variant='filled'
			                label="author"
			                sx={{display: 'block',
								 margin: '.5rem 0'		
						       }}
				            name = "author"
				            onChange={handleChange}
			               />
			  
			               <TextField
						    fullWidth
						    select
			                variant='filled'
			                label="editorial"
			                sx={{display: 'block',
							     margin: '.5rem 0'		 
							   }}
				            name="editorial"
				            onChange={handleChange}
			               />
			              
			               <Button variant='contained' color='primary' type='submit'>
			                 save
			               </Button>
			           </form>
			       </CardContent>

			    </Card>
			 </Grid>

         </Grid> 

	 )
}
