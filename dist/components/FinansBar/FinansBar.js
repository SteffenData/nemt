"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
///<reference path="../../../node_modules/@types/react/index.d.ts"/>
const React = require("react");
const react_1 = require("react");
require("./FinansBarStyle");
require("react-bootstrap");
const react_bootstrap_slider_1 = require("react-bootstrap-slider");
class FinansBar extends react_1.Component {
    constructor(props) {
        super(props);
        this.calculatePayEachMonth = (amount, month) => {
            const rate = 0.021;
            let payEachMonthf = Math.round(amount * (rate / (1 - (Math.pow(1 + rate, -month)))));
            this.setState({ payEachMonth: payEachMonthf });
        };
        this.state = {
            data: { amount: 10000, startValue: 1000, endValue: 30000, stepValue: 500, startstep: 6000, minPeriode: 12, maxPeriode: 36, periodeStep: 1, periodeStart: 24 },
            payEachMonth: 535,
            value: "",
            valnumber: 10
        };
        //have to bind, get error when using arrow function like the click
        this.amountSlider = this.amountSlider.bind(this);
        this.periodeSlider = this.periodeSlider.bind(this);
        this.calculatePayEachMonth = this.calculatePayEachMonth.bind(this);
    }
    amountSlider(event) {
        this.state.data.amount = event.target.value;
        this.calculatePayEachMonth(event.target.value, this.state.data.periodeStart);
    }
    periodeSlider(event) {
        this.state.data.periodeStart = event.target.value;
        this.calculatePayEachMonth(this.state.data.amount, event.target.value);
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
                            React.createElement("p", null,
                                this.state.data.startValue,
                                " kr")),
                        React.createElement("div", { className: "col-lg-1" },
                            React.createElement("p", null,
                                this.state.data.endValue,
                                " kr"))))),
            React.createElement("div", { className: "container" },
                React.createElement("div", { className: "col-lg-2" },
                    React.createElement("br", null),
                    React.createElement("br", null),
                    React.createElement("p", { className: "textCenter" }, "\u00D8nsket l\u00E5neperiode"),
                    React.createElement(react_bootstrap_slider_1.default, { value: this.state.data.periodeStart, change: this.periodeSlider, step: this.state.data.periodeStep, max: this.state.data.maxPeriode, min: this.state.data.minPeriode, orientation: "horiental", role: this.state.data.periodeStart }),
                    React.createElement("div", { className: "col-mlg-2 container" },
                        React.createElement("div", { className: "col-lg-1" },
                            React.createElement("p", null,
                                this.state.data.minPeriode,
                                " mdr")),
                        React.createElement("div", { className: "col-lg-1" },
                            React.createElement("p", null,
                                this.state.data.maxPeriode,
                                " mdr"))))),
            React.createElement("div", null,
                React.createElement("p", null,
                    "Betal kun ",
                    this.state.payEachMonth,
                    ".kr hver m\u00E5ned i de n\u00E6ste ",
                    this.state.data.periodeStart,
                    " m\u00E5neder, l\u00E5n ",
                    this.state.data.amount,
                    ".kr, og udlev dine dr\u00F8mme"),
                React.createElement("p", null, "\u00E5op"))));
    }
}
exports.default = FinansBar;
//# sourceMappingURL=FinansBar.js.map