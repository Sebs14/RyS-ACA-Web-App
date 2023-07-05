import axios from "axios";

const getFreights = async () => {
  try {
    const response = await axios.get(`http://localhost:8080/` + `freights`);
    return response.data;
  } catch (error) {
    console.log(error);
  }
};
export default getFreights;
