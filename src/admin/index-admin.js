import React, { Component } from 'react';
import { connect } from "react-redux";
import Navbar from '../components/navbar';

import { Route, Link, BrowserRouter as Router , Switch,  Redirect } from 'react-router-dom';
import Footer from '../components/footer';
import ProductTable from '../containers/products-admin/index';


const adminMenu = [
    {title : "Products" ,hyperlink : "/admin/products" ,categories : []},
    {title : "Branch" ,hyperlink : "/admin/branch" ,categories : []},
    {title : "Categories" ,hyperlink : "/admin/categories" ,categories : []},
    {title : "Clients" ,hyperlink : "/admin/clients" ,categories : []},
    {title : "Logout" ,hyperlink : "/admin/logout" ,categories : []}
  ];

class adminHome extends Component{

    privateRoute = () => {
      if(localStorage.getItem('token') != null)
      {
        return <React.Fragment>
        <Navbar menu={adminMenu}/>
          <Route path="/admin/products" component={ProductTable}/>
        <Footer/> 
        </React.Fragment>
      }
      else
      {
        return <Redirect to='/login' />
      }
    }

    render()
    {
        return(
         
          <React.Fragment> 
            {this.privateRoute()}           
          </React.Fragment>
        );
    }
}

function mapStateToProps({ auth }) {
  return { auth }; 
}
export default connect(mapStateToProps,null)(adminHome);
