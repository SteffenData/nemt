///<reference path="../../../node_modules/@types/react/index.d.ts"/>
import * as React from "react";
import {Component} from "react";
import "./FinansBarStyle";
import "react-bootstrap"
import ReactBootstrapSlider from 'react-bootstrap-slider';
interface MyProps {
}
interface Idata {
    amount: number;
    startValue: number;
    endValue: number;
    stepValue: number
    startstep: number
    maxPeriode: number
    minPeriode: number
    periodeStep: number
    periodeStart: number
}
interface MyState {
    payEachMonth: number ,
    value: string;
    valnumber: number;
    data: Idata;
}
class FinansBar extends Component<MyProps, MyState> {
    constructor(props: MyProps) {
        super(props);
        this.state = {
            data: {amount: 10000, startValue: 1000, endValue: 30000, stepValue: 500, startstep: 6000, minPeriode: 12, maxPeriode: 36, periodeStep: 1, periodeStart: 24},
            payEachMonth : 498,
            value: "",
            valnumber: 10
        };
        //have to bind, get error when using arrow function like the click
        this.amountSlider = this.amountSlider.bind(this);
        this.periodeSlider = this.periodeSlider.bind(this);

    }

    private localPayEachMonth;

    amountSlider(event) {
        this.state.data.amount = event.target.value;
        this.calculatePayEachMonth(event.target.value, this.state.data.periodeStart);
    }
    periodeSlider(event){
        this.state.data.periodeStart = event.target.value;
        this.localPayEachMonth = (this.state.data.amount, event.target.value);
        this.calculatePayEachMonth(this.state.data.amount, event.target.value);
    }
    calculatePayEachMonth = (amount, month) => {
        const rate = (9.90/12)/100;
        let startFee = 800;
        let monthlyFee = 25;
        let payEachMonthf = Math.round((amount + startFee) *(rate/(1-(Math.pow(1+rate,-month)))));
        this.calsomething();
        this.setState({payEachMonth: payEachMonthf + monthlyFee})
    };

    calsomething = () => {

        const rate = (1+(0.0990/12));
        console.log(rate);

        console.log(Math.pow(1.2119,1/3))






};

    render() {
        return (
            <div className="loanbar col-lg-2">
                <div className="container">
                    <div className="col-lg-2">
                        <br/>
                        <br/>
                        <p className="textCenter">Ønsket lånebeløb</p>
                        <ReactBootstrapSlider
                            value={this.state.data.amount}
                            change={this.amountSlider}
                            step={this.state.data.stepValue}
                            max={this.state.data.endValue}
                            min={this.state.data.startValue}
                            orientation="horiental"
                            role={this.state.data.amount}
                        />
                        <div className="col-mlg-2 container">
                            <div className="col-lg-1">
                                <p>{this.state.data.startValue} kr</p>
                            </div>
                            <div className="col-lg-1">
                                <p>{this.state.data.endValue} kr</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="container">
                    <div className="col-lg-2">
                        <br/>
                        <br/>
                        <p className="textCenter">Ønsket låneperiode</p>
                        <ReactBootstrapSlider
                            value={this.state.data.periodeStart}
                            change={this.periodeSlider}
                            step={this.state.data.periodeStep}
                            max={this.state.data.maxPeriode}
                            min={this.state.data.minPeriode}
                            orientation="horiental"
                            role={this.state.data.periodeStart}
                        />
                        <div className="col-mlg-2 container">
                            <div className="col-lg-1">
                                <p>{this.state.data.minPeriode} mdr</p>
                            </div>
                            <div className="col-lg-1">
                                <p>{this.state.data.maxPeriode} mdr</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div>
                    <p>Betal kun {this.state.payEachMonth}.kr hver måned i de næste {this.state.data.periodeStart} måneder, lån {this.state.data.amount}.kr, og udlev dine drømme</p>
                    <p>Den årlige rente er kun 9,90% , årlige omkostninger i procent ÅOP er ().kr det samlede tilbagebetalingbeløb for perioden er ().kr. Beløbet tillægges et oprettelsesgebyr på 800.kr</p>
                </div>
            </div>
        )
    }
}
export default FinansBar;