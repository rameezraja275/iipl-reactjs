import React, { Component } from 'react';


class footer extends Component{

    render()
    {
        
        return(

           <React.Fragment>
<footer id="footer" className="gray footer-3">
                <div className="container">

                <div className="f-logo-center">
                    <a href="index.html" className="footer-logo">
                        <img className="retina" src="assets/img/footer-logo.png" alt=""/>
                    </a>
                </div>
                {/* <div className="sub-title">THE ULTIMATE THEME WITH MASSIVE COLLECTION</div> */}

                <div className="col-md-6">
                    <div className="copyright">
                        © MASSIVE 2014.
                    </div>
                    <div className="copyright-sub-title text-uppercase">
                        Website Build by Rameez Raja
                    </div>
                </div>
                <div className="col-md-6">
                    <div className="social-link pull-right circle ">
                        <a href="#"><i className="fa fa-facebook"></i></a>
                        <a href="#"><i className="fa fa-twitter"></i></a>
                        <a href="#"><i className="fa fa-dribbble"></i></a>
                        <a href="#"><i className="fa fa-google-plus"></i></a>
                        <a href="#"><i className="fa fa-behance"></i></a>
                    </div>
                </div>
                </div>
                </footer>
           </React.Fragment>    

        );
    }
}

export default footer;