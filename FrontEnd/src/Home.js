import { useState, useEffect } from 'react';
import './App.css';
import axios from 'axios';
import { Link } from 'react-router-dom';

function Home() {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const [data, setData] = useState([]);

  const getData = async () => {
    const result = await axios.get(`http://localhost:3001/read`);
    setData(await result.data);
  }

  useEffect(() => {
    getData();
  }, [data]);

  const form = {
    firstName,
    lastName,
    email,
    password
  };

  const addProduct = e => {
    e.preventDefault();
    axios.post(`http://localhost:3001/save`,form);
    getData();
  }

  const deleteValue = (id,e) => {
    axios.delete(`http://localhost:3001/delete/${id}`);
    getData();
  }

  return (
    <>
      <div className="App">
        <div className='container'>
          <div className='row'>
            <h1>Crud Using MREN</h1>
            <form onSubmit={addProduct} method='post'>
              <div className="form-row">
                <div className="col">
                  <input type="text" className="form-control" placeholder="First name" value={firstName} onChange={(e) => setFirstName(e.target.value)} />
                </div>
                <div className="col">
                  <input type="text" className="form-control" placeholder="Last name" value={lastName} onChange={(e) => setLastName(e.target.value)} />
                </div>
              </div>
              <div className="form-row">
                <div className="col">
                  <input type="text" className="form-control" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} />
                </div>
                <div className="col">
                  <input type="text" className="form-control" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} />
                </div>
              </div>
              <div className='form-row'>
                <input type='submit' className='form-control' placeholder='Submit' />
              </div>
            </form>
          </div>
        </div>
      </div>
      {/* Table Data */}

      <div className='py-5'>
        <h1 className='text-center py-5'>Table Data</h1>
        <table className="table">
          <thead className="thead-dark">
            <tr>
              <th scope="col">#</th>
              <th scope="col">First</th>
              <th scope="col">Last</th>
              <th scope="col">Handle</th>
              <th scope="col">Update</th>
              <th scope="col">Delete</th>
            </tr>
          </thead>
          <tbody>
            {
              data.map((product, key) =>
                <tr key={key}>
                  <th scope="row">{key}</th>
                  <td>{product.firstName}</td>
                  <td>{product.lastName}</td>
                  <td>{product.email}</td>
                  <td><Link to={`/Update/${product._id}`} className='btn btn-success'>Update</Link></td>
                  <td><button  className = "btn btn-danger" onClick={()=>deleteValue(product._id)}>Delete</button></td>
                </tr>
              )
            }
          </tbody>
        </table>
      </div>
    </>
  );
}

export default Home;
