import React, { Component } from 'react';
import Title from './components/pagetitle';
import ProductBLL from './BLL/common';
import Loader from './components/loader'
class estimate extends Component {
    state = {
        products : [],
        selectedProductId : this.props.match.params.id,
        area : ''
    }

    async componentDidMount()
    {
        try{
            const row = await ProductBLL.getProducts(0);
            this.setState({ products : row.data }); 
        }
        catch(e)
        {
            console.log("Error : " , e );
        }         
    }
    calculatePrice = (e) =>
    {
        e.preventDefault(); 
    }
    render(){
            return(
            <React.Fragment>
                 <Title title="Estimate" />
                <section className="body-content">
                <div className="page-content">
               
                <div className="container">
                    <div className="row">
                        <div className="col-md-6">

                            <h4 className="text-uppercase">Get a Free Quota</h4>
                            <p>NOTE : Following calculation are computer genraterd and can vary</p>

                            <form className="contact-comments m-top-50" onSubmit={this.calculatePrice}>
                                <div className="row">
                                    <div className="col-md-12 form-group"> 
                                        {/* <input type="text" name="name" id="name" className=" form-control" placeholder="Product Name" maxlength="100" required=""/> */}
                                        <select name="name" id="name" className=" form-control" placeholder="Product Name" maxLength="100" value={this.state.selectedProductId} onChange={(e) => this.setState({ selectedProductId : e.target.value })}>
                                            {
                                                this.state.products.map((product, i)=>(
                                                    <option value={product.id} key={i} >{product.name}</option>
                                                ))
                                            } 
                                        </select>
                                    </div>
                                
                                        <div className="form-group col-md-12">
                                                <input type="number" name="phone" id="phone" className=" form-control" placeholder="Area" maxLength="100" required value={this.area} onChange={(e) => this.setState({ area : e.target.value })} />
                                        </div>
                                        {/* <div className="form-group col-md-12">  
                                                <input type="number" name="phone" id="phone" className=" form-control" placeholder="hieght in feet" maxLength="100" required/>
                                        </div> */}
                                        <div className="form-group col-md-12">  
                                                <span>Rs. </span>
                                        </div>
                                    <div className="form-group col-md-12">
                                        <button type="submit" className="btn btn-small btn-dark-solid ">
                                            Calculate
                                        </button>
                                    </div>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
                </div>
                </section>
        </React.Fragment>
        )
    }

}

export default estimate;