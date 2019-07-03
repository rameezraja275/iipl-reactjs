import React, {Component} from 'react'
import Admin_BLL from '../../BLL/common'
import la from 'lodash'

class Products extends Component {

    state = { data : [] }
    async componentDidMount()
    {
        try{
            const row = await Admin_BLL.getProducts(0);
            this.setState( {data : row.data} ); 
          
        }
        catch(e)
        {
            console.log("Error : " , e );
        }
    }

    render()
    {
        return(
            <section className="body-content ">

            <div className="page-content">
                <div className="container">
                    <div className="row">

                        <div className="col-md-8 col-md-offset-2">

                            <div className="heading-title-alt text-left ">
                                <h4 className="text-uppercase ">Striped Table</h4>
                            </div>
                            <table className="table table-striped">
                                <thead>
                                    <tr>
                                        <th>NAME</th>
                                        <th>PRICE</th>
                                        <th>PHOTO</th>
                                        <th>Edit</th>
                                        <th>Delete</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        {
                                            
                                            this.state.data.map((item, key)=>{
                                                //  console.log(item);
                                                // return la.map( item , abc => {
                                                //     // console.log("json index ",abc);
                                                //     return (<React.Fragment>
                                                //          <td>{abc}</td>
                                                //     </React.Fragment>)
                                                // })
                                                // console.log("step 1   ");
                                                for (let key in item) { 
                                                    if (item.hasOwnProperty(key)) {
                                                        return <td>{item[key]}</td>       
                                                    }
                                                }
                                                // console.log("step 4   ");
                                                // return item.map((ab, a)=>(
                                                //     <React.Fragment>
                                                //         <td>{ab.name}</td>
                                                //         <td>{ab.price}</td>
                                                //         <td>{ab.photo}</td>
                                                //     </React.Fragment>
                                                // )) 
                                            }
                                            )
                                        }
                                        <td>button</td>
                                        <td>button</td>              
                                    </tr>
                                </tbody>
                            </table>

                            <div className="divider d-solid d-single text-center">
                                <span className="dot"> </span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            </section>
        )
    }
}

export default Products;