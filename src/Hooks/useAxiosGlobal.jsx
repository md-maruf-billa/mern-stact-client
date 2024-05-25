import axios from 'axios';


const axiosGlobal = axios.create({
    baseURL:"http://localhost:7000"
})

const useAxiosGlobal = () => {
    return axiosGlobal;
};

export default useAxiosGlobal;