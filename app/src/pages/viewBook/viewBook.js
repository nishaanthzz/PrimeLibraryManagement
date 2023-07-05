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
  const updateViews= async ()=>
  {
    const res = await axios.patch(`http://localhost:5000/updateViews/${id}`);
    console.log(res);
  }


    
useEffect(()=>{ getBook()
                updateViews()         
               },[])

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
          <div className='all-ratings'>

              <PostReview propId={res._id} />

              <div className='ratings-body'>
              <h1 className ='rat-title' >Ratings({res.ratings.length})</h1>
              { res.ratings.map((rating)=>
              {
                  return(
                      <div className='rating-b'>
                        
                          <h2 className='rat-name'>{rating.name}</h2>
                          <h3 className='rat-star'>{rating.star} ⭐</h3>
                          <h4 className='rat-review'> {rating.review}</h4>
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