import React from 'react';
import { constants } from 'fs';

export default props =>
{
    const field = props.field;  
    const inputs = props.field.type != 'file' ? {...field.input} : " ";
    return (<div className="form-group">
        <label> {field.title} </label>
        <input  
            placeholder={field.placeholder} 
            className="form-control"  
            type={field.type} 
            disabled={field.status}
            {...inputs}  />
    </div>)
}