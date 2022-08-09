import {Grid, Card, Typography, CardContent, TextField, Button,  CircularProgress} from '@mui/material'
import {useState, useEffect} from 'react';
import {useNavigate, useParams} from 'react-router-dom'

import MenuItem from '@mui/material/MenuItem';



export default function BookForm() {

	
	    const [categories, setCategories] = useState([]);
	    const loadCategories= async () => {
		     const response = await fetch('http://localhost:4000/categories')
		     const data = await response.json()
		     setCategories(data)
	    };
	    useEffect(() => {loadCategories()},[])

	    const [authors, setAuthors] = useState([]);
	    const loadAuthors = async () => {
		     const response = await fetch('http://localhost:4000/authors')
		     const data = await response.json()
		     setAuthors(data)
	    };
	    useEffect(() => {loadAuthors()},[])

		const [editorials, setEditorials] = useState([]);
	    const loadEditorials = async () => {
		     const response = await fetch('http://localhost:4000/editorials')
		     const data = await response.json()
		     setEditorials(data)
	    };
	    useEffect(() => {loadEditorials()},[])


		const [book, setBook] = useState({           
		      title: '',
		      score: 0,
			  published_date: 0,
			  id_category: 0,
		      id_author: 0,
			  id_editorial: 0,			
		});

	    const navigate = useNavigate();
		const params = useParams();

	    const[loading, setLoading] = useState(false);   

		const handleChange = (e) => {
			  setBook({...book,[e.target.name]: e.target.value});
			  console.log(book);
		};
        
		const loadBook = async (isbn) => {
            const res = await fetch(`http://localhost:4000/books/${isbn}`)
			const data = await res.json()
			console.log(data)
			setBook({title: data.title,
			         score: data.score,
			         published_date: data.published_date,
			         id_category: data.id_category,
			         id_author: data.id_author,
			         id_editorial: data.id_editorial,})
		}

        useEffect(() => {
			if(params.isbn){
				loadBook(params.isbn);
			}
		},[params.isbn])


		const handleSubmit = async (e) => {
             e.preventDefault();
             setLoading(true);
           
		     let config = {
		          method: 'POST',
				  headers: {'Accept': 'application/json',
                            'Content-Type': 'application/json'
		          },
		          body: JSON.stringify(book)
			 }		 
		     
		     const res = await fetch('http://localhost:4000/books', config);
			 const data = await res.json();
			 
			 setLoading(false);
			 //console.log( JSON.stringify(book))     
		};
          
		return (
          <Grid 
		   container 
		   direction='column' 
		   alignItems='center' 
		   justifyContent='center'>

			 <Grid item xs={6}>
			    <Card sx={{mt: 5}}  style={{ backgroundColor: '#FFFFFF', padding: "1rem"}}>
			       
			       <Typography variant ="14"  textAlign="center" color="black"> 
		                 Create Book                
			       </Typography>

			       <CardContent>
			           <form onSubmit={handleSubmit} >

			               <TextField
						    name = "title"
							value = {book.title}
			                variant='filled' 
			                label='title'
			                sx={{display: 'block',
							     margin: '1.0rem 0'
							   }}
				            
				            onChange={handleChange}
			               />
						
						   <TextField
						    fullWidth
						    select
							name = "score"
							value ={ book.score}
			                variant='filled'
			                label="score"	
			                sx={{display: 'block',
							     mb:-2.7		
						       }}
				           
				            onChange={handleChange}
			               >  
						      <MenuItem value={0}>0</MenuItem>
							  <MenuItem value={1}>1</MenuItem>
							  <MenuItem value={2}>2</MenuItem>
							  <MenuItem value={3}>3</MenuItem>
							  <MenuItem value={4}>4</MenuItem>
							  <MenuItem value={5}>5</MenuItem>
                           </TextField>
                        
						   <TextField
						    name = 'published_date'
							value = {book.published_date}
			                variant='filled' 
			                label='published_date'
			                sx={{display: 'block',
								 margin: '1.5rem 0',
							   }}
				            
				            onChange={handleChange}
			               />

						  <TextField
						    fullWidth
						    select
							name = "id_category"
							value = {book.id_category}
			                variant='filled'
			                label="category"
			                sx={{display: 'block',
								 margin: '.5rem 0',	
						       }}
				           
				            onChange={handleChange}
			               >
							    {categories.map( category => (
	                                 <MenuItem value={category.id_category} key={category.id_category}>
	                                     {category.name_category}
	                                 </MenuItem>
                                ))}
                           </TextField>

			               <TextField
						    fullWidth
						    select
							name = "id_author"
							value={book.id_author}
			                variant='filled'
			                label="author"						
			                sx={{display: 'block',
								 margin: '.5rem 0'		
						       }}
				            onChange={handleChange}
				            >
								{authors.map(author => (
	                                 <MenuItem value={author.id_author} key={author.id_author}>
	                                     {author.name_author}
	                                 </MenuItem>
                                ))}
							</TextField>
			                
			               <TextField
						    fullWidth
						    select
							name="id_editorial"
			                variant='filled'
			                label="editorial"
			                sx={{display: 'block',
							     margin: '.5rem 0'		 
							   }}
				           
				            onChange={handleChange}
			                >
								{editorials.map(editorial => (
	                                 <MenuItem value={editorial.id_editorial} key={editorial.id_editorial}>
	                                     {editorial.name_editorial}
	                                 </MenuItem>
                                ))}
							</TextField>
			              
			               <Button 
						    variant='contained' 
						    color='primary' 
							type='submit' 
							disabled={!book.title || 
								      !book.score || 
									  !book.published_date || 
									  !book.id_category ||
									  !book.id_author ||
									  !book.id_editorial }
							>
			                 {loading ? (
                                <CircularProgress color="inherit" size={24}/>
							 ):(
                                "save"
							 )}  
			               </Button>
			           </form>
			       </CardContent>

			    </Card>
			 </Grid>

         </Grid> 

	 )
}
