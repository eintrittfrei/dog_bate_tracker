import React , { useState } from 'react' 
import image from '../assets/dogs.jpg'
import axios from 'react'
import { useNavigate } from 'react-router-dom'

const formFieldStyle = {
  marginBottom: "0.25em",
  fontFamily: "raleway"
}
const AddNew = () => {
  const navigate = useNavigate()
  const[formData, setFormData] = useState({
    date: '',
    city: '',
    post_code: '',
    street: '',
    house_number: '',
    land_mark: '',
    description: '',
    image: '',
    pointfield: '',
  })

const handleChange = (event) => {
  const newLocation = { ...formData, [event.target.name]: event.target.value}
  setFormData(newLocation)
  
}
console.log('formData on state' ,formData)



const handleSubmit =  async (event) => {
  event.preventDefault() 
  const token = 'b2xlOkFuYVNvZmlh'
    try {
      await axios.post('http://localhost:8000/location/', formData, 
      {
        headers: { Authorization: `Basic ${token}`}
      },
      )
      navigate.push('/location/')
    } catch (error) {
      console.log(error)
    }
}

  return (
    <>
<div className='w3-container' style={{display: "flex", flexDirection: "column", justifyContent: "center", 
      backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url(${image})`,backgroundPosition: "center", height: "100vh", backgroundSize: "cover",}} >
 <div className='wrapper' style={{display: "flex", flexDirection: "column", alignItems: "center"}}>
      <section style={{display: "flex", flexDirection: "column", alignItems: "center"}}>
        <div className="w3-container w3-round-xlarge" style={{color: "white", display: "flex", flexDirection: "column", alignItems: "center"}}>
          <h1 style={{fontFamily: "raleway", textAlign: "center"}}>DOG BATE TRACKER</h1>
          <h3 style={{fontFamily: "raleway"}}>Add new</h3>
        </div>
      </section>
      <div className='w3-panel w3-red w3-xlarge' style={{ fontFamily: "Roboto", textAlign: "center", width: "min(100%, 600px", marginInline: "auto"}}>
            
      <form className="w3-container w3-round-large" 
      style={{display: "flex", 
      flexDirection: "column", 
      alignItems: "center", 
      aspectRatio: "1 / 1", 
      margin: "2rem", 
      justifyContent: "center", 
      boxShadow: "0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)"}}>
       
        <label className="w3-label w3-text-white" 
        style={{fontFamily: "raleway"}}></label>
        <input className="w3-input w3-large" 
        onChange={handleChange} 
        type="date" 
        name="date" 
        value={formData.name}
        placeholder="Date" 
        style={formFieldStyle} />
        
        <label className="w3-label w3-text-white" 
        style={{fontFamily: "raleway"}}></label>
        <input className="w3-input  w3-large" 
        onChange={handleChange} 
        type="text" 
        name="city"
        value={formData.city} 
        placeholder="City"
        style={formFieldStyle} />
        
        <label className="w3-label w3-text-white" 
        style={{fontFamily: "raleway"}}></label>
        <input className="w3-input  w3-large" 
        onChange={handleChange} 
        type="text" 
        name='post_code' 
        value={formData.post_code} 
        placeholder="PostCode"
        style={formFieldStyle} />
        
        <label className="w3-label w3-text-white" 
        style={{fontFamily: "raleway"}}></label>
        <input className="w3-input w3-large" 
        onChange={handleChange} 
        type="text" 
        name="street" 
        value={formData.street} 
        placeholder="Street"
        style={formFieldStyle} />

        <label className="w3-label w3-text-white" 
        style={{fontFamily: "raleway"}}></label>
        <input className="w3-input  w3-large" 
        onChange={handleChange} 
        type="text" name="house_number" 
        value={formData.house_number} 
        placeholder="House Number"
        style={formFieldStyle} />

        <label className="w3-label w3-text-white" 
        style={{fontFamily: "raleway"}}></label>
        <input className="w3-input w3-large" 
        onChange={handleChange} 
        type="text" name="land_mark" 
        value={formData.land_mark}
        placeholder="Landmark"
        style={formFieldStyle} />

        <label className="w3-label w3-text-white" 
        style={{fontFamily: "raleway"}}></label>
        <input className="w3-input w3-large" 
        onChange={handleChange} 
        type="text"name="description" 
        value={formData.description} 
        placeholder="Description"
        style={formFieldStyle} />

        <label className="w3-label w3-text-white" 
        style={{fontFamily: "raleway"}}></label>
        <input className="w3-input w3-large" 
        onChange={handleChange} 
        type="text"name="image" 
        value={formData.image} 
        placeholder="Image"
        style={formFieldStyle} />

        <label className="w3-label w3-text-white" 
        style={{fontFamily: "raleway"}}></label>
        <input className="w3-input w3-large" 
        onChange={handleChange} 
        type="location" name="pointfield" 
        value={formData.location} 
        placeholder="Location"
        style={formFieldStyle} />

        <button type='submit'
        onClick={handleSubmit}
        className="w3-button w3-xlarge w3-red" 
        style={{fontFamily: "raleway"}}>Submit</button>{' '}

        
        </form>
        </div>
        <section>
           
           
       </section>
      </div>
      </div> 
  </>
  )
}

export default AddNew