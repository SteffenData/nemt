"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const React = require("react");
require("./AcceptLoanStyle");
class AcceptLoan extends React.Component {
    constructor(props) {
        super(props);
        this.markChekBox = (event) => {
            switch (event.target.name) {
                case ("chekbox1"):
                    this.setState({ chek1: !this.state.chek1 });
                    break;
                case ("chekbox2"):
                    this.setState({ chek2: !this.state.chek2 });
                    break;
                case ("chekbox3"):
                    this.setState({ chek3: !this.state.chek3 });
                    break;
                case ("chekbox4"):
                    this.setState({ chek4: !this.state.chek4 });
                    break;
                default: break;
            }
        };
        this.clickAcceptLoan = () => {
            if (this.state.chek1 && this.state.chek2 && this.state.chek3 && this.state.chek4 == true) {
                console.log("button");
            }
        };
        this.props = { data: null };
        this.state = { chek1: false, chek2: false, chek3: false, chek4: false };
        this.clickAcceptLoan = this.clickAcceptLoan.bind(this);
    }
    render() {
        return (React.createElement("div", { className: "col-lg-6 col-md-6 col-sm-6 col-xs-12 container" },
            React.createElement("div", null,
                React.createElement("div", { className: "" },
                    React.createElement("ol", null, "Nemt tilbyder l\u00E5n fra 1.000 helt op til 30.000 kroner."),
                    React.createElement("ol", null, " Udfyld l\u00E5neans\u00F8gningen lige nu og f\u00E5 svar med det samme. Du kan ans\u00F8ge hos os, hvis du kan svare Ja p\u00E5 f\u00F8lgende:")),
                React.createElement("div", { className: "" },
                    React.createElement("div", null,
                        React.createElement("label", { className: "chekboxstyle" },
                            React.createElement("input", { type: "checkbox", name: "chekbox1", checked: this.state.chek1, onChange: (e) => this.markChekBox(e) }),
                            "jeg er over 25")),
                    React.createElement("div", null,
                        React.createElement("input", { type: "checkbox", name: "chekbox2", checked: this.chek2, onChange: (e) => this.markChekBox(e) }),
                        React.createElement("span", null, "jeg har fast arbejde")),
                    React.createElement("div", null,
                        React.createElement("input", { type: "checkbox", name: "chekbox3", checked: this.chek3, onChange: (e) => this.markChekBox(e) }),
                        React.createElement("span", null, "Jeg er ikke registreret i RKI")),
                    React.createElement("div", null,
                        React.createElement("input", { type: "checkbox", name: "chekbox4", checked: this.chek4, onChange: (e) => this.markChekBox(e) }),
                        React.createElement("span", null, "Jeg har en minimum indkomst p\u00E5 120.000 kr./\u00E5r"))),
                React.createElement("div", { className: "" },
                    React.createElement("ol", null,
                        "kunne du s\u00E6tte flueben ved ovenst\u00E5enede statements, s\u00E5 kan vi tilbyde dig at l\u00E5ne ",
                        this.props.data,
                        " kr. Til en god rente."),
                    React.createElement("ol", null, "Ans\u00F8g nu, og udlev dine dr\u00F8mme")),
                React.createElement("div", { className: "" },
                    React.createElement("button", { type: "button", onClick: this.clickAcceptLoan }, "Ans\u00F8g nu")))));
    }
}
exports.default = AcceptLoan;
//# sourceMappingURL=AcceptLoan.js.map