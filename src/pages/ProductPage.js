import React, { Component } from 'react';
import ProductList from '../features/products/components/ProductList';
import  ShopContant from '../features/home/components/shop_contant'
import { getSubcategory,} from "../networks/subcategoryFetcher";
import {categoryItem } from "../networks/ProductFetcher";
export default class ProductPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selected: "0",
      subcategoryList: [],
      categoryItemList:[],
      temCategoryItemList:[],
    }
  }
  componentDidUpdate(prevProps, prevState) {
     if (prevProps.match.params.id !== this.props.match.params.id ) {
       this.setState({selected: "0"})
       this.LoadDataSubcategory();
     this.LoadDataCategoryItem();
     }
  }
  componentDidMount() {
    this.LoadDataSubcategory();
    this.LoadDataCategoryItem();
  }
  LoadDataSubcategory = () => {
    getSubcategory((error, data) => {
      if (error != null) console.log("error is " + error)
      else this.setState({ subcategoryList: data.data })
    })
  }
  LoadDataCategoryItem=()=>{
    categoryItem(this.props.match.params.id,(error,data) =>{
    
      if(error !=null) console.log("error is "+error)
      else {
        this.setState({categoryItemList: data.data ,temCategoryItemList:data.data});}
      
    })
  }
  _onClick(e) {
    var temp = this.state.temCategoryItemList;
    this.setState({ selected: e.currentTarget.value ,categoryItemList: temp.filter(val => val.subcat_id === parseInt(e.currentTarget.value))})
  }


  render() {
    return (
      <div className="container">
        <div className="sectional-nav  clearBoth top1">
          <div className="horizontalMenu">
            <ul class="hidden-sm-down p-0 d-flex align-items-center justify-content-between sticky" >
              {
                this.state.subcategoryList.map((subcategory, k) =>
                  <li  onClick={this._onClick.bind(this)} id={subcategory.subcat_id} value={subcategory.subcat_id} tabIndex="0">{subcategory.subcat_name} </li>
                )
              }
            </ul>
          </div>
          <div className="dropdownMenu">
            <select name="sectional_nav" id="sectional_nav" value={this.state.selected} class="form-control hidden-md-up" onChange={this._onClick.bind(this)} >
              <option value="0"> Filter By </option>
              {
                this.state.subcategoryList.map((subcategory, k) =>
                  <option value={subcategory.subcat_id} >{subcategory.subcat_name} </option>
                )
              }
            </select>
          </div>
        </div>
        <ProductList item={this.state.categoryItemList}/>
        < ShopContant/>
      </div>
    )
  }
}
