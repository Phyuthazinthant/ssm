
import React, { Component } from 'react'
import round from 'round-to'
import ShopContant from '../features/home/components/shop_contant'
import MMText from 'react-mm-text';
import lan from '../configs/language'
import '../features/tools/toolstyle.css';
import Nouislider from "nouislider-react";
import "nouislider/distribute/nouislider.css";
import './pagestyle.css'
import dim_logo from './smlogo.png'

export default class LoanPage extends Component {
    constructor(props) {
        super(props)
        this.state = {
            Amt: 1000000,
            month: 6,
            interest: 5,
            loan30:'',
            loanInterest:'',
            initialPayment:'',
            monthlyPayment:'',
        }
    }
    componentDidMount(){
        this.refs.Slider.slider.set(6);
        this.refs.NoUiSlider.slider.set(5);
        this._computeLoan();
    }
    _handleInputsChanged = stateData => {
        this.setState(stateData)
        setTimeout( this._computeLoan.bind(this),100);
    }
    onSlide = (render, handle, value, un, percent) => {
        if (parseInt(value[0].toFixed(2)) === 6) { this.refs.NoUiSlider.slider.set(5); this.setState({interest: 5});}
        else if (parseInt(value[0].toFixed(2)) === 12) { this.refs.NoUiSlider.slider.set(10);this.setState({interest: 10});}
         this.setState({
          month: value[0].toFixed(0),
         });
         this._computeLoan();
    };
    onSlideInterest = (render , handel ,value , un , percent) =>{
        this.setState({
            interest: value[0].toFixed(2),
           });
           this._computeLoan();
    }
    _computeLoan(){
        let tenPercent = parseInt(this.state.Amt) * 0.3;
        let leftPayment= (parseInt(this.state.Amt) - tenPercent);
        let leftInterest =  leftPayment * (parseFloat(this.state.interest)/100)
        let initialPrice =tenPercent+leftInterest+6000;
        let monthlyPayment=leftPayment/parseInt(this.state.month);
        if(this.state.Amt === ""){
            tenPercent=0;leftInterest=0;leftInterest=0;initialPrice=0;monthlyPayment=0;
        }
        this.setState({loan30: tenPercent,loanInterest : Math.round(leftInterest) , initialPayment : initialPrice , monthlyPayment:round.up(monthlyPayment, -2)  })
        
    }
    _onKeyPress(e){
        console.log(e.charCode)
        if( e.charCode >= 48) return true;
        else return false;
    }
    render() {
        const {Amt}=this.state;
;        const clan = "mm";
        return (
            <div className="container " style={{backgroundColor:'#f4f4f4'}}>
            < div class=" border-none pb-3" >
              <div className=" text-center pb-3 font-weight-bolder align-text-top">
              <MMText
                        text={lan[clan].loantitle}
                        showFont={"unicode"}
                        conveter={"rabbit"}
                        detector={"knayi"}
                    />
            
               </div>
                    <div className="d-flex flex-row flex-wrap pb-3 justify-content-center">
                        <label  className="col-lg-2  ">
                            Loan Amount (MMK)
                         </label>
                        <div className="col-xs-12 col-sm-12 col-md-6 col-lg-5">
                            <input type="number"  className="form-control" value={Amt} min="0" placeholder="MMK" onChange={(e) => this._handleInputsChanged({ Amt: e.target.value })} />
                        </div>
                    </div>

                    <div className=" d-flex flex-row flex-wrap  pb-5  justify-content-center" >
                        <label  className="col-lg-2">
                            Duration  {this.state.month} months
                         </label>
                        <div className="col-xs-12 col-sm-12 col-md-6 col-lg-5">
                            <Nouislider
                                accessibility
                                start={[1]}
                                connect={[true, false]}
                                step={1}
                                tooltips={[{
                                    to: function (value) {
                                        return Math.round(parseInt(value));
                                    }
                                }]}
                                pips={{
                                    mode: 'values',
                                    values: [1, 3, 6, 12],
                                    density: 9
                                }}
                                clickablePips
                                range={{
                                    min: 1,
                                    max: 12
                                }}
                                ref="Slider"
                                onSlide={this.onSlide}
                            />
                        </div>
                    </div>
                    <div className="form-group d-flex flex-row flex-wrap pb-3 justify-content-center">
                        <label  class="col-lg-2">
                            Interest Rate {this.state.interest}%
                         </label>
                        <div className="col-xs-12 col-sm-12 col-md-6 col-lg-5">
                            <Nouislider

                                accessibility
                                start={[0]}
                                id="interest"
                                connect={[true, false]}
                                step={0.1}
                                tooltips={[true]}

                                pips={{
                                    mode: 'values',
                                    values: [0, 5, 10, 12],
                                    density: 8
                                }}
                                clickablePips
                                range={{
                                    min: 0,
                                    max: 12
                                }}
                                ref="NoUiSlider"
                                onSlide={this.onSlideInterest}
                            />
                        </div>
              
                    </div>
                </div>
                <div className="loanText card pt-2 ">
                <div className="text-center font-weight-bolder align-text-top ">Summary</div>
                    <div className="d-flex flex-row justify-content-center "> 
                     <div className="col-xs-6 col-sm-6 col-md-4 col-lg-3"> Bank Service Charge</div>
                    <div className="col-xs-6 col-sm-6 col-md-4 col-lg-4 justify-content-end">6000 MMK</div>
                     </div>
                     <div className="d-flex flex-row  justify-content-center"> 
                     <div  className="col-xs-6 col-sm-6 col-md-4 col-lg-3 "> 30% of Loan</div>
                    <div className="col-xs-6 col-sm-6 col-md-4 col-lg-4">{this.state.loan30} MMK</div>
                     </div>
                     <div className="d-flex flex-row  justify-content-center"> 
                     <div  className="col-xs-6 col-sm-6 col-md-4 col-lg-3"> Total Interest Payment</div>
                    <div className="col-xs-6 col-sm-6 col-md-4 col-lg-4">{this.state.loanInterest} MMK</div>
                     </div>
                     <div className="d-flex flex-row justify-content-center "> 
                     <div  className="col-xs-6 col-sm-6 col-md-4 col-lg-3"> Initial Payment</div>
                    <div className="col-xs-6 col-sm-6 col-md-4 col-lg-4">{this.state.initialPayment} MMK</div>
                     </div>
                     <div className="d-flex flex-row justify-content-center pb-3"> 
                     <div  className="col-xs-6 col-sm-6 col-md-4 col-lg-3"> Monthly Payment</div>
                    <div className="col-xs-6 col-sm-6 col-md-4 col-lg-4">{this.state.monthlyPayment} MMK</div>
                     </div>
                     </div>
                
                < ShopContant />
            </div>
        )
    }
}



//<img src={ dim_logo} alt="logo1"  className=" img-fluid" />
//close for img













