import axios from 'axios';
import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';

function NewCustomers() {
    const navigate = useNavigate();
    const [data, setData] = useState({
        name: "", contact: "", address: ""
    })

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setData({ ...data, [name]: value, });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        await axios.post("http://localhost:8080/dairyFarm/Customers/new", data)
            .then((res) => console.log(res.data)
            )
        navigate('/Customers')
            .catch((err) => {
                console.log("Error submitting data", err);
            })
    }



    return (
        <div>
            <h1>Add Customers</h1>
            <form onSubmit={handleSubmit}>
                <div >
                    <label htmlFor='name'>Customer Name</label>
                    <input type='text' name='name' required value={data.name} onChange={handleInputChange} />
                </div>
                <div >
                    <label htmlFor='contact'>Customer contact</label>
                    <input type='number' name='contact' required value={data.contact} onChange={handleInputChange} />
                </div>
                <div >
                    <label htmlFor='address'>Customer address</label>
                    <input type='text' name='address' value={data.address} onChange={handleInputChange} />
                </div>
                <button >Add Customer</button>
                <button onClick={() => navigate('/Customers')}>Cancel</button>
            </form>
        </div>
    )
}
export default NewCustomers;