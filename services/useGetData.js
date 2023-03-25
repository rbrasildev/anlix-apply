import api from "./Api";

import { decode, encode } from 'base-64'

if (!global.btoa) {
    global.btoa = encode;
}

if (!global.atob) {
    global.atob = decode;
}

export const useGetData = () => {

    const getApi = async(id) => {
        try {
            const response = await api.get(id);
            return response.data;
        } catch (error) {
            console.log(error)
            return error.response.data;

        }
    }
    return {
        getApi,
    }
}