import React from 'react'
import './PostReview.css'
import axios from 'axios';
import { useState } from 'react';
const PostReview = (prop) => {
    const postReview=async ()=>
    { let toPatch ={name: rName, star: star, review: review }
    
        axios.patch(`http://localhost:5000/postreview/${prop.propId}`,toPatch)
        .then((obj)=>{console.log(obj)})
        ;
    }
    
const [rName, setRName] = useState('');
const [star, setStar] = useState('');
const [review, setReview] = useState('');
  return (
    <div>
        <form className='review-form' onSubmit={postReview}>
        <h1>Post a Review!</h1>
            {/* ReviewerName */}
            <input type="text" placeholder="Name"
             onChange={(e)=>setRName(e.target.value)}/>
             
            {/* Star Rating System */}
            <span>Stars</span>
            <select onChange={(e)=>setStar(e.target.value.length)}>
                <option value="5">⭐⭐⭐⭐⭐</option>
                <option value="4">⭐⭐⭐⭐</option>
                <option value="3">⭐⭐⭐</option>
                <option value="2">⭐⭐</option>
                <option value="1">⭐</option>
            </select>
            {/* Review Content */}
            <input type="text" placeholder="Review"
             onChange={(e)=>setReview(e.target.value)}/>

            <button >Post</button>
        </form>


        





        
    </div>
  )
}

export default PostReview