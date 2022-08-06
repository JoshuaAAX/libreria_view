import {Button, Box, AppBar, Toolbar, Typography, Container} from '@mui/material'
import {Link, useNavigate} from 'react-router-dom'




export default function Navbar() {

		const navigate = useNavigate()

		return (
          <Box sx={{flexGrow: 1}}>
			 <AppBar position='static' color='transparent'>
			      <Container>
			            <Toolbar>

			                 <Typography variant='h6' sx={{flexGrow: 1}} >
			                    <Link to="/" style={{textDecoration:'none', color: "black"}} >Pachacho Library</Link>
			                 </Typography>
							 
							 <Typography variant='h6' sx={{flexGrow: 100}} >
			                    <Link to="/book/new" style={{textDecoration:'none', color: "black"}} >Books</Link>
			                 </Typography>

			                 <Button variant='contained' color='primary' //onClick={ () => navigate("/book/new")}>
			                  >New Book
			                 </Button>
							 
			            </Toolbar>
			      </Container>
			  </AppBar>
		  </Box>
	 )
}
