/**
 * Created by pskclub on 28-Oct-17.
 */
import React from 'react'

export const Header = () => (
  <div className="container" style={{paddingTop: '40px'}}>
    <div className="row">
      <div className="col-md-2 col-md-offset-5">
        <img src="http://via.placeholder.com/350x350" className="img-responsive img-circle"/>
      </div>
    </div>
    <div className="row" style={{paddingTop: '40px'}}>
      <div className="col-md-2 col-md-offset-2">
        <button type="button" className="btn btn-default btn-block">Lorem Ipsum</button>
      </div>
      <div className="col-md-2">
        <button type="button" className="btn btn-default btn-block">Lorem Ipsum</button>
      </div>
      <div className="col-md-2">
        <button type="button" className="btn btn-default btn-block">Lorem Ipsum</button>
      </div>
      <div className="col-md-2">
        <button type="button" className="btn btn-default btn-block">Lorem Ipsum</button>
      </div>
    </div>

  </div>
)