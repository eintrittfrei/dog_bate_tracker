import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import axios from 'axios'
import image from '../assets/twodogs.jpg'

import { Link } from 'react-router-dom'

const Detail = () => {
  const { id } = useParams()
  const [location, setLocation] = useState([])

  useEffect(() => {
    const getData = async () => {
      try {
        const { data } = await axios.get(`http://localhost:8000/location/${id}/`)
        console.log(data)
        setLocation(data)
      } catch (err) {
        console.log(err)
      }
    }
    getData()
  }, [id])




  return (
    <>

      <div className="w3-container" style={{
        display: "flex", flexDirection: "column", justifyContent: "flex-start",
        backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url(${image})`, 
        backgroundPosition: "center", height: "100vh", backgroundSize: "cover",
      }}>
        <div className='wrapper'>
          <section style={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
            <div className="w3-container w3-round-xlarge" style={{ color: "white", display: "flex", 
            flexDirection: "column", alignItems: "center" }}>
              <h1 style={{ fontFamily: "raleway", textAlign: "center" }}>DOG BATE TRACKER</h1>
              <h3 style={{ fontFamily: "raleway" }}>Recent sitings</h3>
            </div>
          </section>
          <div className='w3-panel w3-red w3-round-xlarge' style={{ backgroundColor: "#ed5347", 
          color: "#faf3e7", fontFamily: "Roboto", textAlign: "center" }}>
            <h1>{location.city}</h1>
            <h2>{location.date_time}</h2>
            <h3>{location.street}</h3>
          </div>
          <section className='navigation' style={{ display: "flex", flexDirection: "column", 
          alignItems: "center" }}>
            <div className='w3-cell-row' style={{ width: "75%", color: "white", display: "flex", 
            justifyContent: "space-evenly" }}>
              <div className='w3-container w3-cell w3-round-xlarge' style={{ backgroundColor: "#ff897b" }}>
                <p style={{ textAlign: "center" }}>View map</p></div>
            </div>
            <Link to={'/all'} ><div className='w3-container w3-cell w3-round-xlarge' 
            style={{ backgroundColor: "#9ac4c0" }}><p style={{ textAlign: "center" }}>Back to list</p></div></Link>
          </section>

        </div>
      </div>
    </>
  )
}

export default Detail