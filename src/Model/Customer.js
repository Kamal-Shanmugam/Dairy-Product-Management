import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';

function Customer() {

    const [customer, setCustomer] = useState([]);
    // const navigate = useNavigate();
    // const { id } = useParams();

    //to fetch all details
    const getAllCustomers = async () => {
        await axios.get('http://localhost:8080/dairyFarm/Customers/allCustomers')
            .then((response) => {
                console.log(response.data)
                setCustomer(response.data)
                setfilterCustomer(response.data) //to display all data includes not filter otherwise all the data are hidden
            });
    }
    useEffect(() => {
        getAllCustomers();
    }, []);

    // search box 
    //create useState to store  update filtered value
    const [filterCustomer, setfilterCustomer] = useState([]);

    //create a function to search customers users & address
    const handleSearchCustomer = (e) => {

        const searchText = e.target.value.toLowerCase();    // create a variable to store key pressed for temporary 

        const filteredCustomer = customer.filter((people) =>    // create variable to store the filtered value 
            people.name.toLowerCase().includes(searchText) ||   // writing logic to filter both name and address
            people.address.toLowerCase().includes(searchText))

        setfilterCustomer(filteredCustomer); // setting the value for state variable
    };

    //Delete customers
    const handleDelete = async (id) => {
        const isConfirm = window.confirm("Are you sure want to delete this customer?")
        if (isConfirm) {
            await axios.delete(`http://localhost:8080/dairyFarm/Customers/delete/${id}`)
                .then((response) => {
                    console.log(response.data)
                });
            getAllCustomers();  // after deleting the data... it then reload all the data
        }
    };


    return (<>
        <div>
            <h1>Customers Of Dairy Farm</h1>

            <div className='NavBar'>
                <input type='search' placeholder='Search Customers Here' onChange={handleSearchCustomer} />
                <button className='btn green'  ><Link to="/addCustomer">Add Customer</Link></button>
            </div>
            <table className='Customer-table'>
                <thead>
                    <tr>
                        <th>S No</th>
                        <th>Customer Name</th>
                        <th>Contact</th>
                        <th>Address</th>
                        <th>Edit</th>
                        <th>Delete</th>
                    </tr>
                </thead>
                <tbody>
                    {filterCustomer && filterCustomer.map((people, index) => {
                        return (
                            <tr key={people.id}>
                                <td>{index + 1}</td>
                                <td>{people.name}</td>
                                <td>{people.contact}</td>
                                <td>{people.address}</td>
                                <Link to={`/updateCustomer/${people.id}`}>Edit</Link>
                                <td><button className='btn' onClick={() => handleDelete(people.id)}>Delete</button></td>
                            </tr>
                        )
                    }
                    )}


                </tbody>
            </table>
        </div>

    </>

    )
}
export default Customer;