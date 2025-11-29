// import { CDN_URL } from "../utils/constants";

const RestaurantCard = (props) => {
    const { name, cuisines, image, avgRating, deliveryTime, costForTwo } = props.resData;
    return (
        <div className="res-card" >
            <img className="res-logo" src={image} alt={name} />
            <div className="res-details">
                <h3>{name}</h3>
                <h4>{cuisines.join(', ')}</h4>
                <p className="rating">{avgRating}★</p>
                <p className="duration">{deliveryTime} minutes</p>
                <p className="cost">{costForTwo}</p>
            </div>
        </div>
    )
}

export default RestaurantCard;