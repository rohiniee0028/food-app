import { useEffect, useState } from 'react';
import restaurantDetails from '../utils/restaurantMenu';
import { useParams } from 'react-router';

const RestaurantMenu = () => {
    const [resMenu, setResMenu] = useState(null);
    const { resId } = useParams(); // get restaurant id from URL
    console.log(resId);

    // below commented code is for when fetching data from real API

    useEffect(() => {
        // fetchMenu();
        const data = restaurantDetails.find((res) => res.id == resId);
        setResMenu(data);
        console.log('data', data);
    }, [resId])

    // const fetchMenu = async () => {
    //     const data = await fetch("http://localhost:4000/api/menu");
    //     const json = await data.json();
    //     console.log("Menu:", json);
    // };

    if (!resMenu) {
        return <h2 className='text-center mt-10 text-xl'>Loading menu...</h2>;
    }

    console.log('resMenu', resMenu);

    return (
        <div className="resMenuSection component-top-spacing">
            {/* --- Restaurant Header --- */}
            <div className="res-header">
                <div className='menu-image'>
                    <img
                        src={resMenu.image}
                        alt={resMenu.name}
                        className="res-banner"
                    />
                </div>
                <div className='menu-details'>
                    <h1>{resMenu.name}</h1>
                    <h3>{resMenu.description}</h3>

                    <div className="res-info">
                        <p><strong>Cuisines:</strong> {resMenu.cuisines}</p>
                        <p><strong>Rating:</strong> {resMenu.rating}⭐</p>
                        <p><strong>Delivery Time:</strong> {resMenu.deliveryTime}</p>
                        <p><strong>Cost for Two:</strong> {resMenu.costForTwo}</p>
                        <p><strong>Location:</strong> {resMenu.location}</p>
                        <p><strong>Locality:</strong> {resMenu.locality}</p>
                        <p><strong>Availability:</strong> {resMenu.availability ? "Open Now" : "Closed"}</p>
                    </div>
                    <button>Add To Cart</button>
                </div>
            </div>
        </div>
    );
}

export default RestaurantMenu;
