"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const React = require("react");
const react_1 = require("react");
const FinansBar_1 = require("../../components/Home/FinansBar/FinansBar");
const AcceptLoan_1 = require("../../components/Home/AcceptLoan/AcceptLoan");
class Home extends react_1.Component {
    constructor(props) {
        super(props);
        this.handleData = (data) => {
            this.setState({ amount: data });
        };
        this.state = { amount: null };
    }
    render() {
        return (React.createElement("div", null,
            React.createElement("div", null,
                React.createElement(FinansBar_1.default, { handlerFromParant: this.handleData })),
            React.createElement("div", null,
                React.createElement(AcceptLoan_1.default, { data: this.state.amount }))));
    }
}
exports.default = Home;
//# sourceMappingURL=Home.js.map