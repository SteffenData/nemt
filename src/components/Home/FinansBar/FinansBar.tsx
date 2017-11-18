///<reference path="../../../../node_modules/@types/react/index.d.ts"/>
import * as React from "react";
import {Component} from "react";
import "./FinansBarStyle";
import "react-bootstrap"
import ReactBootstrapSlider from 'react-bootstrap-slider';
interface MyProps {
    handlerFromParant:any


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
            valnumber: 10,
        };
        //have to bind, get error when using arrow function like the click
        this.amountSlider = this.amountSlider.bind(this);
        this.periodeSlider = this.periodeSlider.bind(this);

    }

    private payEachMonth;
    private fullPayment;

    amountSlider(event) {
        this.state.data.amount = event.target.value;
        this.calculatePayEachMonth(event.target.value, this.state.data.periodeStart);
        this.change();
    }
    periodeSlider(event){
        this.state.data.periodeStart = event.target.value;
        this.calculatePayEachMonth(this.state.data.amount, event.target.value);

    }
    calculatePayEachMonth = (amount, month) => {
        const rate = (10.33/12)/100;
        let startFee = 1300;
        let monthlyFee = 25;
        this.payEachMonth = Math.round((amount + startFee) *(rate/(1-(Math.pow(1+rate,-month)))));
        this.setState({payEachMonth: this.payEachMonth + monthlyFee});
        this.fullPayment = this.state.data.periodeStart * this.payEachMonth

    };

      change = () => {
       this.props.handlerFromParant(this.state.data.amount);
      };

    render() {
        return (

            <div className=" col-lg-6 col-md-6 col-sm-6 col-xs-12">
                <div className="container loanvaluecontainer">
                    <div className="">
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
                        <div className="container">
                            <div className="">
                                <span className="startvalue">{this.state.data.startValue} kr</span>
                            </div>
                            <div className="endvalue">
                                <span>{this.state.data.endValue} kr</span>
                            </div>

                        </div>
                    </div>
                </div>
                <div className=" container loanvaluecontainer">
                    <div className="">
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
                        <div className="container">
                            <div className="startvalue">
                                <p>{this.state.data.minPeriode} mdr</p>
                            </div>
                            <div className="endvalue">
                                <p>{this.state.data.maxPeriode} mdr</p>
                            </div>
                        </div>
                    </div>

            </div>
                <div className="">
                    <ol>Betal kun {this.state.payEachMonth}.kr hver måned i de næste {this.state.data.periodeStart} måneder, lån {this.state.data.amount}.kr, og udlev dine drømme</ol>
                    <ol>Den årlige rente er kun 10,33% ,  ÅOP op til 27,3 %.kr det samlede tilbagebetalingbeløb for perioden er {this.fullPayment}.kr. Beløbet tillægges et oprettelsesgebyr på 1300.kr</ol>
                    <ol>tallene er kun vejledende</ol>
                </div>
            </div>
        )
    }
}
export default FinansBar;