import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import axios from 'axios'
import image from '../assets/twodogs.jpg'
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet'

import { Link } from 'react-router-dom'

const linkStyle = {
  textDecoration: "none"
  }

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
        <div className='wrapper' style={{color: "white"}}>
          <section style={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
            <div className="w3-container w3-round-xlarge" style={{
              color: "white", display: "flex",
              flexDirection: "column", alignItems: "center"
            }}>
              <h1 style={{ fontFamily: "raleway", textAlign: "center" }}>DOG BATE TRACKER</h1>
              <h3 style={{ fontFamily: "raleway" }}>Recent sitings</h3>
            </div>
          </section>
          <div className='w3-panel w3-red w3-round-xlarge' 
          style={{
            fontFamily: "Roboto", 
            textAlign: "center", 
            width: "min(100% - 2rem, 600px)", 
            marginInline: "auto",
            boxShadow: "0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)" 
          }}>
            <h3>{location.city} {location.date_time}</h3>
            <h3>{location.street}</h3>
            <MapContainer center={[52.527043, 13.415532]} zoom={13} style={{aspectRatio: "1 / 1", margin: "1rem"}}>
            <TileLayer
              attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
              url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            />
            <Marker position={[52.527043, 13.415532]}>
              <Popup>
                A pretty CSS3 popup. <br /> Easily customizable.
              </Popup>
            </Marker>
          </MapContainer>
          </div>
          <section className='navigation' style={{
            display: "flex", flexDirection: "column",
            alignItems: "center"
          }}>
            <div className='w3-cell-row' style={{
              width: "75%", color: "white", display: "flex",
              justifyContent: "space-evenly"
            }}>
              <div className='w3-container w3-cell w3-round-xlarge' style={{ backgroundColor: "#ff897b" }}>
                <p style={{ textAlign: "center" }}>View map</p></div>
            </div>
            <Link to={'/all'} style={linkStyle} ><div className='w3-container w3-cell w3-round-xlarge'
              style={{ backgroundColor: "#9ac4c0" }}><p style={{ textAlign: "center" }}>Back to list</p></div></Link>
          </section>
         
        </div>
      </div>
    </>
  )
}

export default Detail