import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import {SignIn, Register, ResetPassword,ForgotPassword} from './views/authentication';
import AppLayout from './layouts/AppLayout';
import Profile from './views/profile';
import MainDashboard from './layouts/dashboard/Dashboard';
import {Users, User, CreateUser} from './views/users';
import {Orders, Order, CreateOrder} from './views/orders';
import {Mecanic,Mecanics, CreateMecanic} from './views/mecanics';
import {Dependencies,Dependency,CreateDependency} from './views/dependencies';
import {Vehicle,Vehicles,CreateVehicle} from './views/vehicles';
import NotFound from './views/NotFound';
import {Reports,Report,CreateReport} from './views/reports';
import {Stocks,Stock,CreateStock} from './views/stocks';
import Messages from './views/messages';
import {OrderType,OrderTypes,CreateOrderType} from './views/orderType';

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          {/* Admin */}
          {/* Users */}
          <Route path="/" element={<AppLayout />}>
            <Route path="admin/dashboard" element={<MainDashboard />} />
            <Route path="profile" element={<Profile />} />
            <Route path="users">
              <Route path="create" element={<CreateUser />} />
              <Route path="/users" element={<Users />} />
              <Route path=":id" element={<User />} />
            </Route>
            <Route path="orders">
              <Route path="create" element={<CreateOrder />} />
              <Route path="/orders" element={<Orders />} />
              <Route path=":id" element={<Order />} />
            </Route>
            <Route path="reports">
              <Route path="create" element={<CreateReport />} />
              <Route path="/reports" element={<Reports />} />
              <Route path=":id" element={<Report />} />
            </Route>
            <Route path="stocks">
              <Route path="create" element={<CreateStock />} />
              <Route path="/stocks" element={<Stocks />} />
              <Route path=":id" element={<Stock />} />
            </Route>
            <Route path="mecanics">
              <Route path="create" element={<CreateMecanic />} />
              <Route path="/mecanics" element={<Mecanics />} />
              <Route path=":id" element={<Mecanic />} />
            </Route>
            <Route path="dependencies">
              <Route path="create" element={<CreateDependency />} />
              <Route path="/dependencies" element={<Dependencies />} />
              <Route path=":id" element={<Dependency />} />
            </Route>
            <Route path="ordertypes">
              <Route path="create" element={<CreateOrderType />} />
              <Route path="/ordertypes" element={<OrderTypes />} />
              <Route path=":id" element={<OrderType />} />
            </Route>
            <Route path="vehicles">
              <Route path="create" element={<CreateVehicle />} />
              <Route path="/vehicles" element={<Vehicles />} />
              <Route path=":id" element={<Vehicle />} />
            </Route>
            <Route path="messages" element={<Messages />} />
            <Route path="authentication">
              <Route path="sign-in" element={<SignIn />} />
              <Route path="register" element={<Register />} />
              <Route path="reset-password" element={<ResetPassword />} />
              <Route path="forgot-password" element={<ForgotPassword />} />
            </Route>
            <Route path="*" element={<NotFound />} />
          </Route>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
