import React, { useEffect } from 'react'
import { useParams } from 'react-router-dom'
import axios from 'axios'

const Detail = () => {
  const { id } = useParams

  useEffect(() => {
    const getData = async () => {
      try {
        const { data } = await axios.get(`http://localhost:8000/location/${id}`)
        console.log(data)
      } catch (err) {
        console.log(err)
      }
    }
    getData()
  }, [id])




  return (
    <h1>Detail Page</h1>
  )
}

export default Detail