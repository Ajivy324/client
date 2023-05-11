import React,{ useEffect} from 'react'
import axios from 'axios';
import {Link} from 'react-router-dom';



const ProductList = (props) => {

    const {products, setProducts} = props;

    useEffect(()=>{
        axios.get("http://localhost:8000/api/products")
        .then((res)=>{
            console.log(res.data);
            setProducts(res.data);
        })
        .catch((err)=>{
            console.log(err);
        })
    }, [])

    return (
        <div>
            <h1>All Products:</h1>
            {
            products.map((product, i)=>{
                return(<div key={i}>
                    <p>{product.title}</p> 
                    <Link to={`/products/${product._id}`}>View {product.title}</Link>
                    <hr />
                    </div>
            )})
            }   
        </div>
    );
}

export default ProductList;