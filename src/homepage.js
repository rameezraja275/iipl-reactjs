import React, { Component } from 'react';
import ReactDom from 'react-dom';
import Slider from './components/slider';
import Grid from './components/CategoryGrid';
import ProductGrid from './components/featuredGrid';
import BranchGrid from './components/branchGrid';
import OurClients from './components/ourclient';


class Home extends Component{

    render()
    {
        return(
                <React.Fragment>
                    <Slider/>
                    <section className="body-content" id="section"><section className="body-content" id="section"/>
                        <Grid/>
                        <OurClients/>
                        {/* <ProductGrid/> */}
                        <BranchGrid/>
                    </section>
                </React.Fragment>
            

        );
    }
}

export default Home;