"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const React = require("react");
const react_dom_1 = require("react-dom");
require("./index");
const Header_1 = require("./components/Header/Header");
const Footer_1 = require("./components/Footer/Footer");
const Vilk_r_1 = require("./components/Vilk\u00E5r/Vilk\u00E5r");
const Home_1 = require("./components/Home/Home");
const Om_os_1 = require("./components/Om_os/Om_os");
const Kontakt_1 = require("./components/Kontakt/Kontakt");
const react_router_dom_1 = require("react-router-dom");
class Index extends React.Component {
    render() {
        return (React.createElement(react_router_dom_1.BrowserRouter, null,
            React.createElement("div", null,
                React.createElement(Header_1.default, null),
                React.createElement(react_router_dom_1.Route, { path: "/", exact: true, component: Home_1.default }),
                React.createElement(react_router_dom_1.Route, { path: "/Vilkår", component: Vilk_r_1.default }),
                React.createElement(react_router_dom_1.Route, { path: "/Kontakt", component: Kontakt_1.default }),
                React.createElement(react_router_dom_1.Route, { path: "/Om_os", component: Om_os_1.default }),
                React.createElement(react_router_dom_1.Route, { path: "/Home", component: Home_1.default }),
                React.createElement(Footer_1.default, null))));
    }
}
react_dom_1.render(React.createElement(Index, null), document.getElementById("app"));
//# sourceMappingURL=index.js.map