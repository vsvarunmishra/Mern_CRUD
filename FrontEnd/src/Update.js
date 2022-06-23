import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Navigate, useNavigate, useParams } from 'react-router-dom';

/**
* @author
* @function Update
**/

export const Update = (props) => {

    const { id } = useParams();
    const Navigate = useNavigate();

    const [data, setData] = useState({
        firstName:'',
        lastName:'',
        email:''
    });
    useEffect(() => {
        getData();
    }, []);


    const getData = async () => {
        const result = await axios.get(`http://localhost:3001/readById/${id}`);
        setData({
            firstName:result.data.firstName,
            lastName:result.data.lastName,
            email:result.data.email
        });
    }

   
    

    const inputHandler = e => {
        setData({...data, [e.target.name]: e.target.value});
    }

    const { firstName,lastName,email } = data;

    

    const updateProduct = async (e) => {
        e.preventDefault();
       const res1 = await axios.put(`http://localhost:3001/update/${id}`, data);
       
        Navigate(`/`)
        

    }
    
    return (
        <>
            <div className="App">
                <div className='container'>
                    <div className='row'>
                        <h1>Update Page</h1>
                        <form onSubmit={updateProduct} method='post'>
                            <div className="form-row">
                                <div className="col">
                                    <input type="text" name='firstName' className="form-control" placeholder="name" value={firstName} onChange={(e) => inputHandler(e)} />
                                </div>
                                <div className="col">
                                    <input type="text" name='lastName' className="form-control" placeholder="Last name" value={lastName} onChange={(e) => inputHandler(e)} />
                                </div>
                            </div>
                            <div className="form-row">
                                <div className="col">
                                    <input type="text" name='email' className="form-control" placeholder="Email" value={email} onChange={(e) => inputHandler(e)} />
                                </div>
                                {/* <div className="col">
                                    <input type="text" className="form-control" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} />
                                </div> */}
                            </div>
                            <div className='form-row'>
                                <input type='submit' className='form-control' placeholder='Submit'  />
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </>
    );

}

export default Update;