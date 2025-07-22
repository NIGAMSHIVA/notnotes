import React from 'react';
import {useEffect,useState} from 'react'


const RestaurantCard=()=>{

    const [resdb,setResdb]=useState([]);
    console.log(resdb);



    const fetchRestaurants=async ()=>{

        const data=await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=26.397862940017443&lng=80.32161757349968&collection=80463&tags=&sortBy=&filters=&type=rcv2&offset=0&page_type=null");
        console.log(data);
        const resdata=await data.json();
        console.log(resdata);
        setResdb(resdata.data?.cards[2].card.card.info);

        // I have to map with the resdb
    }
    useEffect(()=>{fetchRestaurants()},[])

    

    return(

        <div class="m-5 h-75 w-55 bg-gray-100 rounded-2xl">
            <img className="h-45 w-60" src={'https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/'+resdb.cloudinaryImageId} />
            <h1 className='mx-10 '>{resdb.name}</h1>
            <h2 className='my-2 mx-1 text-xs'>{resdb.costForTwo}</h2>
            <h3 className='my-2 mx-1 text-xs truncate text-gray-400'>{resdb.cuisines?.join(",")}</h3>
            <h3 className='my-2 mx-1 text-xs text-black'>{resdb.avgRating}⭐</h3>
        </div>
    )
}
export default RestaurantCard;