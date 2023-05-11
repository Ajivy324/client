import React, {useState} from 'react'
import Form from '../components/Form';
import ProductList from '../components/ProductList';

const Main = () => {

    const[products, setProducts] = useState([]);

    return (
        <div>
            <Form products={products} setProducts={setProducts}/>
            <hr/>
            <ProductList products={products} setProducts={setProducts}/>
        </div>
    )
}

export default Main;