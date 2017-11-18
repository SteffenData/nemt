import * as React from "react";
import "./AcceptLoanStyle";


import {render} from "react-dom"
import {Link} from 'react-router-dom';

interface myProps {
    data: number
}

interface myState {
    chek1: boolean,
    chek2: boolean,
    chek3: boolean,
    chek4: boolean
}



class AcceptLoan extends React.Component<myProps, myState> {



    constructor(props: myProps) {
        super(props);
        this.props = {data: null};
        this.state = {chek1: false,chek2: false,chek3: false,chek4: false}
        this.clickAcceptLoan = this.clickAcceptLoan.bind(this);
    }


    private chek2: boolean;
    private chek3: boolean;
    private chek4: boolean;


    markChekBox = (event) => {

        switch (event.target.name){
            case ("chekbox1"): this.setState({chek1: !this.state.chek1});
                break;
            case ("chekbox2"): this.setState({chek2: !this.state.chek2});
                break;
            case ("chekbox3"): this.setState({chek3: !this.state.chek3});
                break;
            case ("chekbox4"): this.setState({chek4: !this.state.chek4});
                break;
            default: break;
        }
    };

    clickAcceptLoan = () => {
        if(this.state.chek1 && this.state.chek2 && this.state.chek3 && this.state.chek4 == true){

        console.log("button")
        }
    };


    render() {
        return (

            <div className="col-lg-6 col-md-6 col-sm-6 col-xs-12 container">
                <div>
                    <div className="">
                        <ol>Nemt tilbyder lån fra 1.000 helt op til 30.000 kroner.</ol><ol> Udfyld låneansøgningen lige nu og få
                            svar med det samme. Du kan ansøge hos os, hvis du kan svare Ja på følgende:</ol>
                    </div>
                    <div className="">
                        <div>
                            <label className="chekboxstyle">
                            <input type="checkbox" name="chekbox1"  checked={this.state.chek1}
                                   onChange={(e) => this.markChekBox(e)}/>jeg er over 25
                            </label>
                        </div>
                        <div>
                            <input type="checkbox" name="chekbox2"  checked={this.chek2}
                                   onChange={(e) => this.markChekBox(e)}/><span>jeg har fast arbejde</span>
                        </div>
                        <div>
                            <input type="checkbox" name="chekbox3" checked={this.chek3}
                                   onChange={(e) => this.markChekBox(e)}/><span>Jeg er ikke registreret i RKI</span>
                        </div>
                        <div>
                            <input type="checkbox" name="chekbox4" checked={this.chek4}
                                   onChange={(e) => this.markChekBox(e)}/>
                            <span>Jeg har en minimum indkomst på 120.000 kr./år</span>
                        </div>
                    </div>
                    <div className="">
                        <ol>kunne du sætte flueben ved ovenståenede statements, så kan vi tilbyde dig at
                            låne {this.props.data} kr. Til en god rente.</ol>
                        <ol>Ansøg nu, og udlev dine drømme</ol>
                    </div>
                    <div className="">
                        <button type="button" onClick={this.clickAcceptLoan}>Ansøg nu</button>
                    </div>
                </div>
            </div>
        )

    }

}

export default AcceptLoan;