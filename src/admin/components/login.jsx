import React, { Component } from 'react'
import common from '../../BLL/common'
import { Route , Redirect } from 'react-router-dom'
class login extends Component{

    state = {
        name : '',
        password : ''
    }

    login =  async (e)=> {
        e.preventDefault();
        try{
            const row = await common.login(this.state.name, this.state.password);
            if(row.status)
            {
                localStorage.setItem('user', row.data.token);
                console.log("data : ",row);
                this.setState({
                    redirect: true
                })
            }
            else
            {
                this.setState({ errorMsg : row.msg })
            }           
        }
        catch(e)
        {
            console.log("ERROR : ", e);
        }
        
    }
    redirect = ()=>{
        if(this.state.redirect)
        {
            return <Redirect to='/admin' />;
        }
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
                            <form id="" name="" className=" " >

                                <div className="text-center">
                                    <h3>LOGIN</h3>
                                </div>

                                <div className="form-group">
                                    <input type="text" id="login-form-username" name="login-form-username" value={this.state.name} className="form-control" placeholder="Login ID" onChange={(e)=> { this.setState({ name : e.target.value }) }}/>
                                </div>

                                <div className="form-group">
                                    <input type="password" id="login-form-password" name="login-form-password"  className="form-control " placeholder="Password" onChange={(e)=>{ this.setState({password : e.target.value}) }}/>
                                </div>
                                <span id="err" > {this.state.errorMsg} </span>
                                {this.redirect()}
                                <div className="form-group">
                                    <button className="btn btn-small btn-dark-solid full-width btn-rounded"  value="login" onClick={(e)=>{ this.login(e) }}>Login</button>
                                </div>
                                


                            </form>
                        </div>
                        <div className="copyright-row text-center">
                            Copyrights © All Rights Reserved by <a href="#" className="theme-color">Massive</a>
                        </div>
                        <br/>
                        <br/>
                        <br/>
                    </div>

                </div>

        )
    }
} 

export default login;