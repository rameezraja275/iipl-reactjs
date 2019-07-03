import React, {Component} from 'react';
import c from '../constants';

class Box extends Component{

    render()
    {
        return(
                <div className={"col-md-" + this.props.size}>
                    <a href="#" className="fit-img">
                        <img src={c.API_URL + c.API_CATEGORY_IMAGE + this.props.data.photo} alt="" style={{width: 367, height: 200}}/>
                        <span className="title dark">{this.props.data.name}</span>
                    </a>
                </div>
        );
    }
}

export default Box;
