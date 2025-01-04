import React from 'react'
import { Link } from 'react-router-dom'

export default function Navigator() {
    return (
        <div className='main-header'><h1>Dairy Farm</h1>
            <nav>
                <ul>
                    <Link to="/dairy-product-management"> <li>Home</li></Link>
                    <Link to="/dairy-product-management/customers"><li>Customer</li></Link>
                    <Link to="/dairy-product-management/addCustomer"><li>New Customer</li></Link>
                    <Link to="/dairy-product-management/orders"><li>Orders</li></Link>
                    <Link to="/dairy-product-management/products"><li>Products</li></Link>
                    <Link to="/dairy-product-management/about"><li>About</li></Link>
                    <Link to="/dairy-product-management/login"><li>Login</li></Link>
                </ul>
            </nav>
        </div>
    )
}
