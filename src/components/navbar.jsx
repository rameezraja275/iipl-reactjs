import React, {Component} from "react";
import Dropdown from "./dropDown";
class Navbar extends Component {
    
    render()
    {
        return (
          <header className="l-header">
                <div className="l-navbar l-navbar_expand l-navbar_t-light-trans js-navbar-sticky">
                <div className="container-fluid">
                    <nav className="menuzord js-primary-navigation" role="navigation" aria-label="Primary Navigation">
                        <a href="index.html" className="logo-brand">
                            <img className="retina" src="assets/img/logo.png" alt="Massive"/>
                        </a>
                        <ul className="menuzord-menu menuzord-right c-nav_s-standard">
                        {
                            this.props.menu.map((item, i)=>(
                                <Dropdown key={i} data={item} />
                            ))              
                        }
                        </ul>
                    </nav>
                </div>
                </div> 
            </header>
        );
    }
}
export default Navbar;