import React, {Component} from 'react'
import {Link} from 'react-router-dom'
import Map from '../Contact/Map.js'

class Contact extends Component{
  render() {
    return(
      <div>
        <Map />
        <h3>will need address, telephone, hours of operation, links to facebook, instagram, etc</h3>
      </div>
    )
  }
}

export default Contact