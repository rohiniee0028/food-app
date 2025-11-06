import RestaurantCard from './RestaurantCard';
import resList from '../utils/mockData';
import { useEffect, useState } from 'react';
import Shimmar from './shimmar/Shimmar';
import { FiSearch } from "react-icons/fi";

const Body = () => {
    const [listOfRestaurants, setListOfRestaurants] = useState([]);

    const [filterRestaurants, setFilterRestaurants] = useState([]);

    const [searchText, setSearchText] = useState("");

    useEffect(() => {
        fetchedData()
    }, [])

    const fetchedData = async () => {
        const data = await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=28.59005324481766&lng=77.30983849614859&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING");
        const json = await data.json();
        console.log(json);
        setListOfRestaurants(json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
        setFilterRestaurants(json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
    }

    const handleFilter = () => {
        const filteredList = listOfRestaurants.filter(
            (res) => res?.info?.avgRating > 4.5
        );
        setListOfRestaurants(filteredList);
    }

    const handleSearch = () => {
        const filteredRest = listOfRestaurants.filter(
            (res) => res?.info?.name.toLowerCase().includes(searchText.toLowerCase())
        );
        setFilterRestaurants(filteredRest);
    }

    console.log('body rendered');

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
                    <RestaurantCard key={restaurant.info.id} resData={restaurant} />
                ))}
            </div>
        </div>
    )
}

export default Body;