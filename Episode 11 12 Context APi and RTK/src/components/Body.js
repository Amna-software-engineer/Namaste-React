import restaurants from "../../utils/mockdata.js";
import ResturantCard from "./ResturantCard.js";
// body component
const Body = () => (
    <div className="body">
        <input type="search" name="Search" id="search" placeholder="Search restaurants"/>
        <div className="resCardContainer">
            {
                restaurants.map((res, i) => (
                    <ResturantCard resdata={res} key={i} />
                ))
            }
        </div>
    </div>
)
export default Body;