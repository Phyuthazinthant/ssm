import React from 'react'
import '../styles.css';

const Product = (props) => {
    return (
        <div className="card cta cta--featured cardImage "  style={{backgroundColor:'#f4f4f4'}}>
            <div className="card-block zoomWrapper" style={{backgroundColor:'#f4f4f4'}}>
                <img id={props.k} className="card-img-top" src={props.image} alt="Sein Shwe Moe"  onClick={props.ImageClick}/>              
             {(props.dis !== 1 )? 
          <div className="card-text py-4 text-center" >  Code No -{props.info} <br /><span style={{color:"red"}}>Discount Item</span> </div>
            // console.log("enter if statement")
             :  <div className="card-text py-4 text-center"  >  Code No -{props.info} </div>}
               
            </div>
            <span className="header-line gradient-color-1"></span>
        </div>
    )
}
export default Product;
