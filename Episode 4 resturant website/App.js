import React from "react";
import ReactDOM from "react-dom/client"
import logo from "url:./foodie-logo.png"
// The url: tells Parcel, "I don't just want you to process this file; I want you to give me the final, absolute URL to this file as a string."


const root = ReactDOM.createRoot(document.getElementById("root"));

/* app layout planning
* - Header
*   - logo
*   - links
* - Body
*   -serachBar
*   - returantcontainer
*     -ResturantCard
* - Footer
*   - copyright, links
*/

const restaurants = [
  {
    name: "Habibi Restaurant (Bannu Branch)",
    imageURL: "https://lh3.googleusercontent.com/gps-cs-s/AG0ilSzefgWvdhQUiPg_TannBZsZY0QPnRrfpLYr5YK_uhFycomiBE3vWn9sonMk8xknClsy0ILIrjzIBbxeBax1MZqXtOqsKyy0gwLfwDNt6AzdzWTzL_0VHtid7BXWSJl60KPpi4Ks=w114-h114-n-k-no", // use FB page to get images
    price: "",
    cuisine: "Pakistani / Desi",
    rating: null
  },
  {
    name: "Pizza House (Bannu)",
    imageURL: "https://cdn.pixabay.com/photo/2020/10/17/11/06/pizza-5661748_1280.jpg",
    price: "",
    cuisine: "Pizza / Fast Food",
    rating: 4.0
  },
  {
    name: "Imran Cafe (Railway Road, Bannu)",
    imageURL: "https://lh3.googleusercontent.com/gps-cs-s/AG0ilSzb6qBmjWvgXxP9mq6yPRPUcPNVon0Oujep8kvAec4q_W1tytV5ueVVKdYpQ-GXAEoL8m9DnA_-T0GUCO56KzwnKovtCNPj06ah-_tcNFmH5krNnp9tuOri3X52r3FAzUIkRWaH5A=w114-h114-n-k-no",
    price: "Reasonable",
    cuisine: "Local / Desi (Bannu Pulao, Karahi)",
    rating: 4.2
  },
  {
    name: "Aamir Café (Bannu Cantt)",
    imageURL: "https://lh3.googleusercontent.com/gps-cs-s/AG0ilSzefgWvdhQUiPg_TannBZsZY0QPnRrfpLYr5YK_uhFycomiBE3vWn9sonMk8xknClsy0ILIrjzIBbxeBax1MZqXtOqsKyy0gwLfwDNt6AzdzWTzL_0VHtid7BXWSJl60KPpi4Ks=w114-h114-n-k-no",
    price: "",
    cuisine: "Café / Light Meals",
    rating: null
  },
  {
    name: "Pak Ghazi Biryani & Pakwan Centre",
    imageURL: "https://lh3.googleusercontent.com/p/AF1QipPUoMdNRfaFcNcimeqcN531h_Uz8X_MDJ6r1jEz=w92-h92-n-k-no",
    price: "",
    cuisine: "Biryani / Desi",
    rating: null
  },
  {
    name: "Gul baz Khan bannu beef pulao",
    imageURL: "https://lh3.googleusercontent.com/gps-cs-s/AG0ilSy2Q5GJTwv8lPYCfbMmboXtgIWgFyA0tBWdOwNsC5y6KAha6xZjNn7OV5HuNJ3Ligv9FP-ZLVjiJ5CBRl2DiO0bDyteCIu5R8J3HuY4QeesYikt-eD53fNuhV9d2iEsKAbLr8T2Pg=s680-w680-h510-rw",
    price: "",
    cuisine: "Desi / Restaurant",
    rating: 4.5
  },
  {
    name: "New Kohati Hotel (restaurant)",
    imageURL: "https://www.shutterstock.com/image-photo/desi-spicy-chicken-karahi-seal-260nw-2579767669.jpg",
    price: "",
    cuisine: "Desi / Hotel Restaurant",
    rating: null
  },
 
];


// const restaurantList = [
//   {
//     name: "Habibi Restaurant",
//     cuisine: "Pakistani, BBQ",
//     deliveryTime: "25-30 min",
//     costForTwo: "Rs.250",
//     imageId: "https://lh3.googleusercontent.com/gps-cs-s/AG0ilSzpBK8RYWEgJep7_be8HYiagd6CdaH5ubiA99XyKIE1Ku9tq1xJs3v_BSGjUjSyDMGGKDcWv7aMRh3Is4m2tAJRkCT6D5eOuhmd5oW04nZtsjlkbELOSKhOMB0BKK1tbGTc2CS4mA=s680-w680-h510-rw",
//   },
//   {
//     name: "Imran Cafe",
//     cuisine: "Desi, Karahi, BBQ",
//     deliveryTime: "20-25 min",
//     costForTwo: "Rs.200",
//     imageId: "https://lh3.googleusercontent.com/gps-cs-s/AC9h4nps-r0tLGCKEJfWg4tjhdANy5YeDCOA7mgxVq-jr8ro_6XES3DrOUo_uIDUXO7B6QrygmWbLhuulcgyOX4Z-dlSnVs-Iv8TP-k6u6j5WInbnqeR6vmETI-Vl78aNwwTbMWXrJP7lw=s680-w680-h510-rw",
//   },
//   {
//     name: "Aamir Cafe",
//     cuisine: "Pakistani, Snacks",
//     deliveryTime: "15-20 min",
//     costForTwo: "Rs.150",
//     imageId: "https://lh3.googleusercontent.com/gps-cs-s/AC9h4nqKiDA_h9FMu-Je-1LcSRgzDcrVZDzXhzg-FRoifgOgKqfkh6WRDB__9wTikYJ69pPws8Tj8jsHVjRGUuqC7XccGy1WLPpRd_bpTfka70PQlgM3_bCEIA8UE_vnigwo74WC60m7Rg=s680-w680-h510-rw",
//   },
//   {
//     name: "Tandoori Nights Bannu",
//     cuisine: "Tandoori, BBQ, Roti",
//     deliveryTime: "25-35 min",
//     costForTwo: "Rs.300",
//     imageId: "https://images.unsplash.com/photo-1600891964599-f61ba0e24092"
//   },
//   {
//     name: "Al-Madina Restaurant",
//     cuisine: "Pakistani, Curry, Rice",
//     deliveryTime: "20-30 min",
//     costForTwo: "Rs.220",
//     imageId: "https://images.unsplash.com/photo-1617196034796-73a8c3a0ccf0",
//   },
//   {
//     name: "Cafe De Bannu",
//     cuisine: "Fast Food, Burgers",
//     deliveryTime: "15-25 min",
//     costForTwo: "Rs.280",
//     imageId: "https://images.unsplash.com/photo-1571091718767-18b5b1457add",
//   },
// ];


// header component
const Header = () => (
    <div className="header">
        <img src={logo} alt="Logo" className="logo" />
        <div >
            <ul className="links">
                <li><a href="#">Home</a></li>
                <li><a href="#">About Us</a></li>
                <li><a href="#">contact Us</a></li>
                <li><a href="#"><i className="fa-solid fa-cart-shopping"></i></a></li>
            </ul>
        </div>
    </div>
)
// resturant card
const ResturantCard = (props) => {
    console.log(props && props);
    const {name,cuisine,deliveryTime,costForTwo,imageURL}=props?.resdata;
    
    return(
    
    <div className="rescard">
        {/* img */}
        <img src={imageURL && imageURL} alt="resturant-image" />
        <h3>{name}</h3>
        {/*cuisine: a style or method of cooking */}
        <p>Pakistani</p>
        <p>20-30 min, Rs.200 </p>
    </div>
)}
// body component
const Body = () => (
    <div className="body">
        <input type="search" name="Search" id="search" />
        <div className="resCardContainer">
            {
              restaurants.map((res,i)=>(
                <ResturantCard resdata={res} key={i}/>
              ))
            }
        </div>
    </div>
)

// we used const to prevent reassignment,better readably(tell other developers we cannt assign it)
const App = () => (
    <div>
        <Header />
        <Body />
    </div>)
root.render(<App />)