import React ,{Component} from 'react';
import axios from 'axios';
import Product from "./product";
import ProductView from "./productview";
import ProductBLL from "../BLL/common";
class productGrid extends Component{

    state = {
        data :[]
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
    getProducts()
    {
        let i = 0;
        return this.state.data.map((result)=>(
            <Product key={i++} data={result}/>
        ));
    }
    render(){
        return(
                // <div className="page-content" id="page-contents">
                <div className="page-content">
                    <div className="container">
                        <div className="row">  
                        <div className="col-md-12">
                                    <div className="row">
                            <div className="heading-title border-short-bottom text-center">
                                <h3 className="text-uppercase">Recent product</h3>
                                {/* <div className="half-txt">Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit</div> */}
                            </div>
                            {/* <div className=" portfolio-with-title col-3 gutter portfolio-gallery"> */}
                                {/* <ProductView/> */}
                                {this.getProducts()}
                            {/* </div> */}
                            </div>
                             </div>
                        </div>
                    </div>
                </div>
        );
    }    
}

export default productGrid;