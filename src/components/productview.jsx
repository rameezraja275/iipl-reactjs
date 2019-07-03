import React ,{Component} from 'react';

class productBox extends Component{
    render(){
        return(
                <div className="portfolio-item">
                                <div className="thumb">
                                    <img src="assets/img/decor/port1.jpg" alt=""/>
                                    <div className="portfolio-hover">
                                        <div className="action-btn">
                                            <a href="assets/img/decor/port1.jpg" className="popup-gallery" title="lightbox view"> <i className="icon-basic_magnifier"></i> 
                                            </a>
                                        </div>
                                    </div>
                                </div>
                                <div className="portfolio-title text-center">
                                    <h4><a href="assets/img/decor/port1.jpg" className="popup-gallery2" title="lightbox view">perspiciatis unde omnis</a></h4>
                                    <p>$39.99</p>
                                </div>
                </div>
            
        );
    }    
}

export default productBox;