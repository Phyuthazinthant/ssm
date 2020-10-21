import React from 'react'
import lan from '../../../configs/language'
import './homestyle.css'
import simg from './carousel_img/showroom3.jpg';
import {Link} from 'react-router-dom';

const Shop_contant =()=>{
    const clan = "en"
   
return(
    <div className="shop_contant">
     <img className="w-100" src={simg} alt="ssm shop" />
    <div className="shop_text text-center">
     <span className="large "> {lan[clan].shop} <br/> {lan[clan].address1}</span>
     <br/>
     <Link className="btn btn-warning" to="/contactus" style={{color:'black'}}>More...</Link>
    </div>   
     </div>
 
)
}
export default Shop_contant;