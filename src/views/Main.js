import React, {useState} from 'react'
import Form from '../components/Form';
import ProductList from '../components/ProductList';
import axios from 'axios';
import {Link} from 'react-router-dom';

const Main = () => {

    const[products, setProducts] = useState([]);
    const removeFromDom = productId => {
        setProducts(products.filter(product => product._id !== productId));
    }

    return (
        <div>
            <Form products={products} setProducts={setProducts}/>
            <hr/>
            <ProductList products={products} setProducts={setProducts}
            removeFromDom={removeFromDom}/>
        </div>
    )
}

export default Main;