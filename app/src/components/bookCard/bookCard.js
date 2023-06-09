import React, { useEffect } from 'react'
import './bookCard.css'
import{ Link }from 'react-router-dom'
import { useState } from 'react'
const BookCard = (obj) => {
  let bookData = obj.obj;
  // console.log(bookData);
  const [avgRating,setAvgRating]=useState(0);
  useEffect
  (()=>{
    //average Rating calculation
    let sum=0;
   
    for(let i=0;i<bookData.ratings.length;i++)
    {
      sum+=bookData.ratings[i].star;
    }
    let x=sum/bookData.ratings.length;
    setAvgRating(x.toFixed(1));
  },[])

  return (
    <Link to={`/viewbook/${bookData._id}`}>
    <div className="card-box ">
        <div className="book-pic">
 
            <img src={bookData.image} alt="book-pic"/>
         

        </div>
        <div className="book-info">
          
        <div className='attr title'>Title: <span>{bookData.title}</span></div>

        <div className='attr author'>Author: <span>{bookData.author}</span></div>

        <div className='attr genre'>Genre: <span>{bookData.genre}</span></div>

        <div className='attr year'>Published: <span>{bookData.publishYear}</span></div>

        <div className='attr available'>Status: <span>{bookData.status}</span></div>

        <div className='attr views'><span>👁️{bookData.interests}</span>

        {      bookData.interests>=25 ? <span>🔥</span>  : <span></span>      }

        <div className='attr rating'>Rating: <span>{avgRating}</span>
        
        </div >
        </div>

        </div>
    </div>
    </Link>
  )
}

export {BookCard}