import React from 'react'
import { Link } from 'react-router-dom'
import notFound from '../images/404_Not_found.jpg'

const NotFound = () => {
  return (
    <div className= 'mt-4'>
    <img src= {notFound} alt="Not Found" />
    <div className="card-body">
      <Link to="/home" className="btn btn-primary" >Home</Link>
    </div>
  </div>
  )
}

export default NotFound
