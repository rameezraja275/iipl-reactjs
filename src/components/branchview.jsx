import React ,{Component} from 'react';

class branchbox extends Component{
    render(){
        return(
            <React.Fragment>
                <div className="col-md-4">
                    <h4 className="text-uppercase">{this.props.city}</h4>
                        <address>
                            <p>
                               {this.props.address} <br/>
                               {"Phone : " + this.props.phone}<br/>
                               {"Email : " + this.props.email}<br/>
                               {/* <a href="#" className="theme-color text-uppercase"><i className="fa fa-map-marker"></i>  view map</a> */}
                            </p>
                        </address>
                 </div>
            </React.Fragment>
        );
    }    
}

export default branchbox;