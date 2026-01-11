import { useEffect, useState } from 'react';
import restaurantDetails from '../utils/restaurantMenu';

const useRestaurantMenu = (resId) => {
    const [resMenu, setResMenu] = useState(null);

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

    return resMenu
}

export default useRestaurantMenu;
