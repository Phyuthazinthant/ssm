import React, { Component } from 'react'
import {discountItem} from '../networks/discoutFetcher'
import ProductList from '../features/products/components/ProductList'
export default class DiscountPage extends Component {
    constructor(props) {
        super(props);
        this.state = {
            selected:0,
            item:[],
            dis_description:[],
        }
    }
    componentDidMount(){
        if(this.props.match.id === 1)
         this.LoadDiscountItem()
        // LoadPopularItem();
        // LoadArrivalItem();
    }
    LoadDiscountItem(){
        discountItem((error, data) => {
            console.log("discount data is :"+data.data);
            console.log("discount des is "+data.discount)
            if (error != null) console.log("error is " + error)
            else this.setState({ item : data.data ,dis_description: data.discount })
          })
    }
    _onClick(e) {
       console.log(e.currentTarget.value)
    }

    render() {

        return (
           
                <div className="container">
                     <ProductList item={this.state.item} dis_des={this.dis_description} /> 
                </div>
           
        )
    }
}
