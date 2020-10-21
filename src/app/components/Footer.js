import React, { Component } from 'react'
import MMText from 'react-mm-text';
import lan from '../../configs/language'

import '../styles.css'

export default class footer extends Component {
    render() {
        const clan = "mm"
        return (
            <div className=" card-body text-center foot_text_gp" style={{height:'20%'}}>
                <span >
                <MMText  
                 text= {lan[clan].shop}
                 showFont={"unicode"}
                conveter={"rabbit"}
                 detector={"knayi"}
               /> 
                    <br />
                <MMText 
                 text={lan[clan].address1}
                 showFont={"unicode"}
                 conveter={"rabbit"}
                 detector={"knayi"}
                />
                   <br />
                   <MMText 
                 text={lan[clan].address2}
                 showFont={"unicode"}
                 conveter={"rabbit"}
                 detector={"knayi"}
                />
                <br />
                 <span>
                  <ion-icon name="mail" ></ion-icon> seinshwemoe@gmail.com 
                  &nbsp;
                 <ion-icon name="phone-portrait" ></ion-icon>+959798988144 
                 </span>
                    <br/>
                    <div className=" card-body text-center mt-1 footer-bottom">
                    <span> 
                    <small >Copyright © 2019 -All Rights Reserved by SeinShweMoe &nbsp;
                    Developed By KumoSolutions
                    </small>
            </span>
                    </div>
             
                </span>
               
            </div>
        )
    }
}
