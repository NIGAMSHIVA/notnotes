import React from 'react';
import {useEffect,useState} from 'react'
import Card from './Card'


const RestaurantCard=()=>{

    const [resdb,setResdb]=useState([]);

    const fetchRestaurants=async ()=>{

        const data=await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=26.397862940017443&lng=80.32161757349968&collection=80463&tags=&sortBy=&filters=&type=rcv2&offset=0&page_type=null");
        const resdata=await data.json();
        setResdb(resdata.data.cards);

        // I have to map with the resdb
    }
    useEffect(()=>{fetchRestaurants()},[])
    return(
        resdb.filter((x)=>x.card.card["@type"]==="type.googleapis.com/swiggy.presentation.food.v2.Restaurant").map((y)=>{
            
        return (
            <div className='flex '>
\        <Card details={y.card.card.info} />
        </div>
        )
    })
    )  
}
export default RestaurantCard;