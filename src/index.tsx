

import * as React from "react";

import {render } from "react-dom";
import "./index"
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import Vilkår from "./components/Vilkår/Vilkår";
import Home from "./components/Home/Home";
import Om_os from "./components/Om_os/Om_os";
import Kontakt from "./components/Kontakt/Kontakt";
import { BrowserRouter, Route } from 'react-router-dom';

class Index extends React.Component {

    render() {

        return (

            <BrowserRouter>
                <div>
                    <Header/>

                    <Route path="/" exact component={Home}/>
                    <Route  path="/Vilkår" component={Vilkår}/>
                    <Route  path="/Kontakt" component={Kontakt}/>
                    <Route  path="/Om_os" component={Om_os}/>
                    <Route  path="/Home" component={Home}/>

                    <Footer/>
                </div>
            </BrowserRouter>
        );
    }
}

render(<Index/>, document.getElementById("app"));