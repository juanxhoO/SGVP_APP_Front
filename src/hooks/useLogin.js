import { useState } from "react";
import axios from "axios";
import useAuthStore from "../store/useAuthStore";
import { useNavigate } from "react-router-dom";
const useAuthentication = () => {
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null)
    const [authenticated, setAuthenticated] = useState(false)
    const navigate = useNavigate()

    const authenticate = async (credentials, endpoint) => {
        setLoading(true)
        setError(null)

        try {
            const response = await axios.post(endpoint, credentials);
            if (response.status === 200) {
                const accessToken = response?.data?.tokens?.access?.token
                const refreshToken = response?.data?.tokens?.refresh?.token
                const userId = response?.data?.user?.id
                useAuthStore.getState().setTokens(accessToken, refreshToken, userId);
                useAuthStore.getState().setAuthenticated(true);
                navigate("/admin/dashboard")
            }
        }
        catch (error) {
            console.log(error)
            setError(error)
        }
        finally {
            setLoading(false)
        }
    }
    return { authenticate, loading, error, authenticated }
}
export default useAuthentication