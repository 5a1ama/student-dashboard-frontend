import axios from "axios";
const api="https://anyware-backend-n41jp0j78-mohamed-salamas-projects-ee33a6a6.vercel.app"

export const loginAPI=async (email: string, password: string)=>{
  try {
    const response=await axios.post(`${api}/users/login` , {email, password});
      return response;
  }
  catch (error) {
    throw error;
  }
}


export const registerAPI = async (name: string, phone: string, email: string, password: string) => {
    try {
      const response = await axios.post(`${api}/users/register`, {name, phone, email, password});
      return response;
    } 
    catch (error) {
      throw error;
    }
  }

export const verifyTokenAPI = async () => {
    try {
      const response = await axios.post(`${api}/users/verifyToken`, {"token":localStorage.getItem("token")});
      return response.data;
    } 
    catch (error) {
      throw error;
    }
  }