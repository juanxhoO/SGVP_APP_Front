import useAuthStore from '../store/useAuthStore';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
const useLogout = () => {
  const navigate = useNavigate()
  const logout = async () => {
    // Perform any logout logic (e.g., clear authentication tokens, reset user state)
    try {


      console.log(useAuthStore.getState())
      // Redirect to the specified path after logout
      const response = await axios.post("http://localhost:3000/v1/auth/logout", {refreshToken: useAuthStore.getState()?.refreshToken})
      if (response.status === 204) {

        useAuthStore.getState().setAuthenticated(false);
        useAuthStore.getState().clearTokens()
        navigate("/authentication/sign-in")
      }
    }
    catch (error) {
      console.log(error)
    }

  }
  return logout;
};

export default useLogout;
