"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const React = require("react");
const react_1 = require("react");
require("./FinansBarStyle");
require("react-bootstrap");
const react_bootstrap_slider_1 = require("react-bootstrap-slider");
class FinansBar extends react_1.Component {
    constructor(props) {
        super(props);
        this.state = {
            data: { amount: 10000, startValue: 1000, endValue: 30000, stepValue: 500, startstep: 6000 },
            value: "",
            valnumber: 10
        };
        //have to bind, get error when using arrow function like the click
        this.amountSlider = this.amountSlider.bind(this);
    }
    amountSlider(event) {
        this.state.data.amount = event.target.value;
        console.log(this.state.data.amount);
        console.log(event);
    }
    render() {
        return (React.createElement("div", { className: "loanbar col-lg-2" },
            React.createElement("div", { className: "container" },
                React.createElement("div", { className: "col-lg-2" },
                    React.createElement("br", null),
                    React.createElement("br", null),
                    React.createElement("p", { className: "textCenter" }, "\u00D8nsket l\u00E5nebel\u00F8b"),
                    React.createElement(react_bootstrap_slider_1.default, { value: this.state.data.amount, change: this.amountSlider, step: this.state.data.stepValue, max: this.state.data.endValue, min: this.state.data.startValue, orientation: "horiental", role: this.state.data.amount }),
                    React.createElement("div", { className: "col-mlg-2 container" },
                        React.createElement("div", { className: "col-lg-1" },
                            "ff",
                            React.createElement("p", null, this.state.data.startValue)),
                        React.createElement("div", { className: "col-lg-1" },
                            "ss",
                            React.createElement("p", null, this.state.data.endValue))))),
            React.createElement("div", { className: "container" },
                React.createElement("div", { className: "col-lg-2" },
                    React.createElement("br", null),
                    React.createElement("br", null),
                    React.createElement("p", { className: "textCenter" }, "\u00D8nsket l\u00E5nebel\u00F8b"),
                    React.createElement(react_bootstrap_slider_1.default, { value: this.state.data.amount, change: this.amountSlider, step: this.state.data.stepValue, max: this.state.data.endValue, min: this.state.data.startValue, orientation: "horiental", role: this.state.data.amount }),
                    React.createElement("div", { className: "col-mlg-2 container" },
                        React.createElement("div", { className: "col-lg-1" },
                            "ff",
                            React.createElement("p", null, this.state.data.startValue)),
                        React.createElement("div", { className: "col-lg-1" },
                            "ss",
                            React.createElement("p", null, this.state.data.endValue)))))));
    }
}
exports.default = FinansBar;
//# sourceMappingURL=FinansBar.js.map