import React from 'react'
import './bookCard.css'
const BookCard = (obj) => {
  let bookData = obj.obj;
  console.log(bookData);
  
  return (
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

        </div>
    </div>
  )
}

export {BookCard}