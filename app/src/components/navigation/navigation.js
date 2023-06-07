import React from 'react'
import './navigation.css'
import {Link} from 'react-router-dom'
const Navigation = () => {
  return (
    <div className='nav-head'>
        <div className="nav-logo">
            <img src="https://i.imgur.com/IlQFP3k.png" alt="Prime Logo" />
        </div>
        <ul className="nav-links">
            <li>
              <Link to="/">
                Home
              </Link>
            </li>
            <li>
              <Link to="/docs">
                Documentation
              </Link>
            </li>
            <li>
              <Link to="/genres">     
                  Genres
              </Link>
            </li>
            
            

        </ul>

    </div>
  )
}

export {Navigation}