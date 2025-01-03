import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom';

function UpdateCustomer() {
  
    const [customer, setCustomer] = useState({ name: '', contact: '', address: '' });
//   const [name,contact,address]=customer;

    const navigate = useNavigate();
  
    const { id } = useParams();
  
    useEffect(() => {
        axios.get(`http://localhost:8080/dairyFarm/Customers/allCustomers/${id}`)
            .then((response) => {
                setCustomer(response.data)
            });
    },[id]);

    const handleInputChange = (e) => {
        setCustomer({ ...customer, [e.target.name]: e.target.value });
    }
    const updateData = async (e) => {
        e.preventDefault();
        await axios.patch(`http://localhost:8080/dairyFarm/Customers/update/${id}`, customer)
            .then((response) => {
                console.log(response.data)
            })
        navigate('/Customers')
            .catch((err) => {
                console.log("Error submitting data", err);
            })
    }

    return (
        <div><form onSubmit={updateData}>
            <div >
                <label htmlFor='name'>Customer Name</label>
                <input type='text' name='name' value={customer.name} onChange={handleInputChange} />
            </div>
            <div >
                <label htmlFor='contact'>Customer contact</label>
                <input type='number' name='contact' value={customer.contact} onChange={handleInputChange} />
            </div>
            <div >
                <label htmlFor='address'>Customer address</label>
                <input type='text' name='address' value={customer.address} onChange={handleInputChange} />
            </div>
            <button >Update</button>
            <button onClick={() => navigate('/Customers')}>Cancel</button>
        </form></div>

    )
}
export default UpdateCustomer;