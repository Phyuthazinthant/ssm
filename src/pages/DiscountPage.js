import React, { Component } from 'react'
import {discountItem} from '../networks/discoutFetcher';
import {popularItem} from '../networks/popularFetcher';
import {newItem} from '../networks/ProductFetcher';
import ProductList from '../features/products/components/ProductList'
import  ShopContant from '../features/home/components/shop_contant'
export default class DiscountPage extends Component {
    constructor(props) {
        super(props);
        this.state = {
            selected:0,
            item:[],
            dis_description:[],
        }
    }
    componentDidUpdate(prevProps, prevState) {
        if (prevProps.match.params.id !== this.props.match.params.id ) {
            if(this.props.match.params.id === "1")  this.LoadDiscountItem();
            else if(this.props.match.params.id === "2") this.LoadPopularItem();
            else if(this.props.match.params.id === "3") this.LoadNewItem();
        }
     }
    componentDidMount(){
        if(this.props.match.params.id === "1")  this.LoadDiscountItem();
        else if(this.props.match.params.id === "2") this.LoadPopularItem();
        else if(this.props.match.params.id === "3") this.LoadNewItem();
       
    }
    LoadDiscountItem(){
        discountItem((error, data) => {
            if (error != null) console.log("error is " + error)
            else this.setState({ item : data.data ,dis_description: data.discount })
          })
    }

    LoadPopularItem(){
        popularItem((error,data) => {
            if(error !=null) console.log("error is "+error)
            else this.setState ({item : data.data , dis_description: undefined})
        })
    }
    LoadNewItem(){
       newItem((error,data) => {
            if(error !=null) console.log("error is "+error)
            else this.setState ({item : data.data , dis_description: undefined})
        })
    }
    render() {

        return (
                <div className="container">    
                     <ProductList item={this.state.item} dis_des={this.state.dis_description} /> 
                     < ShopContant/>
                </div>
         
        )
    }
}
