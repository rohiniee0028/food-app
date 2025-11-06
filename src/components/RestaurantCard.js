import { CDN_URL } from "../utils/constants";

const RestaurantCard = (props) => {
    const { name, cuisines, cloudinaryImageId, avgRating, sla, costForTwo } = props.resData.info;
    return (
        <div className="res-card" >
            <img className="res-logo" src={CDN_URL+cloudinaryImageId} alt={name} />
            <div className="res-details">
                <h3>{name}</h3>
                <h4>{cuisines.join(', ')}</h4>
                <p className="rating">{avgRating}★</p>
                <p className="duration">{sla.deliveryTime} minutes</p>
                <p className="cost">{costForTwo}</p>
            </div>
        </div>
    )
}

export default RestaurantCard;