import axios from "axios";
import { useContext, useEffect } from "react";
import { AuthContext } from "../Providers/AuthProvider";
import { useNavigate } from "react-router-dom";

const axiosSecure = axios.create({
  baseURL: `${import.meta.env.VITE_BASE_URL}`,
});

const useAxiosSecure = () => {
  const { logOut } = useContext(AuthContext);
  const navigate = useNavigate();
  useEffect(() => {
    axiosSecure.interceptors.request.use((config) => {
      const token = localStorage.getItem("summer-camp-token");
      if (token) {
        config.headers.Authorization = `Bearer ${token}`;
      }
      return config;
    });

    axiosSecure.interceptors.response.use(
      (response) => response,
      async (err) => {
        if (
          err.response &&
          (err.response.status === 401 || err.response.status === 403)
        ) {
          // await logOut();
          // navigate("/login");
        }
        return Promise.reject(err);
      }
    );
  }, [navigate, logOut]);

  return [axiosSecure];
};

export default useAxiosSecure;
