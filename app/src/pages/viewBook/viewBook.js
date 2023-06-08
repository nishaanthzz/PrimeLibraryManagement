import React, { useEffect, useState} from 'react'
import './viewBook.css'
import { useParams } from 'react-router-dom'
import axios  from 'axios';
import PostReview from '../../components/PostReview/PostReview';
const ViewBook = () => {
  // console.log(axios)
 



  const [res, setRes] = useState();
  const {id}=useParams();
  const getBook= async ()=>
  { const obj = await axios.get(`http://localhost:5000/viewbook/${id}`);
    
      setRes(obj.data.data);
  
  }

    
useEffect(()=>{ getBook( )},[])

  return (
    <div>
      {res && <div className="book-container">
          <div className='book-content '>
              <div>
                  <img src={res.image} alt={res.title}/>
              </div>
              <div className='book-info'>
                  <h1>{res.title}</h1>
                  <h3><span>By</span> {res.author}</h3>
                  <h2><span>Synopsis:</span> {res.synopsis}</h2>
                  <h2><span>Status:</span> {res.status}</h2>
                  <h2><span>Views:</span> {res.interests}</h2>

                
              </div>
          </div>
          <div className='ratings'>

              <PostReview />

              <div className='ratingss'>
              <h1>Ratings({res.ratings.length})</h1>
              { res.ratings.map((rating)=>
              {
                  return(
                      <div className='rating'>
                          <h2>{rating.name}</h2>
                          <h3>{rating.star} ⭐</h3>
                          <h4>{rating.review}</h4>
                      </div>
                  )
                  
                })
            }

            </div>
          </div>
      </div>}
    </div>
  )
}

export {ViewBook}