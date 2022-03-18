import React, { useEffect } from 'react'
import axios from 'axios'

const App  = () => {
  useEffect(() => {
    const getData = async () => {
      try {
      const res = await axios.get('http://localhost:8000/location/')
      console.log(res.data)
  } catch (err) { 
      console.log(err)
    }
  }
    getData()
  })
  return (
    <h1>Hello World</h1>
  )
}

export default App;
