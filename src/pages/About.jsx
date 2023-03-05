import React from 'react'
import { useNavigate } from 'react-router-dom'
import about from '../images/about.jpg'

const About = () => {
  const navigate = useNavigate()

  return (
      <div className='mt-2'>
      <img src= {about} style={{height: "auto", width: "49rem"}} alt="About me" />
      <div className="card-body">
        <button type='button' 
        className="btn btn-primary btn-rounded" 
        onClick={()=>navigate("/home")}>Home</button>
      </div>
    </div>
    )
  }

export default About
