import RestaurantCard from './RestaurantCard';
import resList from '../utils/mockData';
const Body = () => {
    return (
        <div className="body">
            <div className="search">
                <input type="search" placeholder="search food" className="search_input" />
            </div>
            <div className="res-container">
                {/* // not using keys (not acceptable) <<<<< index as keys <<<<<<<<<<<<<<< unique id as keys (best practice) */}
                {resList.map((restaurant) => (
                    <RestaurantCard key={restaurant.id} resData={restaurant} />
                ))}
            </div>
        </div>
    )
}

export default Body;