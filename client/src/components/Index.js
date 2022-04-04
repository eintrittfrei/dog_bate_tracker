import React, { useEffect, useState } from 'react'
import axios from 'axios'
import image from '../assets/twodogs.jpg'
import { Link } from 'react-router-dom'



const DogBateIndex = () => {
  const [locations, setLocation] = useState()
  const [hasError, setHasError] = useState(false)

  useEffect(() => {
    const getData = async () => {
      try {
        const { data } = await axios.get('http://localhost:8000/location/')
        console.log(data)
        setLocation(data)
      } catch (err) {
        setHasError(err)
      }
    }
    getData()
  }, [])

  return (
    <>
    
      <div className="w3-container" style={{display: "flex", flexDirection: "column", justifyContent: "flex-start", 
      backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url(${image})`,backgroundPosition: "center", height: "100vh", backgroundSize: "cover",}}>
    <div className='wrapper'>
      <section style={{display: "flex", flexDirection: "column", alignItems: "center"}}>
        <div className="w3-container w3-round-xlarge" style={{color: "white", display: "flex", flexDirection: "column", alignItems: "center"}}>
          <h1 style={{fontFamily: "raleway", textAlign: "center"}}>DOG BATE TRACKER</h1>
          <h3 style={{fontFamily: "raleway"}}>Recent sitings</h3>
        </div>
      </section>

        <section>
          {locations && locations.length > 0 ?
            <div className='w3-panel w3-red w3-round-xlarge' style={{backgroundColor: "#ed5347", color: "#faf3e7", fontFamily: "Roboto", textAlign: "center"}}>
              {locations.map(location => {
                return <Link key={location.id} to={`/all/${location.id}`}>
                <p key={location.id}>{location.city}, {location.post_code} - {location.land_mark}</p>
                </Link>
              })}
            </div>
            :
            <h2 className='w3-center'>
              {hasError ? "Something has gone wrong 🐙" : "... loading 👸🏾👸🏾"}
            </h2>
          }
        </section>
        <section className='navigation' style={{display: "flex", flexDirection: "column", alignItems: "center"}}>
          <div className='w3-cell-row' style={{width: "75%", color: "white", display: "flex", justifyContent: "space-evenly"}}>
            <Link to={'/add'} ><div className='w3-container w3-cell w3-round-xlarge' style={{backgroundColor: "#9ac4c0"}}><p style={{textAlign: "center"}}>Add new</p></div></Link>
            <div className='w3-container w3-cell w3-round-xlarge' style={{backgroundColor: "#ff897b"}}><p style={{textAlign: "center"}}>View map</p></div>
          </div>

        </section>
      </div>
      </div>
    </>
  )
}



export default DogBateIndex