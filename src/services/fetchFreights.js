import axios from "axios";

const config = {
  headers: { Authorization: `Bearer ${localStorage.getItem('token')}` }
}

const getFreights = async () => {
  try {
    const response = await axios.get(`http://localhost:8080/` + `freights`, config);
    console.log(response);
    return response.data;
  } catch (error) {
    console.log(error);
  }
};
export default getFreights;
