import './App.css';
import { Route, Routes } from 'react-router';
import SignIn from './layouts/authentication/SignIn';
import Register from './layouts/authentication/Register';
import ResetPassword from './layouts/authentication/ResetPassword';
import ForgotPassword from './layouts/authentication/ForgotPassword';
import AppLayout from './layouts/AppLayout';
import Profile from './layouts/profile';
import MainDashboard from './layouts/dashboard/Dashboard';



import Users from './layouts/users';
import User from './layouts/users/User';
import CreateUser from './layouts/users/CreateUser';

import Orders from './layouts/orders';
import Order from './layouts/orders/Order';
import CreateOrder from './layouts/orders/CreateOrder';
import Mecanics from './layouts/mecanics';
import Mecanic from './layouts/mecanics/Mecanic';

import Dependencies from './layouts/dependencies';
import CreateReport from './layouts/reports/CreateReport';
import Vehicles from './layouts/vehicles';
import Vehicle from './layouts/vehicles/Vehicle';
import NotFound from './layouts/components/NotFound';

import Reports from './layouts/reports';
import Report from './layouts/reports/Report';

import Stocks from './layouts/stocks';
import Stock from './layouts/stocks/Stock';
import Messages from './layouts/messages';
import Dependency from './layouts/dependencies/Dependency';
import CreateStock from './layouts/stocks/CreateStock';
import CreateMecanic from './layouts/mecanics/createMecanic';
import CreateVehicle from './layouts/vehicles/CreateVehicle';
import OrderType from './layouts/orderType/OrderType';
import OrderTypes from './layouts/orderType';
import CreateOrderType from './layouts/orderType/CreateOrderType';
import CreateDependency from './layouts/dependencies/CreateDependency';

function App() {
  return (
    <div className="App">
      <Routes>
        {/* Admin */}



        {/* Users */}

        <Route path='/' element={<AppLayout />}>
          <Route path='/admin/dashboard' element={<MainDashboard />}>
          </Route>
          <Route path='profile' element={<Profile />}></Route>
          <Route path='/users/create' element={< CreateUser />}></Route>
          <Route path='/users' element={< Users />}></Route>
          <Route path='/users/:id' element={< User />}></Route>
          <Route path='/orders' element={<Orders />}>
          </Route>
          <Route path='/orders/create' element={<CreateOrder />}>
          </Route>
          <Route path='/orders/:id' element={<Order />}></Route>
          <Route path='/reports' element={<Reports />}>
          </Route>
          <Route path='/reports/create' element={<CreateReport />}>
          </Route>
          <Route path='/reports/:id' element={<Report />}></Route>
          <Route path='/stocks/create' element={<CreateStock />}>
          </Route>
          <Route path='/stocks' element={<Stocks />}>

          </Route>
          <Route path='/stocks/:id' element={<Stock />}></Route>
          <Route path='/mecanics/create' element={<CreateMecanic />}>
          </Route>
          <Route path='/mecanics' element={<Mecanics />}>
          </Route>
          <Route path='/mecanics/:id' element={<Mecanic />}></Route>
          <Route path='/dependencies' element={<Dependencies />}>
          </Route>
          <Route path='/dependencies/create' element={<CreateDependency />}>
          </Route>
          <Route path='/ordertypes/create' element={<CreateOrderType />}>
          </Route>
          <Route path='/ordertypes' element={<OrderTypes />}>
          </Route>
          <Route path='/ordertypes/:id' element={<OrderType />}>
          </Route>
          <Route path='/dependencies/:id' element={<Dependency />}>
          </Route>
          <Route path='/vehicles/create' element={<CreateVehicle />}>
          </Route>
          <Route path='/vehicles' element={<Vehicles />}>
          </Route>
          <Route path='/vehicles/:id' element={<Vehicle />}></Route>
          <Route path='/messages' element={<Messages />}></Route>
          <Route path='/authentication'>
            <Route path='sign-in' element={<SignIn />}></Route>
            <Route path='register' element={< Register />}></Route>
            <Route path='reset-password' element={<ResetPassword />}></Route>
            <Route path='forgot-password' element={<ForgotPassword />}></Route>
          </Route>
          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
