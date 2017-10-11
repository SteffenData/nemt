"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const React = require("react");
require("./Header.css");
const react_router_dom_1 = require("react-router-dom");
class Header extends React.Component {
    render() {
        return (React.createElement("div", null,
            React.createElement("nav", { className: "navbar navbar-default " },
                React.createElement("div", { className: "container-fluid bar" },
                    React.createElement("div", { className: "nabbar-header" },
                        React.createElement("span", { className: "navbar-toggle", "data-toggle": "collapse", "data-target": "#mynav" },
                            React.createElement("span", { className: "icon-bar" }),
                            React.createElement("span", { className: "icon-bar" }),
                            React.createElement("span", { className: "icon-bar" })),
                        React.createElement(react_router_dom_1.Link, { to: "/Home", className: "navbar-brand" }, "Nemt A/S ")),
                    React.createElement("div", { className: "collapse navbar-collapse", id: "mynav" },
                        React.createElement("ul", { className: "nav navbar-nav navbar-right listhover" },
                            React.createElement("li", null,
                                React.createElement(react_router_dom_1.Link, { to: "/Vilkår" }, "Vilk\u00E5r")),
                            React.createElement("li", null,
                                React.createElement(react_router_dom_1.Link, { to: "/Om_os" }, "Om Os")),
                            React.createElement("li", null,
                                React.createElement(react_router_dom_1.Link, { to: "/Kontakt" }, "Kontakt"))))))));
    }
}
exports.default = Header;
//# sourceMappingURL=Header.js.map