import axios from "axios";

const apiurl='http://localhost:3002/users';

export function getUserService(){
    return axios.get(`${apiurl}`)
}
export function editUserService(id,user) {
  return axios.put(`${apiurl}/${id}`, user);
}
export function getUserServiceById(id){
    return axios.get(`${apiurl}/${id}`)
}
export function addUserService(user) {
    return axios.post(`${apiurl}`, user);
  }
  export function deleteUserServiceById(id){
    return axios.delete(`${apiurl}/${id}`)
}
