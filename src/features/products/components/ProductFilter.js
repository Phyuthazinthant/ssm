import React, { Component } from 'react'
import {Link} from 'react-router-dom';
import '../styles.css';
const ProductFilter=(props) => {

    return (
        <div className="sectional-nav mt-2 clearBoth sticky-top">
        <div className="horizontalMenu">
          <ul class="hidden-sm-down p-0 d-flex align-items-center justify-content-between sticky" >
            <li id="1">Diamond</li>
            <li id="2">Gold</li>
            <li>Jade</li>
            <li>Platinum</li>
            <li>Pearl</li>
          </ul> 
          </div>
          <div className="dropdownMenu">
        <select name="sectional_nav" id="sectional_nav" class="form-control hidden-md-up" onChange="window.location.href=this.value">
          <option value="0">Filter By</option>
          <option value="#">Diamond</option>
          <option value="#">Gold</option>
          <option value="#">Jade</option>
          <option value="#">Platinum</option>
          <option value="#">Pearl</option>
        </select>
        </div>
    </div>
    )
}
export default ProductFilter;