import * as React from "react";
import {Component} from "react";
import Finansbar, {default as FinansBar} from "../../components/Home/FinansBar/FinansBar"
import Acceptloan, {default as AcceptLoan} from "../../components/Home/AcceptLoan/AcceptLoan"

interface myProps {
}

interface myState {
    amount: any
}

class Home extends Component<myProps,myState> {

    constructor(props: myProps){
        super(props);
        this.state = {amount:null}

    }

    handleData = (data) => {
        this.setState({amount: data})
    };

    render(){
        return (
            <div>
                <div>
               <FinansBar handlerFromParant={this.handleData} />
                </div>
                <div>
                    <Acceptloan data={this.state.amount}/>
                </div>
            </div>
        );
    }
}

export default Home;