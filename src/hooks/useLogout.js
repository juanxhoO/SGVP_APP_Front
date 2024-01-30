import { useEffect } from 'react';
import { useHistory } from 'react-router-dom';

const useLogout = (redirectPath = '/') => {
  const history = useHistory();

  const logout = () => {
    // Perform any logout logic (e.g., clear authentication tokens, reset user state)

    // Redirect to the specified path after logout
    history.push(redirectPath);
  };

  // Use useEffect to perform the logout when the component mounts
  useEffect(() => {
    logout();
  }, [redirectPath]); // Include redirectPath as a dependency to re-run the effect if it changes

  return logout;
};

export default useLogout;
