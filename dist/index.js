"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const React = require("react");
const react_dom_1 = require("react-dom");
require("./index");
const Header_1 = require("./Views/Header/Header");
const Footer_1 = require("./Views/Footer/Footer");
const Vilk_r_1 = require("./Views/Vilk\u00E5r/Vilk\u00E5r");
const Home_1 = require("./Views/Home/Home");
const Om_os_1 = require("./Views/Om_os/Om_os");
const Contact_1 = require("./Views/Contact/Contact");
const react_router_1 = require("react-router");
const react_router_dom_1 = require("react-router-dom");
class Index extends React.Component {
    render() {
        return (React.createElement(react_router_dom_1.BrowserRouter, null,
            React.createElement("div", null,
                React.createElement(Header_1.default, null),
                React.createElement(react_router_1.Route, { exact: true, path: '/', component: Home_1.default }),
                React.createElement(react_router_1.Route, { exact: true, path: '/Vilkår', component: Vilk_r_1.default }),
                React.createElement(react_router_1.Route, { exact: true, path: '/Kontakt', component: Contact_1.default }),
                React.createElement(react_router_1.Route, { exact: true, path: '/Om_os', component: Om_os_1.default }),
                React.createElement(Footer_1.default, null))));
    }
}
react_dom_1.render(React.createElement(Index, null), document.getElementById("app"));
//# sourceMappingURL=index.js.map