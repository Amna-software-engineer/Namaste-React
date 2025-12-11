

// resturant card
const ResturantCard = (props) => {
    console.log(props && props);
    const { name, cuisine, deliveryTime, costForTwo, imageURL } = props?.resdata;
   
   
    return (

        <div className="rescard">
            {/* img */}
            <img src={imageURL && imageURL} alt="resturant-image" />
            <h3>{name}</h3>
            {/*cuisine: a style or method of cooking */}
            <p>Pakistani</p>
            <p>20-30 min, Rs.200 </p>
          
        </div>
    )
}
export default ResturantCard;