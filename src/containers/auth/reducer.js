import { AUTH } from './action'

export default function(state = [] , action)
{
    switch(action.type)
    {
        case AUTH:
            return action.payload;     
    }
    return state
};