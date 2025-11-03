const RestaurantCard = (props) => {
    const { name, cusines, rating, duration, cost, img} = props.resData;
    return (
        <div className="res-card" >
            <img className="res-logo" src={img} alt={name} />
            <div className="res-details">
                <h3>{name}</h3>
                <h4>{cusines}</h4>
                <p className="rating">{rating}★</p>
                <p className="duration">{duration}</p>
                <p className="cost">Price: ₹{(cost/100).toLocaleString()}</p>
            </div>
        </div>
    )
}

export default RestaurantCard;