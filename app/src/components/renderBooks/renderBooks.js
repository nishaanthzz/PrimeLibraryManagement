import React, { createContext, useEffect, useReducer } from 'react'
import './renderBooks.css'
import books from '../../assets/primeData.json';
import {BookCard} from '../bookCard/bookCard.js'
import Filter from '../filter/filter.js'
import InfiniteScroll from 'react-infinite-scroll-component';
import { useState } from 'react';
import { Loading } from '../loading/loading';
import axios from 'axios';




// import { getAllBooks } from '../../assets/fetch';
export const filterContext = createContext({title:"", author:"", genre:"", publishYear:""});


const RenderBooks = () => {
    

    // console.log(typeof books)

    const [hasNext,setHasNext]=useState(true);
    const [bookData,setBookData]=useState(books);
    const [limit, setLimit]=useState(8);
    const updateFilter = (filters,action) => {
        switch(action.type){
            case 'title':
               return {...filters,title:action.payload}
            case 'author':
                return {...filters,author:action.payload}
            case 'genre':
                return {...filters,genre:action.payload}
            case 'publishYear':
                return {...filters,publishYear:action.payload}
            case 'publishYearFrom':
                 return {...filters,publishYearFrom:action.payload}
            case 'publishYearTo':
            return {...filters,publishYearTo:action.payload}
            default:
                return filters;
        }
        }
const [allData,setAllData]=useState(books);
const [filters, dispatch] = useReducer(updateFilter,{title:"", author:"", genre:"", publishYear:"",publishYearFrom:"",publishYearTo:""});
const getAllBooks=async ()=>
{  
    axios.get('http://localhost:5000/books')
    .then((obj)=>
    {  
        if(obj.data.status==="Success")
       { 
        setAllData(obj.data.data);
        setBookData(obj.data.data);
        }
          })
    .catch((err)=>{setAllData(books);});
    
        
   
    }
const filterFunc= ()=>
{
    
    let filteredBooks=allData;

 
   if(filters.title)
       { filteredBooks = filteredBooks.filter((book)=>book.title.toLowerCase().includes(filters.title.toLowerCase()));}
       if(filters.author)
       { filteredBooks = filteredBooks.filter((book)=>book.author.toLowerCase().includes(filters.author.toLowerCase()));}
       if(filters.genre)
       { filteredBooks = filteredBooks.filter((book)=>book.genre.toLowerCase().includes(filters.genre.toLowerCase()));}
       if(filters.publishYear)
       { filteredBooks = filteredBooks.filter((book)=>book.publishYear.toString().includes(filters.publishYear));}
         if(filters.publishYearFrom)
         { filteredBooks = filteredBooks.filter((book)=>book.publishYear>=filters.publishYearFrom);}
        if(filters.publishYearTo)
            { filteredBooks = filteredBooks.filter((book)=>book.publishYear<=filters.publishYearTo);}
       

        return filteredBooks;
    
   
}


useEffect(()=>
{
    getAllBooks();
    
    return ()=>{}
},[])   

useEffect( ()=>
{   
    let filteredData=filterFunc();
    setBookData(filteredData);
   
    return ()=>{}
}

,[filters]

)



const fetchMoreData=()=>
{    if (limit<bookData.length)
    {setTimeout(() => {
        if( limit+8>=bookData.length)
        {setLimit(bookData.length);
        setHasNext(false);}
        else
        {setLimit(limit+8);}
    }, 1500);}
    else
    {setTimeout(() => {
        setLimit(bookData.length);
    }
    , 1500);
    setHasNext(false);}
        
}

// console.log(filters);
  return (
     
    <filterContext.Provider value={{filterState: filters, dispatchState: dispatch }}  >
    <div>
        <Filter/>
        {  Array.isArray(bookData)  &&  <InfiniteScroll className='book-items'
        dataLength={limit}
        next={fetchMoreData}
        hasMore={hasNext}
        loader={<Loading/>}
        endMessage={<h1 className='endmsg'>That's all the books!</h1>}
        
        
        
        >
        {
            
                        bookData.slice(0,limit).map((book) => {
                            {   
                                return (
                                    <BookCard obj={book}/>
                                            );
            
                            }
                            })
                        }
               
        </InfiniteScroll>}
    </div>
    </filterContext.Provider>
  )
}

export default RenderBooks