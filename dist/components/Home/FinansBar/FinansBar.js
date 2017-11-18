"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
///<reference path="../../../../node_modules/@types/react/index.d.ts"/>
const React = require("react");
const react_1 = require("react");
require("./FinansBarStyle");
require("react-bootstrap");
const react_bootstrap_slider_1 = require("react-bootstrap-slider");
class FinansBar extends react_1.Component {
    constructor(props) {
        super(props);
        this.calculatePayEachMonth = (amount, month) => {
            const rate = (10.33 / 12) / 100;
            let startFee = 1300;
            let monthlyFee = 25;
            this.payEachMonth = Math.round((amount + startFee) * (rate / (1 - (Math.pow(1 + rate, -month)))));
            this.setState({ payEachMonth: this.payEachMonth + monthlyFee });
            this.fullPayment = this.state.data.periodeStart * this.payEachMonth;
        };
        this.change = () => {
            this.props.handlerFromParant(this.state.data.amount);
        };
        this.state = {
            data: { amount: 10000, startValue: 1000, endValue: 30000, stepValue: 500, startstep: 6000, minPeriode: 12, maxPeriode: 36, periodeStep: 1, periodeStart: 24 },
            payEachMonth: 498,
            value: "",
            valnumber: 10,
        };
        //have to bind, get error when using arrow function like the click
        this.amountSlider = this.amountSlider.bind(this);
        this.periodeSlider = this.periodeSlider.bind(this);
    }
    amountSlider(event) {
        this.state.data.amount = event.target.value;
        this.calculatePayEachMonth(event.target.value, this.state.data.periodeStart);
        this.change();
    }
    periodeSlider(event) {
        this.state.data.periodeStart = event.target.value;
        this.calculatePayEachMonth(this.state.data.amount, event.target.value);
    }
    render() {
        return (React.createElement("div", { className: " col-lg-6 col-md-6 col-sm-6 col-xs-12" },
            React.createElement("div", { className: "container loanvaluecontainer" },
                React.createElement("div", { className: "" },
                    React.createElement("br", null),
                    React.createElement("br", null),
                    React.createElement("p", { className: "textCenter" }, "\u00D8nsket l\u00E5nebel\u00F8b"),
                    React.createElement(react_bootstrap_slider_1.default, { value: this.state.data.amount, change: this.amountSlider, step: this.state.data.stepValue, max: this.state.data.endValue, min: this.state.data.startValue, orientation: "horiental", role: this.state.data.amount }),
                    React.createElement("div", { className: "container" },
                        React.createElement("div", { className: "" },
                            React.createElement("span", { className: "startvalue" },
                                this.state.data.startValue,
                                " kr")),
                        React.createElement("div", { className: "endvalue" },
                            React.createElement("span", null,
                                this.state.data.endValue,
                                " kr"))))),
            React.createElement("div", { className: " container loanvaluecontainer" },
                React.createElement("div", { className: "" },
                    React.createElement("br", null),
                    React.createElement("br", null),
                    React.createElement("p", { className: "textCenter" }, "\u00D8nsket l\u00E5neperiode"),
                    React.createElement(react_bootstrap_slider_1.default, { value: this.state.data.periodeStart, change: this.periodeSlider, step: this.state.data.periodeStep, max: this.state.data.maxPeriode, min: this.state.data.minPeriode, orientation: "horiental", role: this.state.data.periodeStart }),
                    React.createElement("div", { className: "container" },
                        React.createElement("div", { className: "startvalue" },
                            React.createElement("p", null,
                                this.state.data.minPeriode,
                                " mdr")),
                        React.createElement("div", { className: "endvalue" },
                            React.createElement("p", null,
                                this.state.data.maxPeriode,
                                " mdr"))))),
            React.createElement("div", { className: "" },
                React.createElement("ol", null,
                    "Betal kun ",
                    this.state.payEachMonth,
                    ".kr hver m\u00E5ned i de n\u00E6ste ",
                    this.state.data.periodeStart,
                    " m\u00E5neder, l\u00E5n ",
                    this.state.data.amount,
                    ".kr, og udlev dine dr\u00F8mme"),
                React.createElement("ol", null,
                    "Den \u00E5rlige rente er kun 10,33% ,  \u00C5OP op til 27,3 %.kr det samlede tilbagebetalingbel\u00F8b for perioden er ",
                    this.fullPayment,
                    ".kr. Bel\u00F8bet till\u00E6gges et oprettelsesgebyr p\u00E5 1300.kr"),
                React.createElement("ol", null, "tallene er kun vejledende"))));
    }
}
exports.default = FinansBar;
//# sourceMappingURL=FinansBar.js.map