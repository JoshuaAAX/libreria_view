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
			      <Route path='/' element={<BookList />}/>
			      <Route path='/book/new' element={<BookForm />} />
			    </Routes>
			 </Container>

		  </BrowserRouter>

	 )
}
