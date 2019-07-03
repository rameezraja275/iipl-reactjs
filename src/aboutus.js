import React, { Component } from 'react';
import Title from './components/pagetitle';
import OurClients from './components/ourclient';
class About extends Component{

    render()
    {
        return (
            <React.Fragment>
                <Title title="About Us" />
                <section className="body-content">
                    <div className="container">
                        <div className="row page-content">
                            <div className="col-md-12 ">
                                <div className="text-center m-bot-100">
                                    <h3 className="text-uppercase">
                                        IKTHIBAR INDUSTRIES
                                    </h3>

                                    <p>
                                        Ikthibar Industries Established in 1996 in Gilgit, Pakistan,  Ikthibar Industries is one of the leading companies that manufacture best quality Concrete pavers , Kerb Stones, Kerb Stone Paver Block, Solid Blocks, Hollow Blocks, Concrete Tiles , Pillers and Pipes and all the types of blocks and pavers are available at very best and reasonable price all over GIlgit.  Our products are made available in our major cities including Gilgit, Dunyor, and Hunza and in other major cities. So you will get your product deliver on time and in excellent quality for sure!
                                    </p>
                                </div>
                            </div>

                            <div class="col-md-12">
                        <div class="post-list-aside">
                            <div class="post-single">
                                <div class="post-slider post-img text-center">
                                    <ul class="slides">
                                        <li data-thumb="assets/img/about/about1.jpg">
                                            <a href="javascript:;" title="Freshness Photo">
                                                <img src="assets/img/about/about1.jpg" alt=""/>
                                            </a>
                                        </li>
                                        <li data-thumb="assets/img/about/about2.jpg">
                                            <a href="javascript:;" title="Awesome Lightbox">
                                                <img src="assets/img/about/about2.jpg" alt=""/>
                                            </a>
                                        </li>
                                        <li data-thumb="assets/img/about/about3.jpg">
                                            <a href="javascript:;" title="Massive UI Components">
                                                <img src="assets/img/about/about3.jpg" alt=""/>
                                            </a>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="row m-bot-80">
                    <div class="col-md-12">
                        <div class="">
                            <h4 class="text-center text-uppercase">
                                who we are
                            </h4>

                            <p class="column-two">
                                Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.
                                totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni
                                dolores. Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.
                            </p>

                        </div>
                    </div>
                    </div>
                    <hr/>
                    <div class="page-content p-bot-0">
                <div class="container">
                    <div class="row">
                        <div class="heading-title text-center">
                            <h3 class="text-uppercase">why you will choose Ikthibar Industries </h3>
                        </div>

                        <div class="col-md-4">
                            <div class="">
                                <h4 class="text-uppercase">
                                    Clean Design
                                </h4>

                                <p>
                                    Totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores. Sed ut perspiciatis
                                    unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.
                                </p>

                            </div>
                        </div>
                        <div class="col-md-4">
                            <div class="">
                                <h4 class="text-uppercase">
                                    Built on Bootstrap
                                </h4>

                                <p>
                                    Rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores. Sed ut perspiciatis unde omnis
                                    iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.
                                </p>

                            </div>
                        </div>
                        <div class="col-md-4">
                            <div class="">
                                <h4 class="text-uppercase">
                                    Solid Flexibility
                                </h4>

                                <p>
                                    Aperiam eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores. Sed ut perspiciatis unde omnis
                                    iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.
                                </p>

                            </div>
                        </div>
                    </div>

                </div>
                <div class="text-center responsive-img p-top-50">
                    <img src="assets/img/about/01.png" alt="" />
                </div>
            </div>
            <OurClients/>
            <br/>

            <br/>
            <br/>
            <br/>
        
                    </div>
                   
                </section>
            </React.Fragment>
        )
    }
}

export default About;