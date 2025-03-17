import { useState } from 'react'
import './App.css'
import ProductList from './components/ProductList'

function App() {
  const [products] = useState([
    {
      id: 1,
      name: "Nintendo Switch",
      price: "$400",
      description: "Amazing game console"
    },
    {
      id: 2,
      name: "Android Phone",
      price: "$100",
      description: "High performance phone"
    },
    {
      id: 3,
      name: "Vizio TV",
      price: "$1200",
      description: "4k TV"
    },
    {
      id: 4,
      name: "Macbook",
      price: "$1200",
      description: "High performance laptop"
    },
  ])

  return (
    <>
    <h1>Product Listing</h1>
    <ProductList allProducts={products} />


    </>
  )
}

export default App
