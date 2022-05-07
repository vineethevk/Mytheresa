*Add the MenPage folder in "Pages" folder and-->

*Add Rout for MenPage -->> copy paste both line of codes in App.js within Routes tag:
<Route path="/men" element={<MenPage/>}></Route>
<Route path="/menproducts" element={<MenProducts/>}></Route>

*In db.json overwrite this entire data(has GET data for rout path for both men and women product pages):
--->>>

{

  "womensdata1" :
[
  {
      "name": "Striped mohair-blend cardigan",
      "brandName": "MARNI",
      "price": 450,
      "size": [
          "S",
          "M",
          "L",
          "XL",
          "XXL"
      ],
      "images": {
          "img1": "https://img.mytheresa.com/560/560/33/jpeg/catalog/product/45/P00656680_b1.jpg",
          "img2": "https://img.mytheresa.com/1088/1088/66/jpeg/catalog/product/92/P00686241_b1.jpg",
          "img3": "https://img.mytheresa.com/1088/1088/66/jpeg/catalog/product/92/P00686241_d4.jpg",
          "img4": "https://img.mytheresa.com/1088/1088/66/jpeg/catalog/product/92/P00686241_d3.jpg"
      }
     
  },
  {
      "name": "Knitted cotton crewneck sweater",
      "brandName": "LORO PIANA",
      "price": 1690,
      "size": [
          "S",
          "M",
          "L",
          "XL",
          "XXL"
      ],
      "images": {
          "img1": "https://img.mytheresa.com/560/560/33/jpeg/catalog/product/96/P00648792_b1.jpg",
          "img2": "https://img.mytheresa.com/1088/1088/66/jpeg/catalog/product/e6/P00644088_b1.jpg",
          "img3": "https://img.mytheresa.com/1088/1088/66/jpeg/catalog/product/e6/P00644088_b2.jpg",
          "img4": "https://img.mytheresa.com/1088/1088/66/jpeg/catalog/product/e6/P00644088_d1.jpg"
      }
  },
  {
      "name": "Floral cotton-blend cardigan",
      "brandName": "ETRO",
      "price": 3416,
      "size": [
          "S",
          "M",
          "L",
          "XL",
          "XXL"
      ],
      "images": {
          "img1": "https://img.mytheresa.com/560/560/33/jpeg/catalog/product/86/P00651665_b1.jpg",
          "img2": "https://img.mytheresa.com/1088/1088/66/jpeg/catalog/product/56/P00652346_b1.jpg",
          "img3": "https://img.mytheresa.com/1088/1088/66/jpeg/catalog/product/56/P00652346_b2.jpg",
          "img4": "https://img.mytheresa.com/1088/1088/66/jpeg/catalog/product/56/P00652346_d1.jpg"
      }
  },
  {
      "name": "Intrecciato cotton-blend T-shirt",
      "brandName": "ETRO",
      "price": 1490,
      "size": [
          "S",
          "M",
          "L",
          "XL",
          "XXL"
      ],
      "images": {
          "img1": "https://img.mytheresa.com/560/560/33/jpeg/catalog/product/b9/P00654757_b1.jpg",
          "img2": "https://img.mytheresa.com/1088/1088/66/jpeg/catalog/product/e0/P00641425_b1.jpg",
          "img3": "https://img.mytheresa.com/1088/1088/66/jpeg/catalog/product/e0/P00641425_b2.jpg",
          "img4": "https://img.mytheresa.com/1088/1088/66/jpeg/catalog/product/e0/P00641425_d1.jpg"
      }
  },
  {
      "name": "Cotton-blend raglan sweatshirt",
      "brandName": "KHAITE",
      "price": 1560,
      "size": [
          "S",
          "M",
          "L",
          "XL",
          "XXL"
      ],
      "images": {
          "img1": "https://img.mytheresa.com/560/560/33/jpeg/catalog/product/b5/P00621903_b1.jpg",
          "img2": "https://img.mytheresa.com/1088/1088/66/jpeg/catalog/product/ca/P00661276_b1.jpg",
          "img3": "https://img.mytheresa.com/1088/1088/66/jpeg/catalog/product/ca/P00661276_b2.jpg",
          "img4": "https://img.mytheresa.com/1088/1088/66/jpeg/catalog/product/ca/P00661276_d1.jpg"
      }
  },
  {
      "name": "Longfield linen, cotton and silk polo shirt",
      "brandName": "KHAITE",
      "price": 355,
      "size": [
          "S",
          "M",
          "L",
          "XL",
          "XXL"
      ],
      "images": {
          "img1": "https://img.mytheresa.com/560/560/33/jpeg/catalog/product/36/P00611752_b1.jpg",
          "img2": "https://img.mytheresa.com/1088/1088/66/jpeg/catalog/product/7d/P00665679_b1.jpg",
          "img3": "https://img.mytheresa.com/1088/1088/66/jpeg/catalog/product/7d/P00665679_b2.jpg",
          "img4": "https://img.mytheresa.com/1088/1088/66/jpeg/catalog/product/7d/P00665679_d1.jpg"
      }
     
  },
  {
      "name": "Ribbed cotton polo shirt",
      "brandName": "KHAITE",
      "price": 290,
      "size": [
          "S",
          "M",
          "L",
          "XL",
          "XXL"
      ],
      "images": {
          "img1": "https://img.mytheresa.com/560/560/33/jpeg/catalog/product/2b/P00640546_b1.jpg",
          "img2": "https://img.mytheresa.com/1088/1088/66/jpeg/catalog/product/2e/P00682746_b1.jpg",
          "img3": "https://img.mytheresa.com/1088/1088/66/jpeg/catalog/product/2e/P00682746_b2.jpg",
          "img4": "https://img.mytheresa.com/1088/1088/66/jpeg/catalog/product/2e/P00682746_d1.jpg"
      }
  },
  {
      "name": "High-rise straight jeans",
      "brandName": "ETRO",
      "price": 550,
      "size": [
          "S",
          "M",
          "L",
          "XL",
          "XXL"
      ],
      "images": {
          "img1": "https://img.mytheresa.com/560/560/33/jpeg/catalog/product/c4/P00684220_b1.jpg",
          "img2": "https://img.mytheresa.com/1088/1088/66/jpeg/catalog/product/77/P00586565_b1.jpg",
          "img3": "https://img.mytheresa.com/1088/1088/66/jpeg/catalog/product/77/P00586565_b2.jpg",
          "img4": "https://img.mytheresa.com/1088/1088/66/jpeg/catalog/product/77/P00586565_d1.jpg"
      }
  },
  {
      "name": "Open-knit cotton sweater",
      "brandName": "GUCCI",
      "price": 680,
      "size": [
          "S",
          "M",
          "L",
          "XL",
          "XXL"
      ],
      "images": {
          "img1": "https://img.mytheresa.com/560/560/33/jpeg/catalog/product/65/P00674154_b1.jpg",
          "img2": "https://img.mytheresa.com/1088/1088/66/jpeg/catalog/product/3f/P00676835_b1.jpg",
          "img3": "https://img.mytheresa.com/1088/1088/66/jpeg/catalog/product/3f/P00676835_b2.jpg",
          "img4": "https://img.mytheresa.com/1088/1088/66/jpeg/catalog/product/3f/P00676835_d1.jpg"
      }
  },
  {
      "name": "Silk faille shorts",
      "brandName": "ALEXANDER MCQUEEN",
      "price": 890,
      "size": [
          "S",
          "M",
          "L",
          "XL",
          "XXL"
      ],
      "images": {
          "img1": "https://img.mytheresa.com/560/560/33/jpeg/catalog/product/65/P00674154_b1.jpg",
          "img2": "https://img.mytheresa.com/1088/1088/66/jpeg/catalog/product/49/P00653435_b1.jpg",
          "img3": "https://img.mytheresa.com/1088/1088/66/jpeg/catalog/product/49/P00653435_b2.jpg",
          "img4": "https://img.mytheresa.com/1088/1088/66/jpeg/catalog/product/49/P00653435_d1.jpg"
      }
  },
  {
      "name": "Cotton and linen twill shorts",
      "brandName": "GUCCI",
      "price": 290,
      "size": [
          "S",
          "M",
          "L",
          "XL",
          "XXL"
      ],
      "images": {
          "img1": "https://img.mytheresa.com/560/560/33/jpeg/catalog/product/05/P00634791_b1.jpg",
          "img2": "https://img.mytheresa.com/1088/1088/66/jpeg/catalog/product/e5/P00660590_b1.jpg",
          "img3": "https://img.mytheresa.com/1088/1088/66/jpeg/catalog/product/e5/P00660590_b2.jpg",
          "img4": "https://img.mytheresa.com/1088/1088/66/jpeg/catalog/product/e5/P00660590_d1.jpg"
      }
  },
  {
      "name": "Denim jacket",
      "brandName": "BOTTEGA VENETA",
      "price": 1265,
      "size": [
          "S",
          "M",
          "L",
          "XL",
          "XXL"
      ],
      "images": {
          "img1": "https://img.mytheresa.com/560/560/33/jpeg/catalog/product/43/P00654287_b1.jpg",
          "img2": "https://img.mytheresa.com/1088/1088/66/jpeg/catalog/product/79/P00676099_b1.jpg",
          "img3": "https://img.mytheresa.com/1088/1088/66/jpeg/catalog/product/79/P00676099_b2.jpg",
          "img4": "https://img.mytheresa.com/1088/1088/66/jpeg/catalog/product/79/P00676099_d1.jpg"
      }
  },
  {
      "name": "Turtleneck sweater",
      "brandName": "GUCCI",
      "price": 590,
      "size": [
          "S",
          "M",
          "L",
          "XL",
          "XXL"
      ],
      "images": {
          "img1": "https://img.mytheresa.com/560/560/33/jpeg/catalog/product/fc/P00653535_b1.jpg",
          "img2": "https://img.mytheresa.com/1088/1088/66/jpeg/catalog/product/ff/P00637796_b1.jpg",
          "img3": "https://img.mytheresa.com/1088/1088/66/jpeg/catalog/product/ff/P00637796_b2.jpg",
          "img4": "https://img.mytheresa.com/1088/1088/66/jpeg/catalog/product/ff/P00637796_d1.jpg"
      }
  },
  {
      "name": "Printed halterneck minidress",
      "brandName": "BOTTEGA VENETA",
      "price": 995,
      "size": [
          "S",
          "M",
          "L",
          "XL",
          "XXL"
      ],
      "images": {
          "img1": "https://img.mytheresa.com/560/560/33/jpeg/catalog/product/05/P00648803_b1.jpg",
          "img2": "https://img.mytheresa.com/1088/1088/66/jpeg/catalog/product/bf/P00637747_b1.jpg",
          "img3": "https://img.mytheresa.com/1088/1088/66/jpeg/catalog/product/bf/P00637747_b2.jpg",
          "img4": "https://img.mytheresa.com/1088/1088/66/jpeg/catalog/product/bf/P00637747_d1.jpg"
      }
  },
  {
      "name": "Technical knit jacket",
      "brandName": "BOTTEGA VENETA",
      "price": 990,
      "size": [
          "S",
          "M",
          "L",
          "XL",
          "XXL"
      ],
      "images": {
          "img1": "https://img.mytheresa.com/560/560/33/jpeg/catalog/product/26/P00687827_b1.jpg",
          "img2": "https://img.mytheresa.com/1088/1088/66/jpeg/catalog/product/bd/P00635950_b1.jpg",
          "img3": "https://img.mytheresa.com/1088/1088/66/jpeg/catalog/product/bd/P00635950_b2.jpg",
          "img4": "https://img.mytheresa.com/1088/1088/66/jpeg/catalog/product/bd/P00635950_d1.jpg"
      }
  },
  {
      "name": "Crochet-trimmed wool sweater vest",
      "brandName": "BOTTEGA VENETA",
      "price": 925,
      "size": [
          "S",
          "M",
          "L",
          "XL",
          "XXL"
      ],
      "images": {
          "img1": "https://img.mytheresa.com/560/560/33/jpeg/catalog/product/4f/P00640567_b1.jpg",
          "img2": "https://img.mytheresa.com/1088/1088/66/jpeg/catalog/product/ca/P00637792_b1.jpg",
          "img3": "https://img.mytheresa.com/1088/1088/66/jpeg/catalog/product/ca/P00637792_b2.jpg",
          "img4": "https://img.mytheresa.com/1088/1088/66/jpeg/catalog/product/ca/P00637792_d1.jpg"
      }
  },
  {
      "name": "Floral lace midi dress",
      "brandName": "GUCCI",
      "price": 5029,
      "size": ["S",
        "M",
        "L",
        "XL",
        "XXL"],
      "images": {
          "img1": "https://img.mytheresa.com/560/560/33/jpeg/catalog/product/b5/P00641997_b1.jpg",
          "img2": "https://img.mytheresa.com/1088/1088/66/jpeg/catalog/product/af/P00657413_b1.jpg",
          "img3": "https://img.mytheresa.com/1088/1088/66/jpeg/catalog/product/af/P00657413_d1.jpg",
          "img4": "https://img.mytheresa.com/1088/1088/66/jpeg/catalog/product/af/P00657413_d2.jpg"
      }
  },
  {
      "name": "Ribbed-knit midi dress",
      "brandName": "GUCCI",
      "price":  1265,
      "size": [
        "S",
        "M",
        "L",
        "XL",
        "XXL"
      ],
      "images": {
          "img1": "https://img.mytheresa.com/560/560/33/jpeg/catalog/product/26/P00639224_b1.jpg",
          "img2": "https://img.mytheresa.com/1088/1088/66/jpeg/catalog/product/64/P00614166_b1.jpg",
          "img3": "https://img.mytheresa.com/1088/1088/66/jpeg/catalog/product/64/P00614166_b2.jpg",
          "img4": "https://img.mytheresa.com/1088/1088/66/jpeg/catalog/product/64/P00614166_d1.jpg"
      }
  },
  {
      "name": "Wool minidress",
      "brandName": "GUCCI",
      "price":  1179,
      "size": [
        "S",
        "M",
        "L",
        "XL",
        "XXL"
      ],
      "images": {
          "img1": "https://img.mytheresa.com/560/560/33/jpeg/catalog/product/eb/P00641962_b1.jpg",
          "img2": "https://img.mytheresa.com/1088/1088/66/jpeg/catalog/product/97/P00614271_b1.jpg",
          "img3": "https://img.mytheresa.com/1088/1088/66/jpeg/catalog/product/97/P00614271_b2.jpg",
          "img4": "https://img.mytheresa.com/1088/1088/66/jpeg/catalog/product/97/P00614271_d1.jpg"
      }
  },
  {
      "name": "Horsebit denim minidress",
      "brandName": "GUCCI",
      "price": 1265,
      "size": [
        "S",
        "M",
        "L",
        "XL",
        "XXL"
      ],
      "images": {
          "img1": "https://img.mytheresa.com/560/560/33/jpeg/catalog/product/79/P00641999_b1.jpg",
          "img2": "https://img.mytheresa.com/1088/1088/66/jpeg/catalog/product/c3/P00675437_b1.jpg",
          "img3": "https://img.mytheresa.com/1088/1088/66/jpeg/catalog/product/c3/P00675437_d1.jpg",
          "img4": "https://img.mytheresa.com/1088/1088/66/jpeg/catalog/product/c3/P00675437_d2.jpg"
      }
  },
  {
      "name": "Interlocking G silk twill minidress",
      "brandName": "GUCCI",
      "price":  2355,
      "size": ["S",
        "M",
        "L",
        "XL",
        "XXL"],
      "images": {
          "img1": "https://img.mytheresa.com/560/560/33/jpeg/catalog/product/72/P00648877_b1.jpg",
          "img2": "https://img.mytheresa.com/1088/1088/66/jpeg/catalog/product/45/P00675458_b1.jpg",
          "img3": "https://img.mytheresa.com/1088/1088/66/jpeg/catalog/product/45/P00675458_b2.jpg",
          "img4": "https://img.mytheresa.com/1088/1088/66/jpeg/catalog/product/45/P00675458_d1.jpg"
      }
  },
  {
      "name": "Floral silk midi dress",
      "brandName": "GUCCI",
      "price": 1849,
      "size": [  "S",
        "M",
        "L",
        "XL",
        "XXL"],
      "images": {
          "img1": "https://img.mytheresa.com/560/560/33/jpeg/catalog/product/11/P00651588_b1.jpg",
          "img2": "https://img.mytheresa.com/1088/1088/66/jpeg/catalog/product/82/P00677164_b1.jpg",
          "img3": "https://img.mytheresa.com/1088/1088/66/jpeg/catalog/product/82/P00677164_b1.jpg",
          "img4": "https://img.mytheresa.com/1088/1088/66/jpeg/catalog/product/82/P00677164_b1.jpg"
      }
  },
  {
    "name": "Floral cotton muslin maxi dress",
    "brandName": "GUCCI ",
    "price":  2269,
    "size": [
        "S",
        "M",
        "L",
        "XL",
        "XXL"
    ],
    "images": {
        "img1": "https://img.mytheresa.com/560/560/33/jpeg/catalog/product/71/P00640557_b1.jpg",
        "img2": "https://img.mytheresa.com/1088/1088/66/jpeg/catalog/product/06/P00677204_b1.jpg",
        "img3": "https://img.mytheresa.com/1088/1088/66/jpeg/catalog/product/06/P00677204_b2.jpg",
        "img4": "https://img.mytheresa.com/1088/1088/66/jpeg/catalog/product/06/P00677204_d1.jpg"
    }
}
,
  {
      "name": "Tie-neck chiffon minidress",
      "brandName": "GUCCI",
      "price": 2355,
      "size": ["S",
        "M",
        "L",
        "XL",
        "XXL"],
      "images": {
          "img1": "https://img.mytheresa.com/560/560/33/jpeg/catalog/product/e6/P00635881_b1.jpg",
          "img2": "https://img.mytheresa.com/1088/1088/66/jpeg/catalog/product/e3/P00677191_b1.jpg",
          "img3": "https://img.mytheresa.com/1088/1088/66/jpeg/catalog/product/e3/P00677191_d1.jpg",
          "img4": "https://img.mytheresa.com/1088/1088/66/jpeg/catalog/product/e3/P00677191_d3.jpg"
      }
  },
  {
      "name": "Wool coat",
      "brandName": "GUCCI",
      "price":  2105,
      "size": ["S",
        "M",
        "L",
        "XL",
        "XXL"],
      "images": {
          "img1": "https://img.mytheresa.com/560/560/33/jpeg/catalog/product/d3/P00654385_b1.jpg",
          "img2": "https://img.mytheresa.com/1088/1088/66/jpeg/catalog/product/78/P00694477_b1.jpg",
          "img3": "https://img.mytheresa.com/1088/1088/66/jpeg/catalog/product/78/P00694477_d1.jpg",
          "img4": "https://img.mytheresa.com/1088/1088/66/jpeg/catalog/product/78/P00694477_b1.jpg"
      }
  },
  {
      "name": "GG jacquard denim jacket",
      "brandName": "GUCCI",
      "price":  1555,
      "size": ["S",
        "M",
        "L",
        "XL",
        "XXL"],
      "images": {
          "img1": "https://img.mytheresa.com/560/560/33/jpeg/catalog/product/e0/P00653211_b1.jpg",
          "img2": "https://img.mytheresa.com/1088/1088/66/jpeg/catalog/product/d6/P00614022_b1.jpg",
          "img3": "https://img.mytheresa.com/1088/1088/66/jpeg/catalog/product/d6/P00614022_d1.jpg",
          "img4": "https://img.mytheresa.com/1088/1088/66/jpeg/catalog/product/d6/P00614022_d3.jpg"
      }
  },
  {
      "name": "High-neck jersey minidress",
      "brandName": "GUCCI",
      "price":   749,
      "size": ["S",
        "M",
        "L",
        "XL",
        "XXL"],
      "images": {
          "img1": "https://img.mytheresa.com/560/560/33/jpeg/catalog/product/fe/P00651818_b1.jpg",
          "img2": "https://img.mytheresa.com/1088/1088/66/jpeg/catalog/product/4a/P00676824_b1.jpg",
          "img3": "https://img.mytheresa.com/1088/1088/66/jpeg/catalog/product/4a/P00676824_d1.jpg",
          "img4": "https://img.mytheresa.com/1088/1088/66/jpeg/catalog/product/4a/P00676824.jpg"
      }
  }
],
"mendata" :
[
  {
      "name": "Striped mohair-blend cardigan",
      "brandName": "MARNI",
      "price": 450,
      "size": [
          "S",
          "M",
          "L",
          "XL",
          "XXL"
      ],
      "images": {
          "img1": "https://img.mytheresa.com/560/560/33/jpeg/catalog/product/45/P00656680_b1.jpg",
          "img2": "https://img.mytheresa.com/1088/1088/66/jpeg/catalog/product/92/P00686241_b1.jpg",
          "img3": "https://img.mytheresa.com/1088/1088/66/jpeg/catalog/product/92/P00686241_d4.jpg",
          "img4": "https://img.mytheresa.com/1088/1088/66/jpeg/catalog/product/92/P00686241_d3.jpg"
      }
     
  },
  {
      "name": "Knitted cotton crewneck sweater",
      "brandName": "LORO PIANA",
      "price": 1690,
      "size": [
          "S",
          "M",
          "L",
          "XL",
          "XXL"
      ],
      "images": {
          "img1": "https://img.mytheresa.com/560/560/33/jpeg/catalog/product/96/P00648792_b1.jpg",
          "img2": "https://img.mytheresa.com/1088/1088/66/jpeg/catalog/product/e6/P00644088_b1.jpg",
          "img3": "https://img.mytheresa.com/1088/1088/66/jpeg/catalog/product/e6/P00644088_b2.jpg",
          "img4": "https://img.mytheresa.com/1088/1088/66/jpeg/catalog/product/e6/P00644088_d1.jpg"
      }
  },
  {
      "name": "Floral cotton-blend cardigan",
      "brandName": "ETRO",
      "price": 3416,
      "size": [
          "S",
          "M",
          "L",
          "XL",
          "XXL"
      ],
      "images": {
          "img1": "https://img.mytheresa.com/560/560/33/jpeg/catalog/product/86/P00651665_b1.jpg",
          "img2": "https://img.mytheresa.com/1088/1088/66/jpeg/catalog/product/56/P00652346_b1.jpg",
          "img3": "https://img.mytheresa.com/1088/1088/66/jpeg/catalog/product/56/P00652346_b2.jpg",
          "img4": "https://img.mytheresa.com/1088/1088/66/jpeg/catalog/product/56/P00652346_d1.jpg"
      }
  },
  {
      "name": "Intrecciato cotton-blend T-shirt",
      "brandName": "ETRO",
      "price": 1490,
      "size": [
          "S",
          "M",
          "L",
          "XL",
          "XXL"
      ],
      "images": {
          "img1": "https://img.mytheresa.com/560/560/33/jpeg/catalog/product/b9/P00654757_b1.jpg",
          "img2": "https://img.mytheresa.com/1088/1088/66/jpeg/catalog/product/e0/P00641425_b1.jpg",
          "img3": "https://img.mytheresa.com/1088/1088/66/jpeg/catalog/product/e0/P00641425_b2.jpg",
          "img4": "https://img.mytheresa.com/1088/1088/66/jpeg/catalog/product/e0/P00641425_d1.jpg"
      }
  },
  {
      "name": "Cotton-blend raglan sweatshirt",
      "brandName": "KHAITE",
      "price": 1560,
      "size": [
          "S",
          "M",
          "L",
          "XL",
          "XXL"
      ],
      "images": {
          "img1": "https://img.mytheresa.com/560/560/33/jpeg/catalog/product/b5/P00621903_b1.jpg",
          "img2": "https://img.mytheresa.com/1088/1088/66/jpeg/catalog/product/ca/P00661276_b1.jpg",
          "img3": "https://img.mytheresa.com/1088/1088/66/jpeg/catalog/product/ca/P00661276_b2.jpg",
          "img4": "https://img.mytheresa.com/1088/1088/66/jpeg/catalog/product/ca/P00661276_d1.jpg"
      }
  },
  {
      "name": "Longfield linen, cotton and silk polo shirt",
      "brandName": "KHAITE",
      "price": 355,
      "size": [
          "S",
          "M",
          "L",
          "XL",
          "XXL"
      ],
      "images": {
          "img1": "https://img.mytheresa.com/560/560/33/jpeg/catalog/product/36/P00611752_b1.jpg",
          "img2": "https://img.mytheresa.com/1088/1088/66/jpeg/catalog/product/7d/P00665679_b1.jpg",
          "img3": "https://img.mytheresa.com/1088/1088/66/jpeg/catalog/product/7d/P00665679_b2.jpg",
          "img4": "https://img.mytheresa.com/1088/1088/66/jpeg/catalog/product/7d/P00665679_d1.jpg"
      }
     
  },
  {
      "name": "Ribbed cotton polo shirt",
      "brandName": "KHAITE",
      "price": 290,
      "size": [
          "S",
          "M",
          "L",
          "XL",
          "XXL"
      ],
      "images": {
          "img1": "https://img.mytheresa.com/560/560/33/jpeg/catalog/product/2b/P00640546_b1.jpg",
          "img2": "https://img.mytheresa.com/1088/1088/66/jpeg/catalog/product/2e/P00682746_b1.jpg",
          "img3": "https://img.mytheresa.com/1088/1088/66/jpeg/catalog/product/2e/P00682746_b2.jpg",
          "img4": "https://img.mytheresa.com/1088/1088/66/jpeg/catalog/product/2e/P00682746_d1.jpg"
      }
  },
  {
      "name": "High-rise straight jeans",
      "brandName": "ETRO",
      "price": 550,
      "size": [
          "S",
          "M",
          "L",
          "XL",
          "XXL"
      ],
      "images": {
          "img1": "https://img.mytheresa.com/560/560/33/jpeg/catalog/product/c4/P00684220_b1.jpg",
          "img2": "https://img.mytheresa.com/1088/1088/66/jpeg/catalog/product/77/P00586565_b1.jpg",
          "img3": "https://img.mytheresa.com/1088/1088/66/jpeg/catalog/product/77/P00586565_b2.jpg",
          "img4": "https://img.mytheresa.com/1088/1088/66/jpeg/catalog/product/77/P00586565_d1.jpg"
      }
  },
  {
      "name": "Open-knit cotton sweater",
      "brandName": "GUCCI",
      "price": 680,
      "size": [
          "S",
          "M",
          "L",
          "XL",
          "XXL"
      ],
      "images": {
          "img1": "https://img.mytheresa.com/560/560/33/jpeg/catalog/product/65/P00674154_b1.jpg",
          "img2": "https://img.mytheresa.com/1088/1088/66/jpeg/catalog/product/3f/P00676835_b1.jpg",
          "img3": "https://img.mytheresa.com/1088/1088/66/jpeg/catalog/product/3f/P00676835_b2.jpg",
          "img4": "https://img.mytheresa.com/1088/1088/66/jpeg/catalog/product/3f/P00676835_d1.jpg"
      }
  },
  {
      "name": "Silk faille shorts",
      "brandName": "ALEXANDER MCQUEEN",
      "price": 890,
      "size": [
          "S",
          "M",
          "L",
          "XL",
          "XXL"
      ],
      "images": {
          "img1": "https://img.mytheresa.com/560/560/33/jpeg/catalog/product/65/P00674154_b1.jpg",
          "img2": "https://img.mytheresa.com/1088/1088/66/jpeg/catalog/product/49/P00653435_b1.jpg",
          "img3": "https://img.mytheresa.com/1088/1088/66/jpeg/catalog/product/49/P00653435_b2.jpg",
          "img4": "https://img.mytheresa.com/1088/1088/66/jpeg/catalog/product/49/P00653435_d1.jpg"
      }
  },
  {
      "name": "Cotton and linen twill shorts",
      "brandName": "GUCCI",
      "price": 290,
      "size": [
          "S",
          "M",
          "L",
          "XL",
          "XXL"
      ],
      "images": {
          "img1": "https://img.mytheresa.com/560/560/33/jpeg/catalog/product/05/P00634791_b1.jpg",
          "img2": "https://img.mytheresa.com/1088/1088/66/jpeg/catalog/product/e5/P00660590_b1.jpg",
          "img3": "https://img.mytheresa.com/1088/1088/66/jpeg/catalog/product/e5/P00660590_b2.jpg",
          "img4": "https://img.mytheresa.com/1088/1088/66/jpeg/catalog/product/e5/P00660590_d1.jpg"
      }
  },
  {
      "name": "Denim jacket",
      "brandName": "BOTTEGA VENETA",
      "price": 1265,
      "size": [
          "S",
          "M",
          "L",
          "XL",
          "XXL"
      ],
      "images": {
          "img1": "https://img.mytheresa.com/560/560/33/jpeg/catalog/product/43/P00654287_b1.jpg",
          "img2": "https://img.mytheresa.com/1088/1088/66/jpeg/catalog/product/79/P00676099_b1.jpg",
          "img3": "https://img.mytheresa.com/1088/1088/66/jpeg/catalog/product/79/P00676099_b2.jpg",
          "img4": "https://img.mytheresa.com/1088/1088/66/jpeg/catalog/product/79/P00676099_d1.jpg"
      }
  },
  {
      "name": "Turtleneck sweater",
      "brandName": "GUCCI",
      "price": 590,
      "size": [
          "S",
          "M",
          "L",
          "XL",
          "XXL"
      ],
      "images": {
          "img1": "https://img.mytheresa.com/560/560/33/jpeg/catalog/product/fc/P00653535_b1.jpg",
          "img2": "https://img.mytheresa.com/1088/1088/66/jpeg/catalog/product/ff/P00637796_b1.jpg",
          "img3": "https://img.mytheresa.com/1088/1088/66/jpeg/catalog/product/ff/P00637796_b2.jpg",
          "img4": "https://img.mytheresa.com/1088/1088/66/jpeg/catalog/product/ff/P00637796_d1.jpg"
      }
  },
  {
      "name": "Printed halterneck minidress",
      "brandName": "BOTTEGA VENETA",
      "price": 995,
      "size": [
          "S",
          "M",
          "L",
          "XL",
          "XXL"
      ],
      "images": {
          "img1": "https://img.mytheresa.com/560/560/33/jpeg/catalog/product/05/P00648803_b1.jpg",
          "img2": "https://img.mytheresa.com/1088/1088/66/jpeg/catalog/product/bf/P00637747_b1.jpg",
          "img3": "https://img.mytheresa.com/1088/1088/66/jpeg/catalog/product/bf/P00637747_b2.jpg",
          "img4": "https://img.mytheresa.com/1088/1088/66/jpeg/catalog/product/bf/P00637747_d1.jpg"
      }
  },
  {
      "name": "Technical knit jacket",
      "brandName": "BOTTEGA VENETA",
      "price": 990,
      "size": [
          "S",
          "M",
          "L",
          "XL",
          "XXL"
      ],
      "images": {
          "img1": "https://img.mytheresa.com/560/560/33/jpeg/catalog/product/26/P00687827_b1.jpg",
          "img2": "https://img.mytheresa.com/1088/1088/66/jpeg/catalog/product/bd/P00635950_b1.jpg",
          "img3": "https://img.mytheresa.com/1088/1088/66/jpeg/catalog/product/bd/P00635950_b2.jpg",
          "img4": "https://img.mytheresa.com/1088/1088/66/jpeg/catalog/product/bd/P00635950_d1.jpg"
      }
  },
  {
      "name": "Crochet-trimmed wool sweater vest",
      "brandName": "BOTTEGA VENETA",
      "price": 925,
      "size": [
          "S",
          "M",
          "L",
          "XL",
          "XXL"
      ],
      "images": {
          "img1": "https://img.mytheresa.com/560/560/33/jpeg/catalog/product/4f/P00640567_b1.jpg",
          "img2": "https://img.mytheresa.com/1088/1088/66/jpeg/catalog/product/ca/P00637792_b1.jpg",
          "img3": "https://img.mytheresa.com/1088/1088/66/jpeg/catalog/product/ca/P00637792_b2.jpg",
          "img4": "https://img.mytheresa.com/1088/1088/66/jpeg/catalog/product/ca/P00637792_d1.jpg"
      }
  },
  {
      "name": "Floral lace midi dress",
      "brandName": "GUCCI",
      "price": 5029,
      "size": ["S",
        "M",
        "L",
        "XL",
        "XXL"],
      "images": {
          "img1": "https://img.mytheresa.com/560/560/33/jpeg/catalog/product/b5/P00641997_b1.jpg",
          "img2": "https://img.mytheresa.com/1088/1088/66/jpeg/catalog/product/af/P00657413_b1.jpg",
          "img3": "https://img.mytheresa.com/1088/1088/66/jpeg/catalog/product/af/P00657413_d1.jpg",
          "img4": "https://img.mytheresa.com/1088/1088/66/jpeg/catalog/product/af/P00657413_d2.jpg"
      }
  },
  {
      "name": "Ribbed-knit midi dress",
      "brandName": "GUCCI",
      "price":  1265,
      "size": [
        "S",
        "M",
        "L",
        "XL",
        "XXL"
      ],
      "images": {
          "img1": "https://img.mytheresa.com/560/560/33/jpeg/catalog/product/26/P00639224_b1.jpg",
          "img2": "https://img.mytheresa.com/1088/1088/66/jpeg/catalog/product/64/P00614166_b1.jpg",
          "img3": "https://img.mytheresa.com/1088/1088/66/jpeg/catalog/product/64/P00614166_b2.jpg",
          "img4": "https://img.mytheresa.com/1088/1088/66/jpeg/catalog/product/64/P00614166_d1.jpg"
      }
  },
  {
      "name": "Wool minidress",
      "brandName": "GUCCI",
      "price":  1179,
      "size": [
        "S",
        "M",
        "L",
        "XL",
        "XXL"
      ],
      "images": {
          "img1": "https://img.mytheresa.com/560/560/33/jpeg/catalog/product/eb/P00641962_b1.jpg",
          "img2": "https://img.mytheresa.com/1088/1088/66/jpeg/catalog/product/97/P00614271_b1.jpg",
          "img3": "https://img.mytheresa.com/1088/1088/66/jpeg/catalog/product/97/P00614271_b2.jpg",
          "img4": "https://img.mytheresa.com/1088/1088/66/jpeg/catalog/product/97/P00614271_d1.jpg"
      }
  },
  {
      "name": "Horsebit denim minidress",
      "brandName": "GUCCI",
      "price": 1265,
      "size": [
        "S",
        "M",
        "L",
        "XL",
        "XXL"
      ],
      "images": {
          "img1": "https://img.mytheresa.com/560/560/33/jpeg/catalog/product/79/P00641999_b1.jpg",
          "img2": "https://img.mytheresa.com/1088/1088/66/jpeg/catalog/product/c3/P00675437_b1.jpg",
          "img3": "https://img.mytheresa.com/1088/1088/66/jpeg/catalog/product/c3/P00675437_d1.jpg",
          "img4": "https://img.mytheresa.com/1088/1088/66/jpeg/catalog/product/c3/P00675437_d2.jpg"
      }
  },
  {
      "name": "Interlocking G silk twill minidress",
      "brandName": "GUCCI",
      "price":  2355,
      "size": ["S",
        "M",
        "L",
        "XL",
        "XXL"],
      "images": {
          "img1": "https://img.mytheresa.com/560/560/33/jpeg/catalog/product/72/P00648877_b1.jpg",
          "img2": "https://img.mytheresa.com/1088/1088/66/jpeg/catalog/product/45/P00675458_b1.jpg",
          "img3": "https://img.mytheresa.com/1088/1088/66/jpeg/catalog/product/45/P00675458_b2.jpg",
          "img4": "https://img.mytheresa.com/1088/1088/66/jpeg/catalog/product/45/P00675458_d1.jpg"
      }
  },
  {
      "name": "Floral silk midi dress",
      "brandName": "GUCCI",
      "price": 1849,
      "size": [  "S",
        "M",
        "L",
        "XL",
        "XXL"],
      "images": {
          "img1": "https://img.mytheresa.com/560/560/33/jpeg/catalog/product/11/P00651588_b1.jpg",
          "img2": "https://img.mytheresa.com/1088/1088/66/jpeg/catalog/product/82/P00677164_b1.jpg",
          "img3": "https://img.mytheresa.com/1088/1088/66/jpeg/catalog/product/82/P00677164_b1.jpg",
          "img4": "https://img.mytheresa.com/1088/1088/66/jpeg/catalog/product/82/P00677164_b1.jpg"
      }
  },
  {
    "name": "Floral cotton muslin maxi dress",
    "brandName": "GUCCI ",
    "price":  2269,
    "size": [
        "S",
        "M",
        "L",
        "XL",
        "XXL"
    ],
    "images": {
        "img1": "https://img.mytheresa.com/560/560/33/jpeg/catalog/product/71/P00640557_b1.jpg",
        "img2": "https://img.mytheresa.com/1088/1088/66/jpeg/catalog/product/06/P00677204_b1.jpg",
        "img3": "https://img.mytheresa.com/1088/1088/66/jpeg/catalog/product/06/P00677204_b2.jpg",
        "img4": "https://img.mytheresa.com/1088/1088/66/jpeg/catalog/product/06/P00677204_d1.jpg"
    }
}
,
  {
      "name": "Tie-neck chiffon minidress",
      "brandName": "GUCCI",
      "price": 2355,
      "size": ["S",
        "M",
        "L",
        "XL",
        "XXL"],
      "images": {
          "img1": "https://img.mytheresa.com/560/560/33/jpeg/catalog/product/e6/P00635881_b1.jpg",
          "img2": "https://img.mytheresa.com/1088/1088/66/jpeg/catalog/product/e3/P00677191_b1.jpg",
          "img3": "https://img.mytheresa.com/1088/1088/66/jpeg/catalog/product/e3/P00677191_d1.jpg",
          "img4": "https://img.mytheresa.com/1088/1088/66/jpeg/catalog/product/e3/P00677191_d3.jpg"
      }
  },
  {
      "name": "Wool coat",
      "brandName": "GUCCI",
      "price":  2105,
      "size": ["S",
        "M",
        "L",
        "XL",
        "XXL"],
      "images": {
          "img1": "https://img.mytheresa.com/560/560/33/jpeg/catalog/product/d3/P00654385_b1.jpg",
          "img2": "https://img.mytheresa.com/1088/1088/66/jpeg/catalog/product/78/P00694477_b1.jpg",
          "img3": "https://img.mytheresa.com/1088/1088/66/jpeg/catalog/product/78/P00694477_d1.jpg",
          "img4": "https://img.mytheresa.com/1088/1088/66/jpeg/catalog/product/78/P00694477_b1.jpg"
      }
  },
  {
      "name": "GG jacquard denim jacket",
      "brandName": "GUCCI",
      "price":  1555,
      "size": ["S",
        "M",
        "L",
        "XL",
        "XXL"],
      "images": {
          "img1": "https://img.mytheresa.com/560/560/33/jpeg/catalog/product/e0/P00653211_b1.jpg",
          "img2": "https://img.mytheresa.com/1088/1088/66/jpeg/catalog/product/d6/P00614022_b1.jpg",
          "img3": "https://img.mytheresa.com/1088/1088/66/jpeg/catalog/product/d6/P00614022_d1.jpg",
          "img4": "https://img.mytheresa.com/1088/1088/66/jpeg/catalog/product/d6/P00614022_d3.jpg"
      }
  },
  {
      "name": "High-neck jersey minidress",
      "brandName": "GUCCI",
      "price":   749,
      "size": ["S",
        "M",
        "L",
        "XL",
        "XXL"],
      "images": {
          "img1": "https://img.mytheresa.com/560/560/33/jpeg/catalog/product/fe/P00651818_b1.jpg",
          "img2": "https://img.mytheresa.com/1088/1088/66/jpeg/catalog/product/4a/P00676824_b1.jpg",
          "img3": "https://img.mytheresa.com/1088/1088/66/jpeg/catalog/product/4a/P00676824_d1.jpg",
          "img4": "https://img.mytheresa.com/1088/1088/66/jpeg/catalog/product/4a/P00676824.jpg"
      }
  }
]
}