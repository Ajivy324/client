import React, {useEffect,useState} from 'react'
import axios from 'axios';
import { useNavigate, useParams } from 'react-router-dom';
import { Link } from 'react-router-dom';


const UpdateProduct = (props) => {
    const {id} = useParams();
    const [title, setTitle] = useState ("")
    const [price, setPrice] = useState ("")
    const [descrip, setDescrip] = useState ("")
    const navigate = useNavigate();

    useEffect(() => {
        axios.get("http://localhost:8000/api/products/" + id)
            .then( res => {
                setTitle(res.data.title);
                setPrice(res.data.price);
                setDescrip(res.data.descrip);
            })
            .catch( err => console.log(err) );
    }, []);

    const UpdateProduct = (e) => {
        e.preventDefault();
        axios.patch("http://localhost:8000/api/products/" + id, {
            title,
            price,
            descrip
        })
            .then(res=>{
                console.log(res);
                navigate("/home");
            })
            .catch(err=>console.log(err))
    }

    return (
    <div>
        <h1>Update Product</h1>
        <form onSubmit={UpdateProduct}>
            <p>
                <label>Title</label><br/>
                <input type="text" name='title' className="form-control" onChange = {(e)=>setTitle(e.target.value)} value={ title}/>
            </p>
            <p>
                <label>Price</label><br/>
                <input type="text" name='price' className="form-control" onChange = {(e)=>setPrice(e.target.value)} value={price}/>
            </p>
            <p>
                <label>Description</label><br/>
                <input type="text" name='descrip' className="form-control"  onChange = {(e)=>setDescrip(e.target.value)} value={descrip}/>
            </p>
            <button type='submit' className="btn btn-primary" >Update</button>
        </form>
        <Link to={'/home'}>Back to Products</Link>
    </div>
    )
}

export default UpdateProduct;