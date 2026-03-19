import axios from "axios"; 
const BASE_URL='http://localhost:8000'; 

export const userRegisterService=async(data:any)=>{
 const res=await  axios.post(`${BASE_URL}/user/register`,data);
 return res?.data
}

export const userLoginService=async(data:any)=>{
 const res=await  axios.post(`${BASE_URL}/user/login`,data);
 return res?.data
}
 