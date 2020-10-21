import React, { Component } from 'react'
import Contact from '../features/contacts/contact'
import Slider from '../features/home/components/Carousel'

export default class ContactPage extends Component {
  render() {
    return (
      <div className="container" style={{ overflowX: 'hidden'}}>
        <Slider/>
        <Contact/>
       
      </div>
    )
  }
}
