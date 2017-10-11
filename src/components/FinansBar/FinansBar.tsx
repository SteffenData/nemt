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
}

interface MyState {
    value: string;
    valnumber: number;
    data: Idata;

}

class FinansBar extends Component<MyProps, MyState> {

    constructor(props: MyProps) {
        super(props);
        this.state = {
            data: {amount: 10000, startValue: 1000, endValue: 30000, stepValue: 500, startstep: 6000},
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
                            ff
                            <p>{this.state.data.startValue}</p>
                        </div>
                        <div className="col-lg-1">
                            ss
                            <p>{this.state.data.endValue}</p>
                        </div>
                 </div>
                    </div>
                </div>
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
                                ff
                                <p>{this.state.data.startValue}</p>
                            </div>
                            <div className="col-lg-1">
                                ss
                                <p>{this.state.data.endValue}</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default FinansBar;