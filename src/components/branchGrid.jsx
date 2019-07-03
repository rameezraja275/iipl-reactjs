import React, { Component } from 'react';

import BranchBox from './branchview';

class BranchGrid extends Component{

    render()
    {
        return(
            <div className="page-content" id="page-contents-outlet">
            <div className="container">
                    <div className="row">

                    
                        <div className="heading-title border-short-bottom text-center">
                            <h3 className="text-uppercase">outlets</h3>
                            {/* <div className="half-txt">Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit</div> */}
                        </div>
                        <BranchBox city="Gilgit" address="Zulfiqar abad ,Jutial ,Gilgit" phone="+923455440669" email="iipl@gmail.com"/>
                        <BranchBox city="Hunza" address="Aliabad ,Hunza" phone="+923455440669" email="iipl@gmail.com"/>
                        <BranchBox city="Dunyor" address="Chasma Chowk , Dunyor" phone="+923455440669" email="iipl@gmail.com"/>
                    </div>
            </div>
            </div>
        );
    }
}

export default BranchGrid;