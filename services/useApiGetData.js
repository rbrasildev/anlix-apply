import api from "./Api";
import { decode, encode } from 'base-64'

if (!global.btoa) {
    global.btoa = encode;
}

if (!global.atob) {
    global.atob = decode;
}

export const useApiGetData = () => {

    const getApi = async(mac) => {
        try {
            const response = await api.get(mac);
            return response.data
        } catch (error) {
           return error.response
        }
    }
    return {
        getApi,
    }
    
}