import {Button, Box, AppBar, Toolbar, Typography, Container, Grid, Tabs,Tab} from '@mui/material';
import {Link, useNavigate} from 'react-router-dom';
import {useState, useEffect} from 'react';




export default function Navbar() {

		const navigate = useNavigate()
        
		const [value, setValue] = useState(false);

        const handleChange = (event, newValue) => {
          setValue(newValue);
        };

		return (
          <Box sx={{flexGrow: 1}}>
			 <AppBar position='static' color='transparent'>
			      <Container>
			            <Toolbar>

							<Grid container item xs={6} alignItems="center" justifyContent="center">
							  <Grid container item xs={4}>
							    <Typography variant='h6'   >
			                      <Link to="/" style={{textDecoration:'none', color: "black"}}>Pachacho Library</Link>
			                    </Typography>
							  </Grid>
							  <Grid  container item xs={8}>
							    <Tabs value={value}  onChange={handleChange}>
                                  <Tab label="Users"/>
								  <Tab label="Books" onClick={()=> navigate("/books")}/>
								  <Tab label="Lendings"/>
							    </Tabs>				
							  </Grid>
							</Grid>
							
							<Grid container item xs={6} justifyContent='flex-end'>
			                   <Button variant='contained' color='primary'>Log out</Button>							 
							</Grid>
							 
			            </Toolbar>
			      </Container>
			  </AppBar>
		  </Box>
	 )
}
