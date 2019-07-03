import React, { Component } from 'react';
import Title from './components/pagetitle';
import Product from "./components/product";
import ProductBLL from './BLL/common';

class ProductPage extends Component{

    state = {
        data :[],
        catid : this.props.match.params.id
    }
    
    async componentDidMount() 
    {
        try{
            const row = await ProductBLL.getProducts(this.state.catid);
            this.setState({ data : row.data }); 
        }
        catch(e)
        {
            console.log("Error : " , e );
        }
    }
    async componentDidUpdate(){
        try{
            const row = await ProductBLL.getProducts(this.state.catid);
            this.setState({ data : row.data }); 
        }
        catch(e)
        {
            console.log("Error : " , e );
        }
    }
    componentWillReceiveProps()
    {
        this.setState({catid : this.props.match.params.id});
    }
    getProducts()
    {
        let i = 0;
        return this.state.data.map((result)=>(
            <Product key={i++} data={result}/>
        ));
    }
    render()
    {
        return(
            <React.Fragment>
                <Title title="Product" />
                <section className="body-content" id="section">
                    <div className="page-content product-grid">
                        <div className="container">
                            <div className="row">
                                <div className="col-md-12">
                                    <div className="row">
                                        {this.getProducts()}      
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>    
            </React.Fragment>

        );
    }
}

export default ProductPage;