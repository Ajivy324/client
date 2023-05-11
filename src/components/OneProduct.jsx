import React, {useEffect, useState } from 'react'
import axios from 'axios';
import {useParams} from "react-router-dom";
import { Link } from 'react-router-dom';




const OneProduct = (props) => {
    const [product, setProduct] = useState({})
    const {id} = useParams();
    useEffect(() => {
        axios.get("http://localhost:8000/api/products/" + id)
            .then( res => {
                console.log(res.data);
                setProduct(res.data);
            })
            .catch( err => console.log(err) );
    }, []);


    return (
        <div>
            <p>Title: {product.title}</p>
            <p>Price: ${product.price}</p>
            <p>Description: {product.descrip}</p>
            <Link to={'/home'}>Back to Products</Link>
        </div>
    )
}

export default OneProduct