import axiosInstance from '@/utils/request/axios.ts'

export function Test(data:any){
    return axiosInstance({
        url:'/saber/login',
        method:'POST',
        data
    })
}