import React from 'react'
import RestaurantCard from './RestaurantCard';

const Card=(props)=>{

    const {name,cloudinaryImageId,costForTwo,cuisines,avgRating}=props.details;

    return(
        <div class="m-5 h-75 w-55 bg-gray-100 rounded-2xl">
        <img className="h-45 w-60" src={'https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/'+cloudinaryImageId} />
        <h1 className='mx-10 '>{name}</h1>
         <h2 className='my-2 mx-1 text-xs'>{costForTwo}</h2>
        <h3 className='my-2 mx-1 text-xs truncate text-gray-400'>{cuisines?.join(",")}</h3>
        <h3 className='my-2 mx-1 text-xs text-black'>{avgRating}⭐</h3> 
    </div>

    )
}
export default Card;