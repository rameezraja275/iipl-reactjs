import React , {Component} from 'react';

class Slider extends Component
{
    render()
    {
        return (
            
        <React.Fragment>
            <div className="bs-hero full-screen slide-top-adjust">
            <div id="carousel-arrow" className="carousel slide carousel-fade full-width" data-ride="carousel">
                
                    <ol className="carousel-indicators">
                        <li data-target="#carousel-arrow" data-slide-to="0" className="active"></li>
                        <li data-target="#carousel-arrow" data-slide-to="1"></li>
                        <li data-target="#carousel-arrow" data-slide-to="2"></li>
                    </ol>

                
                <div id="fullscreen-banner" className="carousel-inner fullscreen-banner" role="listbox">
                        <div className="item active">
                            <img src="assets/img/decor/banner1.jpg" alt=""/>

                            <div className="container">
                                <div className="bs-info bs-info-right fashion-title fadeInDown animated">
                                    <h1 className="text-uppercase  ">Think decor</h1>
                                    <h3 className="text-uppercase ls-20">we are massive</h3>
                                </div>
                            </div>
                        </div>
                        <div className="item">
                            <img src="assets/img/decor/banner2.jpg" alt=""/>
                            <div className="container">
                                <div className="bs-info bs-info fashion-title fadeInDown animated">
                                    <h1 className="text-uppercase light-txt ">think Elegant</h1>
                                    <h3 className="text-uppercase light-txt ls-20">we love design</h3>
                                </div>
                            </div>
                        </div>
                        <div className="item">
                            <img src="assets/img/decor/banner3.jpg" alt=""/>
                            <div className="container">
                                <div className="bs-info bs-info-center fashion-title fadeInDown animated">
                                    <h1 className="text-uppercase">better living</h1>
                                    <h3 className="text-uppercase ls-20">Creative work</h3>
                                </div>
                            </div>
                        </div>
                    </div>
                    <a className="left carousel-control" href="#carousel-arrow" role="button" data-slide="prev"></a>
                    <a className="right carousel-control" href="#carousel-arrow" role="button" data-slide="next"></a>
                </div> 
                </div>
        </React.Fragment>
        );
    }
}

export default Slider;