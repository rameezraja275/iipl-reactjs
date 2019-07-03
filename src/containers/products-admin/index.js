import React, {Component} from 'react'
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { getproducts, delproduct, addproduct} from "./action";
import ProductForm from "./form"
import Popup from "reactjs-popup";
import Breadcum from '../../components/breadcum'
import c from '../../constants'

class Products extends Component {

    componentDidMount()
    {
        this.props.getproducts(0);
    }
    onHadleDelete = (e) =>
    {
        this.props.delproduct(e.target.value);
    }
    onAddProduct = (e) => {
        // this.props.addproduct();
        // console.log("here", e.target);
    }
    renderProductDetails = (product, i) =>
    {
        return (
            <tr key={i}>
                <td>{product.id}</td> 
                <td>{product.subcategoryid}</td> 
                <td>{product.name}</td> 
                <td>{product.price}</td> 
                <td>{product.psi}</td> 
                <td><img src={`${c.API_URL}${c.API_PRODUCT_IMAGE}${product.photo}`} height="40" width="60"/></td>
                <td>{product.size}</td> 
                <td>{product.priceperfeet}</td> 
                <td>{product.status}</td>
                <td>
                    <Popup key={i}
                        trigger={
                            <button key={i} className="btn btn-extra-small btn-circle btn-dark-border btn-transparent">Edit</button>
                        }
                        closeOnEscape
                        modal>
                        <ProductForm title="EDIT PRODUCT" initialValues={product} key={i}/>
                    </Popup>  
                </td>
                <td><button value={product.id} onClick={this.onHadleDelete} className="btn btn-extra-small btn-circle btn-dark-border btn-transparent">Delete</button></td> 
            </tr>
        )       
    }
    render()
    {
        let table;
        if(Array.isArray(this.props.pro))
        {
            table = <table className="table table-striped">
                        <thead>
                            <tr>
                                <th>ID</th>
                                <th>CATEGORY ID</th>
                                <th>NAME</th>
                                <th>PRICE</th>
                                <th>PSI</th>
                                <th>PHOTO</th>
                                <th>SIZE</th>
                                <th>PRICE PER FEET</th>
                                <th>STATUS</th>
                                <th>Edit</th>
                                <th>Delete</th>
                            </tr>
                        </thead>
                        <tbody>  
                            {this.props.pro.map((item, key)=>(this.renderProductDetails(item, key) ))}
                        </tbody>
                    </table>
        }
        else{
            if(this.props.pro.status)
            {
                table= <div class="page-content">
                        <div class="alert alert-success" role="alert">
                            {this.props.pro.msg}
                        </div>
                        </div>
            }
            else{
                table= <div class="page-content">
                        <div class="alert alert-danger" role="alert">
                            {this.props.pro.msg}
                        </div>
                        </div>
            }
            setTimeout(()=>(window.location.reload()),3000);

            
        }
        return(
            <React.Fragment>
                <Breadcum title="Products"/>
                <section className="body-content ">
                    <div className="page-content">
                        <div className="container">
                            <div className="row">
                                <div className="col-md-8 col-md-offset-2">
                                {/* <div className="row"> */}
                                    <div className="col-md-10 ">
                                        <div className="heading-title-alt text-left ">
                                            <h4 className="text-uppercase ">PRODUCTS</h4>
                                        </div>
                                    </div>
                                    <div className="col-md-2 ">
                                        <Popup 
                                            trigger={
                                                <div className="m-bot-10">
                                                    <button className="btn btn-small btn-dark-border  btn-transparent">ADD</button>
                                                </div>
                                            }
                                            closeOnDocumentClick
                                            closeOnEscape
                                            modal>
                                            <ProductForm title="ADD PRODUCT"/>
                                        </Popup>  
                                    </div>
                                    {table}
                                    <div className="divider d-solid d-single text-center">
                                        <span className="dot"> </span>
                                    </div>
                                {/* </div> */}
                            </div>
                        </div>
                        </div>
                    </div>
                </section>
            </React.Fragment>
        )
    }
}

const mapDispatchToProps = dispatch => {
    return bindActionCreators({getproducts, delproduct, addproduct}, dispatch);
}
function mapStateToProps({ products }) {
    return { pro : products }; 
}
export default connect(mapStateToProps,mapDispatchToProps)(Products);