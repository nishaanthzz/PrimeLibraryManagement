import React, { useContext } from 'react';
import './filter.css';
import {filterContext} from '../../components/renderBooks/renderBooks.js'


const Filter = () => {

    

const  filterContexts = useContext(filterContext);
let dispatch= filterContexts.dispatchState;


  return (
    <div className='filter-comp-body'>
        <span className='filter-by'>
            Filter By:
        </span>


        <div className='filter-attr title'>
            <span>Title</span>
            <input type='text' className='title-input fi'  onChange={(e)=>dispatch({type: "title", payload: e.target.value})} />
        </div>
        <div className='filter-attr author'>
            <span>|  Author</span>
            <input type='text' className='author-input fi'  onChange={(e)=>dispatch({type : "author", payload: e.target.value})} />
        </div>
        <div className='filter-attr genre' >
            <span>|  Genre</span>
            <input type='text' className='genre-input fi'  onChange= {(e)=>dispatch({type : "genre", payload: e.target.value})}            />
            
        </div>
        <div className='filter-attr publish-date' >
            <span>|  Published</span>
            <input type='text' className='date-input fi'  onChange={(e)=>dispatch({type: "publishYear" , payload: e.target.value})}/>
            
        </div>


        

    </div>





  )
}

export default Filter;   