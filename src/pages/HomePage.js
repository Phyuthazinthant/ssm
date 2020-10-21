import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import Slider from '../features/home/components/Carousel'
import Shopcontant from '../features/home/components/shop_contant'
import Knowledge from '../features/home/components/knowledge'
import ProductList from '../features/products/components/ProductList'
import { newItem } from '../networks/ProductFetcher';
import { loadInfo } from '../networks/infoFetcher';
import {loadCount} from '../networks/countFetcher';
import Marque from '../features/home/components/marque';
import '../features/home/components/homestyle.css';
export default class HomePage extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            item: [],
            seasondis: null,
            currentprice: null,
        }
    }

    componentDidMount() {
        this.dataLoadNewProducts();
        this.LoadInfo();
        if(sessionStorage.getItem('count') === null )
        {
            sessionStorage.setItem('count',1)
            this.LoadCount();
        }

        

    }

    dataLoadNewProducts = () => {
        newItem((error, data) => {

            if (error != null) console.log("error is " + error)
            else {
                let arr = data.data;
                this.setState({ item: arr.slice(0, 3) })
            }
        })
    }
    LoadInfo = () => {
        loadInfo((error, data) => {
            if (error != null) console.log("error is " + error)
            else {
                if (data.data[0].seadis_des !== "") this.setState({ seasondis: data.data[0].seadis_des })
                if (data.data[1].seadis_des !== "") this.setState({ currentprice: data.data[1].seadis_des })
            }
        })
    }
    LoadCount =() =>{
        loadCount((error, data) => {
            if (error != null) console.log("error is " + error)
            else {
            }
        })
    }
    ProductClicked = ({ pId }) => {
        // do something 
        // route to the next screen
    }

    render() {
        return (
            <div className="container " style={{ overflowX: 'hidden' }}>

                <Slider />
                <Marque seainfo={this.state.seasondis} currentinfo={this.state.currentprice} />
                <div className="row ribbon">
                    <Link to='/discount/3'><span>New Arrival</span></Link>
                    <Link to='/discount/2'><span>Popular</span></Link>
                </div>
                <div>
                    <ProductList item={this.state.item} />
                </div>

                <br />
                <Shopcontant />
                <br />
                <Knowledge />
            </div>
        )
    }
}