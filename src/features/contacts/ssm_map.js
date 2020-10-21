
import React, {Component} from 'react'
import {Map, GoogleApiWrapper,Marker,InfoWindow} from 'google-maps-react'
import lan from '../../configs/language'
import './contactstyle.css';
 export class  ssm_map extends Component{
     constructor(){
         super()
         this.state={
             showingInfoWindow: false,
             activeMaker: {},
              selectedPlace: {}
         }
     }
     onMarkerClick=(props,marker,e) =>{
         this.setState({
          showingInfoWindow: true,
           activeMaker: marker,
           selectedPlace:props  
         })
     }
     onClose=props =>{
         if(this.state.showingInfoWindow){
             this.setState({
                 showingInfoWindow: false,
                 activeMaker:null
             })
         }
     }
    render(){
        const clan ="en"
        return (
            <div className="map-style">
            <Map
              google={this.props.google}
              zoom={17}
              initialCenter={{
                lat:  21.971649,
                lng:  96.087196
              }}
            >
            <Marker
            onClick={this.onMarkerClick} 
            name={lan[clan].shop+"Gold and Jwellery Shop"}
            />
            <InfoWindow
            marker={this.state.activeMaker}
            visible={this.state.showingInfoWindow}
            onClose={this.onClose}
             >
             <div>
                 <h4>{this.state.selectedPlace.name}</h4>
             </div>
             </InfoWindow>
              
            </Map>
            </div>
          );
    }
}
export default GoogleApiWrapper({
    apiKey: 'AIzaSyDjz91l2P3tnwy9phAWvqEU_V4VPEviW-I'
})(ssm_map)

// 21.971649, 96.087196