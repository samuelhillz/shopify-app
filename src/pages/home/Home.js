import React, { useEffect, useState } from 'react'
import './Home.css'
import Banner from '../../components/Banner/Banner'
import Products from '../../components/Banner/products/Products'
import { useLoaderData } from 'react-router-dom';

const Home = () => {
    const [products,setProducts] = useState([]);
    const data = useLoaderData();

console.log(data.data)

    useEffect(()=>{
        setProducts(data.data);

    },[data]);
  return (
    <div>
        <Banner/>
        <Products products={products} />
    </div>
  )
}

export default Home;