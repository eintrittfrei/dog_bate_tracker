import React from 'react' 
import image from '../assets/dogs.jpg'


const DogBateHome = () => {

  return (
  <div className='w3-container' style={{backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url(${image})`,  backgroundPosition: "center", backgroundSize: "cover", 
  height: "100vh", display: "flex", flexDirection: "column", justifyContent: "center"}}>
<div className='w3-container' style={{  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  alignItems: "center"}}>
    <h1 style={{fontFamily: "raleway", color: "white", fontSize: "10vh", textAlign: "center"}}>DOG BATE TRACKER </h1>
    <h2 style={{fontFamily: "raleway", color: "white"}}>coming soon...</h2>
  </div>
  </div>
  )



}

export default DogBateHome