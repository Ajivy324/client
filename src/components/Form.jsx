import React, {useState, useEffect} from 'react'
import axios from 'axios';

const Form = () => {

    const [title, setTitle] = useState ("Loading...")
    const [price, setPrice] = useState ("Loading...")
    const [descrip, setDescrip] = useState ("Loading...")


    useEffect(() => {
        axios.get("http://localhost:8000/api")
            .then(res=>setTitle(res.data.title))
            .catch(err=>console.log(err))
    }, []);

    const onSubmitHandler = (e) => {
        e.preventDefault();
        axios.post('http://localhost:8000/api/products', {
            title,
            price,
            descrip
        })
            .then(res=>{
                console.log(res); 
                console.log(res.data);
            })
            .catch(err=>console.log(err))
    }
    return (
        <div>
            <form onSubmit={onSubmitHandler} className='col-md-5 offset-1'>
                <p>
                    <label>Title</label><br/>
                    <input type="text" class="form-control" onChange = {(e)=>setTitle(e.target.value)}/>
                </p>
                <p>
                    <label>Price</label><br/>
                    <input type="text" class="form-control" onChange = {(e)=>setPrice(e.target.value)}/>
                </p>
                <p>
                    <label>Description</label><br/>
                    <input type="text" class="form-control"  onChange = {(e)=>setDescrip(e.target.value)}/>
                </p>
                <button type='submit'>Create</button>
            </form>
        </div>
    )
}

export default Form;