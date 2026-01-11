import RestaurantCard from './RestaurantCard';
import resList from '../utils/restaurantData';
import { useEffect, useState } from 'react';
import Shimmar from './shimmar/Shimmar';
import { FiSearch } from "react-icons/fi";
import { Link } from 'react-router-dom';
import useOnlineStatus from '../hooks/useOnlineStatus';

const Body = () => {
    const [listOfRestaurants, setListOfRestaurants] = useState(resList);

    const [filterRestaurants, setFilterRestaurants] = useState(resList);

    const [searchText, setSearchText] = useState("");

    const onlineStatus = useOnlineStatus();

    // below code is for when fetching data from real API

    // useEffect(() => {
    //     fetchedData()
    // }, [])

    // const fetchedData = async () => {
    //     const data = await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=28.59007738517123&lng=77.30994746088983&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING");
    //     const json = await data.json();
    //     setListOfRestaurants(json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
    //     setFilterRestaurants(json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
    //     console.log('Fetched Data:', json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
    // }

    const handleFilter = () => {
        const filteredList = listOfRestaurants.filter(
            (res) => res?.avgRating > 4.0
        );
        setFilterRestaurants(filteredList);
    }

    const handleSearch = () => {
        const filteredRest = listOfRestaurants.filter(
            (res) => res?.name.toLowerCase().includes(searchText.toLowerCase())
        );
        setFilterRestaurants(filteredRest);
    }


    if (onlineStatus === false) {
        return (
            <h1 className='offlineText'>Looks like You are offline! Please check your internet connection.</h1>
        )
    }

    // conditional rendering
    return listOfRestaurants.length === 0 ? (
        <Shimmar />
    ) : (
        <div className="body">
            <div className="top-controls">
                <button className='filter-btn' onClick={handleFilter}>Top Rated Restaurant</button>
                <div className="search">
                    <input type="search" placeholder="search food" className="search_input" value={searchText} onChange={(e)=>setSearchText(e.target.value)}  />
                    <FiSearch className='search-btn' onClick={handleSearch}/>
                </div>
            </div>
            <div className="res-container">
                {/* // not using keys (not acceptable) <<<<< index as keys <<<<<<<<<<<<<<< unique id as keys (best practice) */}
                {filterRestaurants?.map((restaurant) => (
                    <Link key={restaurant.id} to={"/restaurant/"+restaurant.id}>
                        <RestaurantCard resData={restaurant} />
                    </Link>
                ))}
            </div>
        </div>
    )
}

export default Body;