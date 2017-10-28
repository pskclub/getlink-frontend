/**
 * Created by pskclub on 28-Oct-17.
 */
import React from 'react'

export const Product = ()=>(
  <div className="container" style={{paddingTop: '40px', paddingBottom: '40px'}}>
    <div className="row">
      <Card/>
      <Card/>
      <Card/>
      <Card/>
      <Card/>
      <Card/>
      <Card/>
      <Card/>
    </div>
  </div>
)

const Card = () => (
  <div className="col-md-3">
    <div className="thumbnail">
      <img src="http://via.placeholder.com/350x350" alt="..."/>
      <div className="caption">
        <h4>Thumbnail label</h4>
        <p>There are many variations of passages of Lorem Ipsum</p>
      </div>
    </div>
  </div>
)
