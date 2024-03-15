import axios from "axios";
// import {ANLIX_USER, ANLIX_PASSWORD} from 'react-native-dotenv';

const api = axios.create({
    baseURL: "https://flashtins.redeconexaonet.com/api/v2/device/update/",
    auth: {
        username: "admin",
        password: "bld2154038"
    }
});


export default api;