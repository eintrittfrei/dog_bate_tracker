import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import DogBateIndex from './components/Index.js'
import DogBateHome from './components/Home.js'
import AddNew from './components/AddNew.js'
import Locations from './components/LocationsAll.js'

const App  = () => {
  
  return (<>
    <BrowserRouter>
      
      <Routes>
        <Route path='/' element={<DogBateHome />} />
        <Route path='all' element={<DogBateIndex />} />
        <Route path='locations' element={<Locations />} />
        <Route path='new' element={<AddNew />} />
      </Routes>
    </BrowserRouter>
    </>
  )
}

export default App;
