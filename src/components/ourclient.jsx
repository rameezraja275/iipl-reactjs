import React, { Component } from 'react';

class OurClient extends Component{
    state = { clients : ["a" , "b"] };
    render(){
        return (
            <div className="page-content p-bot-0" id="page-content-cat">
                    <div className="container magazine-grid decor-category">
                        <div className="row">
                <div className="heading-title border-short-bottom text-center">
                        <h3 className="text-uppercase">Our Clients</h3>
                </div>

                <ul className="clients plus-box grid-10 ">
                    {
                        this.state.clients.map((i)=>(
                        <li key={i}>
                            <a href="#">
                                <img src="assets/img/clients/c-1.png" alt="Clients"/>
                            </a>
                        </li>
                    ))
                    }
                    
                </ul>
             </div>
             </div>
             </div>
        );
    }
}

export default OurClient;