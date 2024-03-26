import React from 'react'

export default function Gallery(props) {
  return (
    <>
    
<div id='gallery'>
    <div className='backgroundimage13'>
      <div className='opecity7'>
        <div className='container p-5'>
          <div className='row'>
              <div className='div3'></div>
              <div className='col-md-4 backgroundimage7'>
                  <p className='textclrwhite fontsize20 mt-md-0 mt-5' style={{fontWeight: '800'}}>{props.six}</p>
                  <p className='textclrwhite fontsize52 display-3 mt-4 mt-md-0' style={{fontWeight: '600'}}>{props.defaulttext1}</p>
              </div>
              {/* <hr className='mt-4' style={{width: '10%' , color: 'white' , fontWeight: '400'}} /> */}
              <p className='textclrwhite mt-3' style={{fontSize: '18px' , fontWeight: '400'}}>{props.defaulttext2}</p>
          
          </div>
        </div>

        <div className='container'>

        {/* <!-- Carousel --> */}
<div id="demo" className="carousel slide" data-bs-ride="carousel">

  {/* <!-- Indicators/dots --> */}
  <div className="carousel-indicators">
    <button type="button" data-bs-target="#demo" data-bs-slide-to="0" className="active"></button>
    <button type="button" data-bs-target="#demo" data-bs-slide-to="1"></button>
    <button type="button" data-bs-target="#demo" data-bs-slide-to="2"></button>
  </div>
  
  {/* <!-- The slideshow/carousel --> */}
          <div className="carousel-inner">
            <div className="container carousel-item active">
              <div className='row'>
                <div className='col-md-4 p-0'>
                  <img src="img/109.jpg" className="d-block" style={{height: '500px' ,width: '100%'}} />
                </div>
                <div className='col-md-4 p-0 d-none d-md-block'>
                  <img src="img/110.jpg" className="d-block" style={{height: '500px' ,width: '100%'}} />
                </div>
                <div className='col-md-4 p-0 d-none d-md-block'>
                  <img src="img/111.jpg" className="d-block" style={{height: '500px' ,width: '100%'}} />
                </div>
              </div>
            </div>
            <div className="carousel-item">
              <img src="img/112.jpg" className="d-block" style={{height: '500px' ,width: '100%'}} />
            </div>
            <div className="carousel-item">
              <img src="img/115.jpg" className="d-block" style={{height: '500px' ,width: '100%'}} />
            </div>
          </div>
          
          {/* <!-- Left and right controls/icons --> */}
          <button className="carousel-control-prev" type="button" data-bs-target="#demo" data-bs-slide="prev">
            <span className="carousel-control-prev-icon"></span>
          </button>
          <button className="carousel-control-next" type="button" data-bs-target="#demo" data-bs-slide="next">
            <span className="carousel-control-next-icon"></span>
          </button>
        </div>
        </div>
      </div>
    </div>
</div>  
  
    </>
  )
}
