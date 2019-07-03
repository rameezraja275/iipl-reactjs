import axios from "axios";
import c from "../constants"

const common = {
    login : async (name, pass) =>
    {
       const row = await axios.post(c.API_URL + c.API_AUTH , {username : name , password : pass});
       return await row.data;
    },
    getCategories : async(id) =>
    {
        const row =  await axios.get(c.API_URL + c.API_GET_CATEGORIES + id);
        return await row.data;
    },
    getProducts : async(id) =>
    {
        const row =  await axios.get(c.API_URL + c.API_GET_PRODUCTS + id);
        return await row.data;
    },
    getClients : async(id) =>
    {
        const row =  await axios.get(c.API_URL + c.API_GET_Clients + id);
        return await row.data;
    },
    getBranchs : async(id) =>
    {
        const row =  await axios.get(c.API_URL + c.API_GET_Branchs + id);
        return await row.data;
    }

}

export default common;