import { GET_PRODUCTS,EDIT_PRODUCTS,DELETE_PRODUCTS } from './action'

export default function(state = [], action)
{
    switch(action.type)
    {
        case GET_PRODUCTS:
            return action.payload.data;
        case EDIT_PRODUCTS:
            return action.payload.data;
        case DELETE_PRODUCTS:
            return action.payload.data;
    }
    return state;
};