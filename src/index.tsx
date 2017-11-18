

import * as React from "react";

import {render } from "react-dom";
import "./index"
import Header from "./Views/Header/Header";
import Footer from "./Views/Footer/Footer";
import Vilkår from "./Views/Vilkår/Vilkår";
import Home from "./Views/Home/Home";
import Om_os from "./Views/Om_os/Om_os";
import Contact from "./Views/Contact/Contact";
import { Router, Route} from 'react-router';
import {BrowserRouter} from "react-router-dom";

class Index extends React.Component {

    render() {

        return (

            <BrowserRouter>
                <div>
                    <Header/>

                    <Route exact path='/' component={Home}/>
                    <Route  exact path='/Vilkår' component={Vilkår}/>
                    <Route  exact path='/Kontakt' component={Contact}/>
                    <Route exact path='/Om_os' component={Om_os}/>


                    <Footer/>
                </div>
            </BrowserRouter>
        );
    }
}

render(<Index/>, document.getElementById("app"));