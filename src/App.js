import './App.css';
import Customer from './Model/Customer';
import DairyFarm from './Model/DairyFarm';
import NewCustomers from './Model/NewCustomers';
import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider} from 'react-router-dom';
import Orders from './Model/Orders';
import Products from './Model/Products';
import About from './Model/About';
import RootLayout from './RootLayout';
import UpdateCustomer from './Model/UpdateCustomer';
import LoginPage from './Authenticate/LoginPage';
import SignupPage from './Authenticate/SignupPage';

function App() {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path='/dairy-product-management' element={<RootLayout />} >
        <Route index element={<DairyFarm />} />/dairy-product-management/
        <Route path='/dairy-product-management/customers' element={<Customer />} />
        <Route path='/dairy-product-management/addCustomer' element={<NewCustomers />} />
        <Route path='/dairy-product-management/updateCustomer/:id' element={<UpdateCustomer />} />
        <Route path='/dairy-product-management/orders' element={<Orders />} />
        <Route path='/dairy-product-management/products' element={<Products />} />
        <Route path='/dairy-product-management/about' element={<About />} />
        <Route path='/dairy-product-management/login' element={<LoginPage />} />
        <Route path='register' element={<SignupPage />} />
      </Route>
    )
  )
  return (
    <RouterProvider router={router}></RouterProvider>
  );
}

export default App;
