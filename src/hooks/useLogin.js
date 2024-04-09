import { useState } from "react";
import axios from "axios";
import useAuthStore from "../store/useAuthStore";





const useAuthentication = () => {
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null)
    const [authenticated, setAuthenticated] = useState(false)

    const authenticate = async (credentials, endpoint) => {
        setLoading(true)
        setError(null)

        try {
            //const response = await axios.post(endpoint, credentials);
            console.log(credentials)
            const accessToken = "sdsd"
            const refreshToken = "dsds"


            useAuthStore.getState().setTokens(accessToken, refreshToken);
            useAuthStore.getState().setAuthenticated(true);

            
            console.log
            // if (response.data.success) {
            //     useAuthStore.getState().setTokens(accessToken, refreshToken);
            //     useAuthStore.getState().setAuthenticated(true);
            // }
            // else {
            //     setError(response.data.error)
            //     console.log(error)
            // }
        }
        catch (error) {
            setError(error)
        }
        finally {
            setLoading(false)
        }
    }
    return { authenticate, loading, error, authenticated }
}

export default useAuthentication