import  {useEffect, useState} from 'react'
import {Button, Card, Typography, CardContent} from '@mui/material'

export default function BookList() {
    
     const [books, setBooks] = useState([])


     const loadBooks = async () => {
		const response = await fetch('http://localhost:4000/books')
		const data = await response.json()
		setBooks(data)
	 };

     const handleDelete = async (id) => {
          const response = await fetch(`http://localhost:4000/books/${id}`,{
          method: "DELETE",
		})
	    setBooks(books.filter((book) => book.isbn !== id));
	 };

     useEffect(() => {loadBooks()},[])

     return(
        <>
			 <h2>Book List</h2>
			 {books.map(book =>(
                  <Card style = {{marginBottom: ".7rem", backgroundColor: '#fffff'}} 
					    key = {book.id}>
				     <CardContent>
						<Typography>{book.title}</Typography>
						<Typography>{book.score}</Typography>
					    <Typography>{book.author}</Typography>
					    <Typography>{book.editorial}</Typography>
					    <Button variant='contained'>
					      Edit
					    </Button>
					    <Button variant='contained'
					            onClick={()=> handleDelete(book.isbn)}
					            style={{ marginLeft: ".5rem"}}>
					      Delete
					    </Button>
				     </CardContent>
				  </Card>
			  ))}

		</>

	 )
}
