import React, { Component } from 'react';
import CategoryView from './categoryView';
import ProductBLL from '../BLL/common';

class Grid extends Component{

    state = { 
        categories : [] 
    }

    async componentDidMount()
    {
        try{
            const row = await ProductBLL.getCategories(0);
            this.setState({ categories : row.data }); 
        }
        catch(e)
        {
            console.log("Error : " , e );
        }         
    }

    render()
    {
        return(
                <div className="page-content p-bot-0" id="page-content-cat">
                    <div className="container magazine-grid decor-category">
                        <div className="row">
                        <div className="heading-title border-short-bottom text-center">
                                <h3 className="text-uppercase">Our Service</h3>
                        </div>
                            {
                                this.state.categories.map((category , i)=>(
                                    <CategoryView data = {category} size={4} key={i}/>
                                ))
                            }
                        </div>
                    </div>
                </div>
        );
    }
}

export default Grid;