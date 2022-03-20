import React, { useEffect, useState } from 'react'
import axios from 'axios'


const DogBateIndex = () => {
  const [locations, setLocation] = useState()
  const [hasError, setHasError] = useState(false)

  useEffect(() => {
    const getData = async () => {
      try {
        const {data} = await axios.get('http://localhost:8000/location/')
        console.log(data)
        setLocation(data)
        console.log(typeof(data))
      } catch (err) {
        setHasError(err)
        console.log(err)
      }
    }
    getData()
  },[])

  return (
    <>

      <div className="w3-container">
        <div className="w3-container w3-teal">
          <h2>Header</h2>
        </div>
        <section>
          
          {locations && locations.length > 0 ? 
        <div className='w3-panel w3-border w3-round-xlarge'>
          {locations.map(location => {
           return <p key={location.id}>{location.city}, {location.post_code} - {location.land_mark}</p>
          })}
          </div>
          :
          <h2 className='w3-center'>
          {hasError ? "Something has gone wrong 🐙" : "... loading 👸🏾👸🏾"}
        </h2>
              }
        </section>
        <h1>Hello World</h1>
      </div>

    </>
  )
}



export default DogBateIndex