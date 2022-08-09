import {BrowserRouter, Routes, Route} from 'react-router-dom'
import {Container} from '@mui/material'

import BookList from "./components/BookList"
import BookForm from "./components/BookForm"
import Navbar from "./components/Navbar"

export default function App() {
     return (
          <BrowserRouter>
             <Navbar/>
			 <Container>
			    <Routes>
			      <Route path='/books' element={<BookList />}/>
			      <Route path='/books/new' element={<BookForm />} />
				  <Route path='/books/:isbn/edit' element={<BookForm/>}/>
			    </Routes>
			 </Container>
		  </BrowserRouter>

	 )
}
