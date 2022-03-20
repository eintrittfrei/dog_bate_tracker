import React from 'react' 
import image from '../assets/dogs.jpg'


const DogBateHome = () => {

  return (
  
<div style={{backgroundImage: `url(${image})`,
              backgroundPosition: "center",
              backgroundSize: "cover", 
              height: "100vh",
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              alignItems: "center",
              }}>
    <h1 style={{fontFamily: "lobster", 
                
                color: "white",
                fontSize: "10vh"}}>Dog Bate Tracker Coming Soon...</h1>
  </div>
  )



}

export default DogBateHome