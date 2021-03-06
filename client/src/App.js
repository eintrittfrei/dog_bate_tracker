import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import DogBateIndex from './components/Index.js'
import DogBateHome from './components/Home.js'
import AddNew from './components/AddNew.js'
import Detail from './components/Detail.js'

const App  = () => {
  
  return (<>
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<DogBateHome />} />
        <Route path='all' element={<DogBateIndex />} />
        <Route path='add' element={<AddNew />} />
        <Route path='all/:id' element={<Detail />} />
      </Routes>
    </BrowserRouter>
    </>
  )
}

export default App;
