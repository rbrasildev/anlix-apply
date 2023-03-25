import axios from "axios";

export const useGetDataSgp = () => {

    const getApiSgp = async(pppoe) => {
        try {
            const response = await axios.get('http://170.245.175.14:9595/api/api.php?login=' + pppoe);
            return response.data;
        } catch (error) {
            console.log(error)
        }
    }
    return {
        getApiSgp,
    }
}