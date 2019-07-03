import React, {Component} from "react";
import ReactDOM from 'react-dom'
// import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from './components/navbar';
import Footer from './components/footer';
import HomePage from './homepage';
import ProductPage from './productpage';
import About from './aboutus';
import Estimate from './estimate';




import AdminIndex from './admin/index-admin';

import ProductBLL from "./BLL/common";
import Login from "./containers/auth/login";
import { Route, Link, BrowserRouter as Router , Switch} from 'react-router-dom';


class Routing extends Component {
    state = {
      categories : [],
      
    }
    async componentDidMount()
    {
      // console.log( localStorage.getItem('user') );
      // localStorage.removeItem('user');
      // console.log( localStorage.getItem('user') );
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
  let publicMenu = [
    {title : "Home" ,hyperlink : "/public" ,categories : []},
    {title : "About Us" ,hyperlink : "/public/aboutus" ,categories : []},
    {title : "Products" ,hyperlink : "/public/products/0" ,categories : this.state.categories },
    {title : "Estimate" ,hyperlink : "/public/estimate/0" ,categories : []},
    {title : "Admin" ,hyperlink : "/admin" ,categories : []}
  ]
  return (
          <Router>

           <Route exact path={'/public'} >
                  <Route path={'/public'} 
                        render={() => (
                          <Navbar menu={publicMenu}/>
                        )}
                      />
                  <Route path={'/public'} exact component={HomePage} />
                  <Route path={'/public/products/:id'} component={ProductPage} />
                  <Route path={'/public/aboutus'} component={About}/>
                  <Route path={'/public/estimate/:id'} component={Estimate}/>      
                  <Route path={'/public'} component={Footer}/>
            </Route>
            
            <Route path={'/login'} component={Login}/>
            <Route path='/admin' component={AdminIndex}/>

          </Router>
  )
}
    
}
export default Routing;
// ReactDOM.render(<Routing/>, document.getElementById('root'))