import React, { createContext, useEffect, useReducer } from 'react'
import './renderBooks.css'
import books from '../../assets/data.json';
import {BookCard} from '../bookCard/bookCard.js'
import Filter from '../filter/filter.js'
import InfiniteScroll from 'react-infinite-scroll-component';
import { useState } from 'react';

export const filterContext = createContext({title:"", author:"", genre:"", publishYear:""});



const RenderBooks = () => {
    const [bookData,setBookData]=useState(books);
    const [limit, setLimit]=useState(10);
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
            default:
                return filters;
        }
        }

const [filters, dispatch] = useReducer(updateFilter,{title:"", author:"", genre:"", publishYear:""});

const filterFunc=()=>
{
    let filteredBooks=books;
    if(filters.title)
    { filteredBooks = filteredBooks.filter((book)=>book.title.toLowerCase().includes(filters.title.toLowerCase()));}
    if(filters.author)
    { filteredBooks = filteredBooks.filter((book)=>book.author.toLowerCase().includes(filters.author.toLowerCase()));}
    if(filters.genre)
    { filteredBooks = filteredBooks.filter((book)=>book.genre.toLowerCase().includes(filters.genre.toLowerCase()));}
    if(filters.publishYear)
    { filteredBooks = filteredBooks.filter((book)=>book.publishYear.toString().includes(filters.publishYear));}
    return filteredBooks;
}
    
let filteredData=filterFunc();
useEffect(()=>
{setBookData(filteredData)}
,[filteredData]

)

console.log(filters);
  return (
     
    <filterContext.Provider value={{filterState: filters, dispatchState: dispatch }}  >
    <div>
        <Filter />
        <InfiniteScroll 
        dataLength={bookData.length}
        
        
        >
            <div className="book-items">
            
                        {
            
                        bookData.map((book) => {
                            {
                                return (
                                    <BookCard obj={book}/>
                                            );
            
                            }
                            })
                        }
                </div>
        </InfiniteScroll>
    </div>
    </filterContext.Provider>
  )
}

export default RenderBooks