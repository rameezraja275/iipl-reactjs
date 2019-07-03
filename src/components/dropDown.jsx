import React, { Component } from 'react';
import { Link } from 'react-router-dom'
class dropDown extends Component{

    render()
    {
        return(
                    <li className="active" ><Link to={this.props.data.hyperlink }> {this.props.data.title} </Link>
                        <ul className="dropdown">
                            {  
                                this.props.data.categories.map((menuItem)=>(
                                        <li  key={menuItem.id} >
                                            <Link to={"/public/products/" + menuItem.id }> {menuItem.name} </Link>    
                                        </li>
                                ))       
                            } 
                        </ul>
                    </li>       
        );      
    }
}
export default dropDown;