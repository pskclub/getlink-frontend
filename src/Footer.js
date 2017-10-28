import React from 'react'

export const Footer =()=>(
  <div style={{backgroundColor: '#EEEEEE'}}>
    <div className="container" style={{marginTop: '40px', padding: '40px'}}>
      <div className="row">
        <FooterContent/>
        <FooterContent/>
        <FooterContent/>
        <FooterContentWithIcon/>
      </div>
    </div>
  </div>
)



const FooterContent = ()=> (
  <div className="col-md-3">
    <h4>Lorem Ipsum</h4>
    <p>Lorem Ipsum</p>
    <p>Lorem Ipsum</p>
    <p>Lorem Ipsum</p>
  </div>
)

const FooterContentWithIcon = ()=> (
  <div className="col-md-3">
    <h4>Lorem Ipsum</h4>
    <img src="http://via.placeholder.com/50x50" className="img-rounded" alt="..." style={{marginRight:'20px'}}/>
    <img src="http://via.placeholder.com/50x50" className="img-rounded" alt="..." style={{marginRight:'20px'}}/>
    <img src="http://via.placeholder.com/50x50" className="img-rounded" alt="..." style={{marginRight:'20px'}}/>
  </div>
)