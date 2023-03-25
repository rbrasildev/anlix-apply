import axios from "axios";

const api = axios.create({
    //url antiga baseURL: "https://redeconexaonet.flashman.anlix.io/api/v2/device/update/",
    baseURL: "https://flashtins.redeconexaonet.com/api/v2/device/update/",
    auth: {
        username: "admin",
        password: "bld2154038"
    }
});


export default api;