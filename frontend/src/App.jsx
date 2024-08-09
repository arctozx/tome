import React from 'react'
import { Route, Routes } from 'react-router-dom'
import CreateBook from './pages/CreateBook'
import UpdateBook from './pages/UpdateBook'
import Home from './pages/Home'

const App = () => {
  return (
    <Routes>
      <Route path = '/' element={<Home/>} />
      <Route path = '/books/create' element={<CreateBook/>} />
      <Route path = '/books/update/:id' element={<UpdateBook/>} />
    </Routes>
  )
}

export default App