import "./Footer.css"
import { BsLinkedin, BsFacebook, BsTwitter, BsPinterest, BsInstagram, BsYoutube } from "react-icons/bs"

export const Footer = () => {

    return (<>
        <hr />
        <div id="main" >
            <div className="col1" >
                <div>
                    <p className="heading"> SERVICE & SECURITY </p>
                </div>
                <div>
                    <p className="heading">Fast Delivery</p>
                    <p className="text">Delivery within 2 business days</p>
                </div>
                <div className="Fleft">
                    <p className="heading">Free returns within 30 days </p>
                    <p className="text">onvenient return service</p>
                </div>
                <div className="Fleft">
                    <p className="heading">Secure payment and data protection </p>
                    <p className="text">SSL encryption for secure transactions and personal data</p>
                </div>
            </div>
            <div className="col2">
                <p className="heading"> MYTHERESA </p>
                <p className="text" >About us </p>
                <p className="li2 text" > Trust & services </p>
                <p className="li2 text" > Sustainability </p>
                <p className="li2 text" > Press </p>
                <p className="li2 text" > Careers </p>
                <p className="li2 text" > Investor Relations </p>
                <p className="li2 text" > Affiliates </p>

            </div>
            <div className="col3" >
                <p className="heading"> CUSTOMER CARE </p>
                <p className="text">Contact us </p>
                <p className="li2 text"> Shipping information </p>
                <p className="li2 text" >Secure payment </p>
                <p className="li2 text" >Exchanges </p>
                <p className="li2 text" > Returns </p>
                <p className="li2 text" >After sale service</p>
                <p className="li2 text" > Gift card </p>
            </div>
            <div className="col4" >
                <p className="heading"> GET TREND UPDATES, STYLE TIPS AND MORE </p>
                <input type="email" placeholder="your email address here.... " />
                <button className="Footerbtn" > SIGN UP </button>
                <p>Wish List </p>
                <p className="li2 text" >Receive personal notifications </p>
                <p>Follow us on </p>

                <div className="media" >
                    <BsLinkedin />
                    <BsFacebook />
                    <BsTwitter />
                    <BsPinterest />
                    <BsInstagram />
                    <BsYoutube />
                    {/* <img className="logo" style={{ marginLeft: "10px" }} src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAKUAAAClCAMAAAAK9c3oAAAAZlBMVEUAAAD///9FRUWWlpbV1dV8fHz5+fn09PSwsLDa2to1NTX8/PwTExNlZWWQkJBJSUldXV2+vr6np6ehoaHIyMhvb2/m5uaDg4NVVVV2dnYhISHu7u7g4OCJiYnPz88MDAwrKys9PT1AJLDSAAADa0lEQVR4nO2daXerIBBAxV0Ts7hlX/r//+SzTY1GGRqRlxnOmfupH6i9AaHMQMART6IkDtKlQ4FlGsRJ1Kk57Q+LOMN2G5DFi6Gl72JLSXD9F8twhS0EsAo7yzDAtgEJwtaSsOSv5rcl1eZ+sHpY+tgef+B/Wy4o9u4+7qKxjLEt/iQWTkRtMB+TRU6C7fAGiUO/wZsmdyiPlS2Bk2IrvEHq0JiqqbHBkWGY/0marYqyzL2K8NRpHydtHFdvD9g2co5xLyZuIo+SYn1uajEg3GE7jahOQ8kGD9tqwEYmKQSt2jyOmvs3U7PBNusTyyWFOGOb9dhHkKW4YLt1gFXZxO9HbLmWNIEtQzJRZwZLEhqNVirLLbZdS6GyJNPLS5VlhG3XYodlbkWLeyrLEtuupVJZ5th2LS4w1/ihwrZ7soUlEzqppUMIWlLKJYJj0QnbrI8LVSatyfqOfnt/Ix0zY3K5xN3CAskmjDwPOg6td/LJxe86UULtlew4Zt72HEXnMq/oDOYMwzAMwzAy7tWqyPO88ILsju0CEVzrNgkenurSUNp7DcWQxbAkVLCXTtpLwvvycJ9v6UJ/fJQJhgo+989ttvJ41N/Njk/MWXpgAmKRzF3YNGWZqTJOQuTzFjwMWR7k64S9Ul/4lsr8/IPTnCVDI5ZvSAoRzdjEZsLy8o5kM37q1+Z8y+sGzi6+ot/o8y0TxSrhgFo31p9vOc4yweguKMy3nITm2uaHLeu1DZaa2dtPWwqtyvy4pdZ69sctI53RyKxl+MYAP5pef9by6h2yrLooluMexTQmcaYsw+2zJZeFchoXafyfNGRZv2yY+fJVZTUiNjOW58H4clQ1u8aQacRSsitBoamxh8GEZbQfP/d2hovjWErHlgqeK03v5AYsk7v0yXCbTx/XDVgC+zsOYGVODycNWEreyh/ATZPTcwgGLKFHXylZgl0WfDExLMHv3YFbqjAswe+ssiVbsiVbsiVbsiVbsiVbsiVbsiVbsiVbsiVbsiVbsiVbsiVbsiVbWmU5f1d9DT0a3Ic7fRPZbe1KWd9HnwcoCK5236HfuE22ZBiGYV4heJzCiKUl5wXbcfYy3YMfOmJLzgS343x1csfPjImtOfffjjsULLmPwpK7PShrdvekWHLnjLDj/h5hyV1IgvS9Uv8Aj44xJSNuZIsAAAAASUVORK5CYII=" alt="" />

                    <img className="logo" style={{ marginLeft: "10px" }} src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAIMAAACDCAMAAACZQ1hUAAAAY1BMVEU7WZj///8rTpOps801VZY5V5dFYJxtf60vUZT8/P2jrckWQ474+fuJl7wnTJLZ3eidqMa8xNdZb6QgSJDm6fDK0N/Ey9xme6vQ1uOzu9KPnL9Sa6Lf4+x4ibNfdaeCkrgAPIuFcudxAAACW0lEQVR4nO3c7XKCMBAF0BA2GMQmRFSqpbXv/5SF2o8pLJrRZGPbvf86Q8kZgrLsmIhsiHV5ijj7ProYBGswMkUMrO3J4AwokSYKjBsM1iQCnGJsb1hDUgOsM2GTTcQpCqxwaaeinwwncpnYIHM2sIENbGBDQsPH01Cpc4/FiAaQRipR9Bn+0NIYIzVWJkQyKG2atnZb2236dJ21j9ud29cPLZUBmqI+FavTHDSFQZnFrpwRZNkDhUEXu1kAkaE6zF8DGgM027MCAoMSjxcI0Q1KX7oK8Q3V2buRxCAPlwmRDSA8CJEN0iU3QOtDiGtoPG7IyAb1tEpu0LUXIaqh6tIbpB8hZv0Az7OjWresv7J8mVaWoQwyxwHd8bXpy8jvIAVlKIPGP5kOppc+lkEBWj/ayqfVFeye3CCE8sWr4xfMgH1DdZXXv4aaiwKbir1fxy+qAfk+Ijc8+zWAoxoWbGADG9jAhv9u0D8jFWZojR4nYH9S58ufQUva/XKSY7iatsKG9MkeGYzaUCNlDbXhDuaibNMbVgXywkFtwKp9YsPmDgzbJr0BfeshNiAdEHID+tZDayhbrBdAa1g9pTds0JPRGiz20SQ27O7AkKNNEVoD3hS52lCOgg05OQZ7cl9tgMUoaJv20I6Owk92bV0No6C1fatHR+Hdyt/8fsEGNrCBDWxgAxvYwAY2sIENbGADG9jABjawgQ1/xBBiXfNNBuOCrO++xTCs7w6xzv0Ww7DOPcR6/1sM7+v9Q+x7cK3hc9+DAPs/mJnfBfnv/5AF2AdjNU15+Zwf+2C8AVa1MPhD1Rl0AAAAAElFTkSuQmCC" alt="" /> */}

                </div>

            </div>
        </div>

    </>

    )
}