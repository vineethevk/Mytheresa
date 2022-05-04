import { useState } from 'react'
import logo from './logo.svg'
import './App.css'
import {Routes,Route} from 'react-router-dom'
import {Womens} from "./components/Womens"
import {WomensList} from "./components/WomensProduct"



function App() {
 

  return (
    <div className="App">
     <Routes> 
      <Route path="/Womens" element={<Womens/>}></Route>
      <Route path="/WomensProduct" element={<WomensList />}></Route>
     </Routes>
   
    </div>
  )
}

export default App
