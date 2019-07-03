import React, { Component } from 'react';
import { Field, reduxForm }  from 'redux-form';
import InputField from '../../components/inputField'
import { connect } from "react-redux";
import { bindActionCreators } from 'C:/Users/Rameez/AppData/Local/Microsoft/TypeScript/3.4.5/node_modules/redux';
import { addUpdateproduct } from './action'

class ProductForm extends Component {

    onSubmit = (value) => {
        console.log(value);
        // this.props.addUpdateproduct(value);
    }

    render(){
    return(
        <div className="row">
        
        <div className="col-md-10 col-md-offset-1">
        <div className="heading-title-alt text-left ">
            <h4 className="text-uppercase ">{this.props.title}</h4>
        </div>
            <form className="contact-comments" onSubmit={this.props.handleSubmit(this.onSubmit)}>
                <div className="row" >
                    <div className="col-md-6 ">
                        <Field 
                            name="id"
                            title="ID"
                            type="number"
                            status="fasle"
                            component={(field)=>{
                                return <InputField field={field}/>
                            }}
                        />
                        <Field 
                            name="subcategoryid"
                            title = "Category Id"
                            type="number"
                            component={(field)=>{
                                return <InputField field={field}/>
                            }}
                        />
                         <Field 
                            name="name"
                            title = "Product Name"
                            type="text"
                            component={(field)=>{
                                return <InputField field={field}/>
                            }}
                        />
                        <Field 
                            name="price"
                            type="text"
                            title = "Product Price"
                            component={(field)=>{
                                return <InputField field={field}/>
                            }}
                        />
                        
                        </div>
                        <div className="col-md-6 ">
                        <Field 
                            name="psi"
                            title = "Product PSI"
                            type="text"
                            component={(field)=>{
                                return <InputField field={field}/>
                            }}
                        />
                        <Field 
                            name="photo"
                            title = "Photo"
                            type="file"
                            component={(field)=>{
                                return <InputField field={field}/>
                            }}
                        />
                        <Field 
                            name="size"
                            type="text"
                            title = "Size"
                            component={(field)=>{
                                return <InputField field={field}/>
                            }}
                        />
                        <Field 
                            name="priceperfeet"
                            type="text"
                            title = "Price per feet"
                            component={(field)=>{
                                return <InputField field={field}/>
                            }}
                        />
                        <div className="form-group full-width">
                            <br/>
                            <button type="submit" className="btn btn-small btn-dark-solid sendmail">
                                DONE
                            </button>
                        </div>
                    </div>
                </div>
            </form>
        </div>
        </div>
    )
  }

   
}

function mapStateToProps( state )
{
  return { auth : state.auth }
}


export default reduxForm({
    form: "productform"
})( connect(mapStateToProps, {addUpdateproduct})(ProductForm) );
