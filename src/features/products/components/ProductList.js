import React from 'react';
import Product from './Product';
import { IMAGE_URL } from '../../../networks/api';
import Lightbox from 'react-image-lightbox';
import 'react-image-lightbox/style.css';
  
export default class ProductList extends React.Component {
    constructor(props){
        super(props)
        this.state= {
            photoIndex: 0,
            isOpen: false,
            j:0,
        }
    }
    componentDidMount(){
        localStorage.setItem('k',-1)
    }
    imgClick(e) {
        console.log("id is "+e.currentTarget.id)
        var img = e.currentTarget.id;
        this.setState({
          isOpen: true,
          photoIndex: img
        })
    }
    
    increase=() =>{
        let a=localStorage.getItem('k'); 
        let b=this.props.item.length;
        if( a === b.toString()) localStorage.setItem('k',0)
        else  localStorage.setItem('k',parseInt(a)+1);
    //    console.log(localStorage.getItem('k'))
    }
  render() {
      const {isOpen,photoIndex} = this.state;
       const images = this.props.item.map(i => IMAGE_URL + '/' + i.item_image)
       const caption = this.props.item.map(i => i.item_code)
    return (
        <div>
            { this.increase.call() } 
            {
                 
                (this.props.dis_des !== undefined) ?

                   this.props.dis_des.map((dis, k) =>
                        (
                            <div key={k} >
                                <div class="card card-body bg-light border-none gradient-color-1 mt-1">
                                    <span style={{ color: "black" }}>  {dis.dis_percent} Discount (from {dis.start_date} to {dis.end_date} ) </span>
                                </div>
                                <div className="row">
                                    {
                                        this.props.item
                                            .filter(val => val.discount_id === dis.dis_id)
                                            .map((item1, k1) =>(
                                                <div key={k1+Math.random()} className="col-xs-12 col-sm-4 col-md-4 col-lg-4">
                                                    <Product image={IMAGE_URL + "/" + item1.item_image}  k={localStorage.getItem('k')} info={item1.item_code} dis={item1.discount_id} ImageClick={this.imgClick.bind(this)} />
                                                    {this.increase()}
                                                </div> 
                                            )
                                            ) 
                                    }
                                </div>
                            </div>

                        )


                    )

                    :
                    <div className="row">
                        {(this.props.item !== undefined) ? this.props.item.map((item1, k) =>
                            <div key={k} className="col-xs-12 col-sm-4 col-md-4 col-lg-4">
                                <Product image={IMAGE_URL + "/" + item1.item_image} k={k} info={item1.item_code} dis={item1.discount_id} ImageClick={this.imgClick.bind(this)} />
                            </div>
                        ) : null
                        }
                    </div>
            }

{isOpen && (
          <Lightbox

            mainSrc={images[photoIndex]}
            nextSrc={images[(photoIndex + 1) % images.length]}
            prevSrc={images[(photoIndex + images.length - 1) % images.length]}
            imageCaption={caption[photoIndex]}
            onCloseRequest={() => this.setState({ isOpen: false })}
            onMovePrevRequest={() =>
              this.setState({
                photoIndex: (photoIndex + images.length - 1) % images.length,
              })
            }
            onMoveNextRequest={() =>
              this.setState({
                photoIndex: (photoIndex + 1) % images.length,
              })
            }
          />
        )}
        
        </div>






    )
    
  }
}
