import axios from "axios";

const instance = axios.create({
    withCredentials: true,
    headers:{
        'API-KEY': '01c8d09d-952d-45db-a89f-61262ebfce4e'
    },
    baseURL: 'https://social-network.samuraijs.com/api/1.0/'
});
export const usersApi = {
    getUsers(activePage=1, totalUsersCount=10) {
        return instance
            .get(`users?page=${activePage}&count=${totalUsersCount}`)
            .then(response => {
                return response.data
            })
    },
    getMeLoginInfo(){
        return instance
            .get(`auth/me`)
            .then(response => {
                return response.data
            })
    },
    getProfile(userId){
        return instance
            .get(`https://social-network.samuraijs.com/api/1.0/profile/${userId}`)
            .then(response => {
                return response.data
            })
    },
    unFollov(id){
        return instance
            .delete(`https://social-network.samuraijs.com/api/1.0/follow/${id}`)
            .then(response=>{
                return response.data
            })
    },
    follov(id){
        return instance
            .post(`https://social-network.samuraijs.com/api/1.0/follow/${id}`)
            .then(response=>{
                return response.data
            })
    }
}