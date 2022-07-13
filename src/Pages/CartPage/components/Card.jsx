import React from 'react'
import "./Card.css"
import Button from '@mui/material/Button';
import { useTheme } from '@mui/material/styles';
import OutlinedInput from '@mui/material/OutlinedInput';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import Carousel from '../Data/Carousel'
import { useEffect, useState } from 'react';
import axios from 'axios';
import { useParams } from 'react-router';
import { useDispatch } from 'react-redux';
import { updateCart } from '../../../Redux/action';



const Card = ({ link }) => {

  // Vineeth Code Starts

  const dispatch = useDispatch();
  const { id } = useParams()

  const [product, setProduct] = useState({
    images: []
  });
  const [image, setImage] = useState([]);

  useEffect(() => {
    axios.get(`https://mytheresa-server.herokuapp.com/${link}/${id}`).then(({ data }) => {
      setProduct(data)
      console.log(data)
    })

  }, [])

  useEffect(() => {
    for (const [key, value] of Object.entries(product.images)) {
      setImage((p) => [...p, value])
    }
    return (() => {
      setImage([]);
    })

  }, [product])

  // Vineeth Code ends
  const ITEM_HEIGHT = 48;
  const ITEM_PADDING_TOP = 8;
  const MenuProps = {
    PaperProps: {
      style: {
        maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
        width: 250,
      },
    },
  };
  const names = [
    'XS',
    'S',
    'M',
    'L',
    'XL',
    'XXL'
  ];

  const cartItem = [
    {
      img: "https://img.mytheresa.com/1088/1088/66/jpeg/catalog/product/6c/P00629755_b2.jpg",
      name: "cloth",
      price: "999",

    }
  ]
  function addtocart() {

    localStorage.setItem("cartItem", JSON.stringify(cartItem))
  }
  function getStyles(name, personName, theme) {
    return {
      fontWeight:
        personName.indexOf(name) === -1
          ? theme.typography.fontWeightRegular
          : theme.typography.fontWeightMedium,
    };
  }
  const theme = useTheme();
  const [personName, setPersonName] = React.useState([]);

  const handleChange = (event) => {
    const {
      target: { value },
    } = event;
    setPersonName(
      // On autofill we get a stringified value.
      typeof value === 'string' ? value.split(',') : value,
    );
  };
  return (

    <>
      <div className="main-box" >

        <div className=' main-box-left'>
          <Carousel image={image} />
        </div>
        <div className='main-box-right'>
          <div className='right-box-content' style={{ justifyContent: 'flex-start' }}>
            <h3>{product.brandName}</h3>
            <h5>{product.name}</h5>
            <h5>€ {product.price}</h5>
            <p>VAT exception. VAT not included. <br />
              item no. P00648789</p>
            <div>
              <FormControl sx={{ m: 1, width: 300, mt: 4 }}>
                <Select
                  multiple
                  displayEmpty
                  value={personName}
                  onChange={handleChange}
                  input={<OutlinedInput />}
                  renderValue={(selected) => {
                    if (selected.length === 0) {
                      return <em>Choose your size</em>;
                    }

                    return selected.join(', ');
                  }}
                  MenuProps={MenuProps}
                  inputProps={{ 'aria-label': 'Without label' }}
                >
                  <MenuItem disabled value="">
                    <em>Choose your size</em>
                  </MenuItem>
                  {names.map((name) => (
                    <MenuItem
                      key={name}
                      value={name}
                      style={getStyles(name, personName, theme)}
                    >
                      {name}
                    </MenuItem>
                  ))}
                </Select>
              </FormControl>
            </div>
            <Button onClick={() => (dispatch(updateCart(product)))} className='btn' variant="contained" style={{ color: 'White', backgroundColor: 'black', marginBottom: 9 }}>    ADD TO  SHOPPING BAG  </Button> <br />
            <Button className='btn' variant="contained" style={{ color: 'black', backgroundColor: 'aliceblue', width: '25', marginBottom: 35 }}>    ADD TO  WISHLIST   ✰ </Button>

            <hr />
          </div>
        </div>
      </div>
    </>
  )
}

export default Card