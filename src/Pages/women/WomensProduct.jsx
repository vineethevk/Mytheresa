import { useEffect ,useState } from "react";
import axios from "axios";
import{Link} from "react-router-dom"
import "../components/WomenProduct.css"

export const WomensList = () => {

  const [data,setdata] = useState([])

  useEffect(()=>{
    axios.get("http://localhost:8080/womensdata").then(({data})=>{
       setdata(data)
    })
 },[])
 //console.log(data)
    return (
    <div className="container-main">
      <div className="left-side">
      <div class="Showall">
        
        <p>Show All</p>
      </div>
   
    <hr />
    <div id="kid_main_product">
      <div class="filter">
        <div>
          <p >BOYS</p>
        </div>
        <div>
          <input type="checkbox" />
          <p>New arrivals</p>
        </div>
        <div>
          <input type="checkbox" />
          <p>Clothing</p>
        </div>
        <div>
          <input type="checkbox" />
          <p>Shoes</p>
        </div>
        <div>
          <input type="checkbox" />
          <p>Accessories</p>
        </div>
        <div>
          <input type="checkbox" />
          <p>Essentials</p>
        </div>
        <div>
          <input type="checkbox" />
          <p>Vacation shop</p>
        </div>
        <hr />
        <div>
          <p >New designers</p>
        </div>
        <div>
          <input type="search" placeholder="Search" />
        </div>
        <br />
        <div>
          <input type="checkbox" />
          <p>Bonpoint</p>
        </div>
        <div>
          <input type="checkbox" />
          <p>Balmain Kids</p>
        </div>
        <div>
          <input type="checkbox" />
          <p>Canada Goose Kids</p>
        </div>
        <div>
          <input type="checkbox" />
          <p>Adidas Originals Kids</p>
        </div>
        <div>
          <input type="checkbox" />
          <p>Acne Studios Kids</p>
        </div>
        <div>
          <input type="checkbox" />
          <p>Brunello Cucinelli Kids</p>
        </div>
        <hr />

        <div>
          <h4>Size</h4>
        </div>
        <div>
          <input type="checkbox" />
          <p>S</p>
        </div>
        <div>
          <input type="checkbox" />
          <p>M</p>
        </div>
        <div>
          <input type="checkbox" />
          <p>L</p>
        </div>
        <div>
          <input type="checkbox" />
          <p>XL</p>
        </div>
        <div>
          <input type="checkbox" />
          <p>XXL</p>
        </div>
        <div>
          <input type="checkbox" />
          <p>XXL</p>
        </div>
        <hr />
      </div>
      </div>
      </div>
      <div className="list_container">
        {data.map((e,i)=>{
          return (
          <Link to={`/womensdata/${e.id}`}>
          <div className="women_card" key={i}>
          <img className="women_image" src={e.image_url}/>
          <span className="women_name">{e.name}</span>
          <span className="women_title">€{e.price}</span>
         
        </div></Link>
          )
        })}
        
      </div>
      </div>
    );
  };