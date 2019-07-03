import React ,{Component} from 'react';
import c from "../constants";
import { Link } from 'react-router-dom'

class Product extends Component{
    render(){
        return(
            <div className="col-md-3">  
                                    <div className="product-list">
                                        <div className="product-img">
                                            <a href="#">
                                                <img src={c.API_URL + c.API_PRODUCT_IMAGE + this.props.data.photo} alt="" style={{width: 260, height: 200}}/>
                                            </a>
                                            <a href="#">
                                                <img src={c.API_URL + c.API_PRODUCT_IMAGE + this.props.data.photo} alt="" style={{width: 260, height: 200}}/>
                                            </a>
                                            <div className="sale-label">
                                                {/* Sale */}
                                            </div>
                                        </div>
                                        <div className="product-title">
                                            <h5><a href="#">{this.props.data.name}</a></h5>
                                        </div>
                                        <div className="product-price">
                                            {/* <del>$79.00</del>  */}
                                            {"Rs. " + this.props.data.price}
                                        </div>
                                        {/* <div className="product-rating">
                                            <i className="fa fa-star"></i>
                                            <i className="fa fa-star"></i>
                                            <i className="fa fa-star"></i>
                                            <i className="fa fa-star-o"></i>
                                            <i className="fa fa-star-o"></i>
                                        </div> */}
                                        <div className="product-btn">
                                            <Link to={"/estimate/" + this.props.data.id} className="btn btn-extra-small btn-dark-border  ">{/*<i className="fa fa-shopping-cart"></i>*/} Estimated Price</Link>
                                        </div>
                                    </div>
                                    
                                </div>
        );
    }    
}

export default Product;