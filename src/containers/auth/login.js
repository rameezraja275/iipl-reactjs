import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Field, reduxForm }  from 'redux-form';
import { bindActionCreators } from "redux";
import { Route , Redirect } from 'react-router-dom'
import { authenticate } from './action'
import InputField from '../../components/inputField'

class login extends Component{


    redirect = ()=>{
        if(this.props.auth.status)
        {
            localStorage.setItem( 'token' , this.props.auth.data.token);
            return <Redirect to='/admin' />;
        }
    }

    onSubmit = (value) => {
        this.props.authenticate(value);
    }

    render()
    {
        return(
                <div className="login login-bg login-parallax">
                    <div className="container">
                        <div className="login-logo text-center">
                            <a href="#">
                                <img src="assets/img/login-logo.png" alt="" />
                            </a>
                        </div>
                        <div className="login-box btn-rounded">
                            <form id="" name="" className=" " onSubmit={this.props.handleSubmit(this.onSubmit)}>
                                <div className="text-center">
                                    <h3>LOGIN</h3>
                                </div>
                                <Field 
                                    name="username"
                                    type="text"
                                    placeholder ="UserName"
                                    component={(field)=>{
                                        return <InputField field={field}/>
                                    }}
                                />
                                <Field 
                                    name="password"
                                    type="text"
                                    placeholder ="Password"
                                    component={(field)=>{
                                        return <InputField field={field}/>
                                    }}
                                />
                                <span id="err" > {this.props.auth.msg} </span>
                                {this.redirect()}
                                <div className="form-group">
                                    <button className="btn btn-small btn-dark-solid full-width btn-rounded"  value="login" >Login</button>
                                </div>
                            </form>
                        </div>
                        {/* <div className="copyright-row text-center">
                            Copyrights © All Rights Reserved by <a href="#" className="theme-color">Massive</a>
                        </div> */}
                        <br/>
                        <br/>
                        <br/>
                    </div>

                </div>

        )
    }
} 

function mapStateToProps( state )
{
  return { auth : state.auth }
}
function mapDispatchToProps(dispatch)
{
    return bindActionCreators({ authenticate },dispatch)
}


export default reduxForm({
    form: "loginform"
})( connect(mapStateToProps,mapDispatchToProps)(login) );