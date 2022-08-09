import  {useEffect, useState} from 'react'
import {Button, Card, Typography, CardContent, Grid} from '@mui/material'
import {Link, useNavigate} from 'react-router-dom'

export default function BookList() {

	const navigate = useNavigate();
    
    const [books, setBooks] = useState([]);


    const loadBooks = async () => {
		const response = await fetch('http://localhost:4000/books')
		const data = await response.json()
		setBooks(data)
	};

    const handleDelete = async (id) => {
		try {
        const response = await fetch(`http://localhost:4000/books/${id}`,{
            method: "DELETE",
		})
	    setBooks(books.filter((book) => book.isbn !== id));
	    }
		catch(error){
			console.log(error)
		}
	};

     useEffect(() => {loadBooks()},[])

     return(
        <div>
			 <h2>Book List</h2>
			 {books.map(book =>(
                  <Card style = {{marginBottom: ".7rem", backgroundColor: '#fffff'}} 
					    key = {book.isbn}>
				     <CardContent style={{display: 'flex', justifyContent:"space-between"}}>
						<Typography>{book.title}</Typography>
						<Typography>{book.score}</Typography>
						<Typography>{book.published_date}</Typography>
						<Typography>{book.name_category}</Typography>
					    <Typography>{book.name_author}</Typography>
					    <Typography>{book.name_editorial}</Typography>
						<div>
					    <Button variant='contained'
						        onClick={()=> navigate(`/books/${book.isbn}/edit`)}>
					      Edit
					    </Button>
					    <Button variant='contained'
					            onClick={()=> handleDelete(book.isbn)}
					            style={{ marginLeft: ".5rem"}}>
					      Delete
					    </Button>
						</div>
				     </CardContent>
				  </Card>
			  ))}

			  <Grid container justifyContent='flex-end'>
			    <Button variant ='contained' onClick={()=> navigate("/books/new")}>
				  New Book
			    </Button>
			  </Grid>
		</div>

	 )
}
