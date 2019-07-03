import axios from 'axios'
import c from '../../constants'

export const AUTH = "AUTH";

export const authenticate =  async (value)=> {
    try{
        
        const row = await axios.post(c.API_URL + c.API_AUTH , {username : value.username , password : value.password});
        return {
            type: AUTH,
            payload: row.data
        };          
    }
    catch(e)
    {
        console.log("ERROR : ", e);
    }
    
}