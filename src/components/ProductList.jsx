import React,{ useEffect} from 'react'
import axios from 'axios';
import {Link} from 'react-router-dom';



const ProductList = (props) => {

    const {removeFromDom,products, setProducts} = props;

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

    const deleteProduct = (productId) => {
        axios.delete('http://localhost:8000/api/products/' + productId)
            .then(res => {
                removeFromDom(productId)
            })
            .catch(err => console.log(err));
    }

    return (
        <div>
            <h1>All Products:</h1>
            {
            products.map((product, i)=>{
                return(<div key={i}>
                    <h2>{product.title}</h2>
                    <Link to={`/products/${product._id}`}>View {product.title}</Link><br />
                    <Link to={'/products/edit/' + product._id}>Edit {product.title}</Link><br />
                    <button onClick={(e)=>{deleteProduct(product._id)}}>Delete {product.title}</button>
                    <hr />
                    </div>
            )})
            }   
        </div>
    );
}

export default ProductList;