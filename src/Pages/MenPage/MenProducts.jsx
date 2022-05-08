import { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom"
import "./MenProducts.css"
import { BottomNav } from "../../components/Navbar/BottomNav"
import { Women } from "../../components/Navbar/NavData"

export const MenProducts = () => {

  const data = Women;

  const [products, setProducts] = useState([])

  useEffect(() => {
    axios.get("http://localhost:8080/mendata").then(({ data }) => {
      setProducts(data)
    })
  }, [])
  const handlechange = (e) => {
    if (e.target.value == "low-to-high") {
      setProducts((product) => [...products.sort((a, b) => (a.price - b.price))])
    }
    else if (e.target.value == "high-to-low") {
      setProducts((product) => [...products.sort((a, b) => (b.price - a.price))])
    }

  }
  return (
    <>
      <BottomNav data={data} />
      <div className="container-main">
        <div className="left-side">
          <div className="price-filter">
            <select onChange={handlechange}>
              <option>Sort-By</option>
              <option value={"low-to-high"}>Price-Low To High</option>
              <option value={"high-to-low"}>Price-High To Low</option>
            </select>
          </div>
          <div class="Showall">
            <p>Show All</p>
          </div>
          <hr />
          <div id="women_main_product">
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
          {products.map((e) => {
            return (
              <Link to={`/product/men/${e.id}`}>
                <div className="women_card" key={e.id}>
                  <img className="women_image" src={e.images.img1} />
                  <p className="women_brandName">{e.brandName}</p>
                  <p className="women_name">{e.name}</p>
                  <h3 className="women_price">€{e.price}</h3>
                </div>
              </Link>
            )
          })}

        </div>
      </div>
    </>
  );
};