import React from 'react' 
import image from '../assets/dogs.jpg'


const AddNew = () => {


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
      <div className='w3-panel w3-red w3-round-xlarge' style={{backgroundColor: "#ed5347", color: "#faf3e7", fontFamily: "Roboto", textAlign: "center"}}>
            
      <form className="w3-container w3-round-xlarge" style={{display: "flex", flexDirection: "column", alignItems: "center"}}>
       
        <label className="w3-label w3-text-white" style={{fontFamily: "raleway"}}></label>
        <input className="w3-input w3-border w3-round-xlarge" type="text" placeholder="Name" />
        
        <label className="w3-label w3-text-white" style={{fontFamily: "raleway"}}></label>
        <input className="w3-input w3-border w3-round-xlarge" type="text" placeholder="City" />
        
        <label className="w3-label w3-text-white" style={{fontFamily: "raleway"}}></label>
        <input className="w3-input w3-border w3-round-xlarge" type="text" placeholder="PostCode" />
        
        <label className="w3-label w3-text-white" style={{fontFamily: "raleway"}}></label>
        <input className="w3-input w3-border w3-round-xlarge" type="text" placeholder="Street" />

        <label className="w3-label w3-text-white" style={{fontFamily: "raleway"}}></label>
        <input className="w3-input w3-border w3-round-xlarge" type="text" placeholder="House Number" />

        <label className="w3-label w3-text-white" style={{fontFamily: "raleway"}}></label>
        <input className="w3-input w3-border w3-round-xlarge" type="text" placeholder="Landmark" />

        <label className="w3-label w3-text-white" style={{fontFamily: "raleway"}}></label>
        <input className="w3-input w3-border w3-round-xlarge" type="text" placeholder="Description" />

        <label className="w3-label w3-text-white" style={{fontFamily: "raleway"}}></label>
        <input className="w3-input w3-border w3-round-xlarge" type="text" placeholder="Image" />

        <label className="w3-label w3-text-white" style={{fontFamily: "raleway"}}></label>
        <input className="w3-input w3-border w3-round-xlarge" type="text" placeholder="Location" />
        <button type='submit' className="w3-button w3-round-xlarge w3-red" style={{fontFamily: "raleway"}}>Submit</button>

        
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