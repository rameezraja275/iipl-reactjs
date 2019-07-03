
import React from 'react'
import { Route , Redirect } from 'react-router-dom'

const auth = ()=>{
  if(localStorage.getItem('user'))
  {
    console.log( localStorage.getItem('user') );
    return true;
  }
  console.log( localStorage.getItem('user') );
  return false;
}
const PrivateRoute = ({ component: Component, ...rest }) => (

    <Route {...rest} 
        render={(props) => (
        auth() === true
          ? <Component {...props} />
          : <Redirect to='/login' />
    )} />
)
export default PrivateRoute;