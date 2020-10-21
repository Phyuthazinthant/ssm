import React from 'react'
import MMText from 'react-mm-text';
import lan from '../../configs/language'
import Map from './ssm_map'
import './contactstyle.css'

const Contact = () => {
    const clan = "mm"
    return (
        <div className="row contactHeader">
            <div className="col-lg-3 col-xs-6 col-sm-12 card border-0 " style={{backgroundColor:'#f4f4f4'}}>
                <div class="  text-dark text-center">
                    <div class="card-body">   <p> <i class="fas fa-map-marked-alt"></i>&nbsp;Address< br />
                        <small>
                            <MMText
                                text={lan[clan].address2}
                                showFont={"unicode"}
                                conveter={"rabbit"}
                                detector={"knayi"}
                            />
                        </small></p></div>
                </div>
            </div>
            <div className="col-lg-3 col-xs-6  col-sm-12 card  border-0" style={{backgroundColor:'#f4f4f4'}}>
                <div class=" text-dark text-center">
                    <div class="card-body"> <p><i class="far fa-clock"></i>&nbsp;Opening Time< br />
                        <small> Everyday  9:00 AM - 6:00 PM </small></p></div>
                </div>
            </div>
            <div className="col-lg-3 col-xs-6  col-sm-12 card  border-0 " style={{backgroundColor:'#f4f4f4'}}>
                <div class=" text-dark mx-auto">
                    <div class="card-body " > 
                    <p style={{alignItems:"left"}}> <i class="fas fa-mobile-alt"></i>&nbsp;Phone <br />
                      <small> (+95)9-798988144 </small>   <br />
                      <small> (+95)9-783510998 </small> <br />
                    <small> (+95)9-2100927  </small>  <br />
                      </p>
                    </div>
                </div>
            </div>

            <div className="col-lg-3 col-xs-6  col-sm-12  card   border-0" style={{backgroundColor:'#f4f4f4'}}>
                <div class=" text-dark text-center">
                    <div class="card-body">  <p> <i class="fa fa-thumbs-up"  ></i>&nbsp;Facebook Page<br />
                        <a target="_blank" href='https://www.facebook.com/seinshwemoegold/' >
                            <i className="fab fa-facebook-square"></i>
                        </a>  </p>
                    </div>
                </div>
            </div>
            <div className= "col-lg-12 mb-2 p-0 ">
                <Map />
            </div>

        </div>
    )
}
export default Contact;

