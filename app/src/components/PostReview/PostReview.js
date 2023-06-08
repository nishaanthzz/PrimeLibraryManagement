import React from 'react'
import './PostReview.css'
const PostReview = () => {
    
  return (
    <div>
        <form className='review-form'>
        <h1>Post a Review!</h1>
            <input type="text" placeholder="Name"/>
            <span>Stars</span>
            <select>
                <option value="5">⭐⭐⭐⭐⭐</option>
                <option value="4">⭐⭐⭐⭐</option>
                <option value="3">⭐⭐⭐</option>
                <option value="2">⭐⭐</option>
                <option value="1">⭐</option>
            </select>
            <input type="text" placeholder="Review"/>

            <button >Post</button>
        </form>


        





        
    </div>
  )
}

export default PostReview