import axios from 'axios';
import c from '../../constants'

export const GET_PRODUCTS = "GET_PRODUCTS";
export const EDIT_PRODUCTS = "EDIT_PRODUCTS";
export const DELETE_PRODUCTS = "DELETE_PRODUCTS";

export async function getproducts(id)
{
    const row =  await axios.get(c.API_URL + c.API_GET_PRODUCTS + id);
    return {
        type: GET_PRODUCTS,
        payload: row.data
    };
}

export async function addUpdateproduct(data)
{
    const token = localStorage.getItem('token');
    let row = null;
    try{
        row =  await axios.post(c.API_URL + c.API_EDIT_PRODUCTS, { data, token } );
    }
    catch(e){

    } 
    return {
        type: EDIT_PRODUCTS,
        payload: row
    };
}

export async function delproduct(id)
{
    const token = localStorage.getItem('token');
    let row;
    try{
        row =  await axios.post(c.API_URL + c.API_DELETE_PRODUCTS  , {id : id, token});
        console.log(row);
    }
    catch(e)
    {

    }
    return {
        type: DELETE_PRODUCTS,
        payload: row
    };
}
export async function addproduct()
{
    
}
