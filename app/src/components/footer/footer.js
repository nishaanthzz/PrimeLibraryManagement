import React from 'react'
import './footer.css'
import { Link } from 'react-router-dom'
const Footer = () => {
  return (
    <footer className='footer'>

            <h1> Are you an admin? <Link to='/addBook'>Click Here to Add a Book!</Link></h1>

      </footer>  
  )
}

export default Footer