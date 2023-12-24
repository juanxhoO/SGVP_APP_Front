import './App.css';
import { Route, Routes } from 'react-router';
import SignIn from './layouts/authentication/SignIn';
import Register from './layouts/authentication/Register';
import ResetPassword from './layouts/authentication/ResetPassword';
import ForgotPassword from './layouts/authentication/ForgotPassword';
import AppLayout from './layouts/AppLayout';
import Profile from './layouts/profile';
import MainDashboard from './layouts/dashboard/Dashboard';
import User from './layouts/users/User';
import Users from './layouts/users';
import Orders from './layouts/orders';
import Order from './layouts/orders';

import Mecanics from './layouts/mecanics';
import Mecanic from './layouts/mecanics';

import Dependencies from './layouts/dependencies';
import Dependency from './layouts/dependencies';

import Vehicle from './layouts/vehicles';
import Vehicles from './layouts/vehicles';
import NotFound from './layouts/components/NotFound';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path='/' element={<AppLayout />}>
          <Route path='/admin' element={<MainDashboard />}></Route>

          <Route path='profile' element={<Profile />}></Route>

          <Route path='/users' element={< Users />}>
            <Route path=':id' element={< User />}></Route>
          </Route>

          <Route path='/orders' element={<Orders />}>
            <Route path=':id' element={<Order />}></Route>
          </Route>

          <Route path='/mecanics' element={<Mecanics />}>
            <Route path=':id' element={<Mecanic />}></Route>
          </Route>

          <Route path='/dependencies' element={<Dependencies />}>
            <Route path=':id' element={<Dependency />}></Route>
          </Route>

          <Route path='/vehicles' element={<Vehicles />}>
            <Route path=':id' element={<Vehicle />}></Route>
          </Route>

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
