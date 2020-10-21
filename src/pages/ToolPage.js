import React, { Component } from 'react'
import round from 'round-to'
import MMText from 'react-mm-text';
import lan from '../configs/language'
export default class ToolPage extends Component {
    constructor(props){
        super(props)
        this.state={
            kyat:"",
            pae:"", 
            ywae:"",
            tdygold:"",
            ans:""
        }  
    }
    _handleInputsChanged = stateData => this.setState(stateData)

    onCalculateClick=()=>{
        const {kyat,pae,ywae,tdygold}= this.state 
            var k,p,p1,k1;
          
        if(ywae === "") p=0;
        else  p=ywae/7.5;
     

        if(pae === "")  p1 =p;
        else p1 =p+parseFloat(pae);
        k=p1/16;

        if(kyat === "" ) {k1=k; console.log("k1 value "+k1)}
        else k1=k+parseFloat(kyat)

        let total=k1*tdygold;
        // round.up(total,-3)
        this.setState({ ans:round.up(total,-2)}) 
    }
    
  onClearData=()=>{
      this.setState({
        kyat:"",
        pae:"", 
        ywae:"",
        tdygold:"",
        ans:""
      })
  }

  render() {
      const clan="mm";

 const {kyat,pae,ywae,tdygold} = this.state
    
    return (
     
      <div className="container">
           <form className="mt-3" >
            <div className="form-group d-flex justify-content-center ">
                <label for="colFormLabelLg" class="col-xs-3 col-sm-4 col-md-3 col-lg-2">
                    <MMText
                        text={lan[clan].toolkyat}
                        showFont={"unicode"}
                        conveter={"rabbit"}
                        detector={"knayi"}
                    />
                </label>
                <div className="col-xs-6 col-sm-4 col-md-3 col-lg-3">
                    <input type="number" className="form-control" value={kyat}  placeholder="" onChange={(e) => this._handleInputsChanged({kyat: e.target.value})} />
                </div>
            </div>

            <div className="form-group d-flex justify-content-center ">
                <label for="colFormLabelLg" class="col-xs-3 col-sm-4 col-md-3 col-lg-2">
                    <MMText
                        text={lan[clan].toolpae}
                        showFont={"unicode"}
                        conveter={"rabbit"}
                        detector={"knayi"}
                    />
                </label>
                <div className="col-xs-6 col-sm-4 col-md-3 col-lg-3">
                    <input type="number" className="form-control"  value={pae} placeholder="" onChange={(e) => this._handleInputsChanged({pae: e.target.value})}  />
                </div>
            </div>

            <div className="form-group d-flex justify-content-center ">
                <label for="colFormLabelLg" class="col-xs-3 col-sm-4 col-md-3 col-lg-2">
                    <MMText
                        text={lan[clan].toolywae}
                        showFont={"unicode"}
                        conveter={"rabbit"}
                        detector={"knayi"}
                    />
                </label>
                <div className="col-xs-6 col-sm-4 col-md-3 col-lg-3">
                    <input type="number" className="form-control" value={ywae} placeholder="" onChange={(e) => this._handleInputsChanged({ywae: e.target.value})}  />
                </div>
            </div>

            <div className="form-group d-flex justify-content-center ">
                <label for="colFormLabelLg" class="col-xs-3 col-sm-4 col-md-3 col-lg-2">
                    <MMText
                        text={lan[clan].toolprice}
                        showFont={"unicode"}
                        conveter={"rabbit"}
                        detector={"knayi"}
                    />
                </label>
                <div className="col-xs-6 col-sm-4 col-md-3 col-lg-3">
                    <input type="number" className="form-control" value={tdygold} placeholder="MMK" onChange={(e) => this._handleInputsChanged({tdygold: e.target.value})}  />
                </div>
            </div>

            <div className="form-group d-flex justify-content-center ">
                <label className="col-xs-3 col-sm-4 col-md-3 col-lg-2"></label>
                <div className="col-xs-6 col-sm-4 col-md-3 col-lg-3">
                    <button type="button" className="btn btn-warning cal" onClick={this.onCalculateClick.bind(this)} >Calculate</button>&nbsp;
                    <button type="button" className="btn btn-warning cal" onClick={this.onClearData.bind(this)} >Clear</button>
                </div>
            </div>

    <div className="card card-header no-border d-flex tool_ans">

    <div className="form-group d-flex justify-content-center ">
                <label for="colFormLabelLg" class="col-xs-3 col-sm-4 col-md-3 col-lg-3">
                    <MMText
                        text={lan[clan].toolans}
                        showFont={"unicode"}
                        conveter={"rabbit"}
                        detector={"knayi"}
                    />
                </label>
                <div className="col-xs-6 col-sm-4 col-md-3 col-lg-3">
                   <span>{this.state.ans} &nbsp;MMK </span>
                </div>
            </div>
       
       
      
    </div>
        </form>
      </div>
    )
  }
}

// const ans=( kyat+(((pae+ywae/7.5)/16) ))* tdygold