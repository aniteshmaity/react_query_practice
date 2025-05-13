import axios from "axios";

const axiosPrivate = axios.create({
  baseURL: import.meta.env.VITE_API_URL,
  headers: {
    "Content-Type": "application/json",
  },
});

axiosPrivate.interceptors.request.use((config) => {
  const token = localStorage.getItem("token");
  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
});


axiosPrivate.interceptors.response.use(
  response => response,
  async error => {
    const originalRequest = error.config;

    // If access token expired
    if (error.response?.status === 401 && !originalRequest._retry) {
      originalRequest._retry = true;

      try {
        const auth = JSON.parse(localStorage.getItem('token'));
        const response = await axiosPublic.post('/auth/refresh', {
          refreshToken: auth.refreshToken,
        });

        const newAccessToken = response.data.accessToken;

        // Update localStorage and retry original request
        const updatedAuth = { ...auth, accessToken: newAccessToken };
        localStorage.setItem('token', JSON.stringify(updatedAuth));

        originalRequest.headers['Authorization'] = `Bearer ${newAccessToken}`;
        return axiosPrivate(originalRequest);
      } catch (refreshError) {
        // Handle refresh token failure (force logout)
        localStorage.removeItem('token');
        window.location.href = '/login';
        return Promise.reject(refreshError);
      }
    }

    return Promise.reject(error);
  }
);  

export default axiosPrivate;
