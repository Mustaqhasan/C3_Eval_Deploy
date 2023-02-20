import axios from "axios"
export const getPeople= async()=>{
    let res=await axios.get(`https://jsonplaceholder.typicode.com/users`)
    return res.data
}

export const getUserTodo=async()=>{
    let res=await axios.get(`https://jsonplaceholder.typicode.com/users/todos`)
    return res.data
}