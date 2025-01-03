import React from 'react'
import { Link } from 'react-router-dom'

export default function Navigator() {
    return (
        <div className='main-header'><h1>Dairy Farm</h1>
            <nav>
                <ul>
                    <Link to="/"> <li>Home</li></Link>
                    <Link to="/customers"><li>Customer</li></Link>
                    <Link to="/addCustomer"><li>New Customer</li></Link>
                    <Link to="/orders"><li>Orders</li></Link>
                    <Link to="/products"><li>Products</li></Link>
                    <Link to="/about"><li>About</li></Link>
                    <Link to="/login"><li>Login</li></Link>
                </ul>
            </nav>
        </div>
    )
}
