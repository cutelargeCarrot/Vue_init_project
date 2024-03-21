import axios, { AxiosResponse, InternalAxiosRequestConfig } from 'axios';
import showErrorInfo from './error';

const axiosInstance = axios.create({
    baseURL: 'https://saber.sipc115.com',
    timeout: 5000
})

axiosInstance.interceptors.request.use(
    (req: InternalAxiosRequestConfig) => {
        req.headers['Content-Type'] = "application/json";
        if (localStorage.getItem('token')) req.headers['Authorization'] = localStorage.getItem('token')
        return req
    }, (err: any) => Promise.reject(err))


axiosInstance.interceptors.response.use(
    (res: AxiosResponse) => {
        if (res.status >= 200 && res.status < 300) {

            return res.data
        }

        return Promise.reject(res.data)
    },
    (err: any) => {
        console.log(err.message)
        showErrorInfo(err.response.status);
    })

export default axiosInstance