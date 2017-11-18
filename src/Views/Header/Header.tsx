import * as React from "react";
import './Header.css'
import { Grid, Row, Col} from 'react-bootstrap';

import {render } from "react-dom"
import { Link } from 'react-router-dom';

class Header extends React.Component {

    render(){


     return (

         <div>
             <nav className="navbar navbar-default ">
                 <div className="container-fluid bar">
                     <div className="nabbar-header">
                         <span className="navbar-toggle" data-toggle="collapse" data-target="#mynav">
                             <span className="icon-bar"></span>
                             <span className="icon-bar"></span>
                             <span className="icon-bar"></span>
                         </span>
                         <Link to="/" className="navbar-brand" >Nemt A/S </Link>
                     </div>
                     <div className="collapse navbar-collapse" id="mynav">
                         <ul className="nav navbar-nav navbar-right listhover">
                             <li><Link to="/Vilkår">Vilkår</Link></li>
                             <li><Link to="/Om_os">Om Os</Link></li>
                             <li><Link to="/Kontakt">Kontakt</Link></li>
                         </ul>
                     </div>
                 </div>
             </nav>
         </div>
     )

    }

}

export default Header;