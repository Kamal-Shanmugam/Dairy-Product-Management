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
      <Route path='/' element={<RootLayout />} >
        <Route index element={<DairyFarm />} />
        <Route path='customers' element={<Customer />} />
        <Route path='addCustomer' element={<NewCustomers />} />
        <Route path='updateCustomer/:id' element={<UpdateCustomer />} />
        <Route path='orders' element={<Orders />} />
        <Route path='products' element={<Products />} />
        <Route path='about' element={<About />} />
        <Route path='login' element={<LoginPage />} />
        <Route path='register' element={<SignupPage />} />
      </Route>
    )
  )
  return (
    <RouterProvider router={router}></RouterProvider>
  );
}

export default App;
