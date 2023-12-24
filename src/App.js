import './App.css';
import { Route, Routes } from 'react-router';
import SignIn from './layouts/authentication/SignIn';
import Register from './layouts/authentication/Register';
import ResetPassword from './layouts/authentication/ResetPassword';
import ForgotPassword from './layouts/authentication/ForgotPassword';
import AppLayout from './layouts/AppLayout';
import Profile from './layouts/profile';
import MainDashboard from './layouts/dashboard/Dashboard';
function App() {
  return (
    <div className="App">
      <Routes>
        <Route path='/' element={<AppLayout />}>
          <Route path='/admin' element={<MainDashboard />}></Route>

          <Route path='profile' element={<Profile />}></Route>
          <Route path='/authentication'>
            <Route path='sign-in' element={<SignIn />}></Route>
            <Route path='register' element={< Register />}></Route>
            <Route path='reset-password' element={<ResetPassword />}></Route>
            <Route path='forgot-password' element={<ForgotPassword />}></Route>
          </Route>
        </Route>
      </Routes>
    </div>
  );
}

export default App;
