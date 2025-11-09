import { useEffect, useState } from 'react';

const RestaurantMenu = () => {
    const [resMenu, setResMenu] = useState(null);

    useEffect(() => {
        fetchMenu()
    }, [])

    const fetchMenu = async () => {
        const proxy = "https://corsproxy.io/?";
        const Url = "https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=28.465858&lng=77.032595&restaurantId=125878&catalog_qa=undefined&submitAction=ENTER";
        const res = await fetch(proxy + encodeURIComponent(Url));
        const data = await res.json();
        console.log("Menu data:", data);
    }
    return (
        <div className='resMenuSection component-top-spacing'>
            <h1>Name of the Restaurant</h1>
            <h3></h3>
            <h2>Menu</h2>
            <ul>
                <li>Biryani</li>
            </ul>
        </div>
    );
}

export default RestaurantMenu;
