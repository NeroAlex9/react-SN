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

    unFollov(id){
        return instance
            .delete(`follow/${id}`)
            .then(response=>{
                return response.data
            })
    },
    follov(id){
        return instance
            .post(`follow/${id}`)
            .then(response=>{
                return response.data
            })
    }
}

export const loginApi = {
    getMeLoginInfo(){
        return instance
            .get(`auth/me`)
            .then(response => {
                return response.data
            })
    },
}

export const profileApi = {
    getProfile(userId){
        return instance
            .get(`profile/${userId}`)
            .then(response => {
                return response.data
            })
    },
    getStatus(userId){
        return instance
            .get(`profile/status/${userId}`)
    },
    updateStatus(status){
        return instance
            .put(`profile/status`,{status: status})
    },

}