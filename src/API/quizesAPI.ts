import axios from "axios";
const api="https://anyware-backend-n41jp0j78-mohamed-salamas-projects-ee33a6a6.vercel.app"

export const listQuizesAPI=async()=>{
    const response=await axios.get(`${api}/quizes/listQuizes`);
      return response.data;
}