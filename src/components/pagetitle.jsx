import React, { Component } from 'react';

class title extends Component {
    render() { 
        return (  
            <section className="page-title">
            <div className="container">
                <h4 className="text-uppercase">{this.props.title}</h4>
                <ol className="breadcrumb">
                    <li><a href="#">Home</a></li>
                    <li className="active">{this.props.title}</li>
                </ol>
            </div>
            </section>
        );
    }
}
 
export default title;