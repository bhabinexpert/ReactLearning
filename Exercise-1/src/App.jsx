import { useState } from 'react';
import './App.css'

const allBrands = [
  {id:"1", brandName :"puma"},
  {id:"2", brandName :"fila"},
  {id:"3", brandName :"reebok"},
  {id:"4", brandName :"nike"},
  {id:"5", brandName :"addidas"},

]
  


function App() {

  const [search, setsearch] = useState()
  const [brands, setBrands] = useState(allBrands)

  const onSearchChange = (e) => {
  setsearch(e.target.value);
  const filteredBrands = e.target.value?.length>0 ? brands.filter(brand => brand.brandName.includes(e.target.value.toLowerCase())): allBrands;
  setBrands(filteredBrands)
}

  return (
    <>
    <input onChange ={onSearchChange} placeholder='Search a brand'/>
    <ul>
      {
        brands.map(brand => <li>{brand.brandName}</li>)
      }
    </ul>

      
    </>
  )
}

export default App
