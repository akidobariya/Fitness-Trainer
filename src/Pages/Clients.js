import React from 'react'

export default function Clients(props) {
  return (
    <>


<div id='clients'>
    <div className='backgroundimage9'>
      <div className='opecity4'>
        <div className='container'>
          <div className='row'>
              <div className='div5'></div>
              <div className='col-md-4'></div>
              <center><div className='col-md-4 backgroundimage7'>
                  <p className='textclrwhite fontsize20 mt-md-0 mt-5' style={{fontWeight: '800'}}>{props.four}</p>
                  <p className='textclrwhite fontsize52 display-3 mt-4 mt-md-0' style={{fontWeight: '800'}}>{props.myclients}</p>
              </div>
              <hr className='mt-4' style={{width: '10%' , color: 'white' , fontWeight: '400'}} />
              <p className='textclrwhite ms-md-5 ms-4 mt-3' style={{fontSize: '18px' , fontWeight: '400'}}>{props.defaulttext1}</p>
              </center>
              <div className='col-md-4'></div>
          </div>
        </div>

        <div className='container p-5 mt-md-5 mt-0'>
          <div className='row'>
            <div className='col-md-3 p-0'>
              <center><img src='img/109.jpg' className='col-md-12 ms-md-0' />
              <p className='textclrwhite fontsize20 mt-2 ms-3' style={{fontWeight: '800'}}>{props.defaulttext2}</p> 
              <hr className='mt-3 ms-3' style={{color:'white' , width: '20%' , border: '1px solid white'}} />
              <p className='textclrwhite mt-2 ms-3' style={{fontSize: '18px' ,fontWeight: '300'}}>{props.defaulttext3}</p> </center>
            </div>
            <div className='col-md-3 p-0'>
              <center><img src='img/110.jpg' className='col-md-12 ms-md-0' />
              <p className='textclrwhite fontsize20 mt-2 ms-3' style={{fontWeight: '800'}}>{props.defaulttext4}</p> 
              <hr className='mt-3 ms-3' style={{color:'white' , width: '20%' , border: '1px solid white'}} />
              <p className='textclrwhite mt-2 ms-3' style={{fontSize: '18px' ,fontWeight: '300'}}>{props.defaulttext5}</p> </center>
            </div>
            <div className='col-md-3 p-0'>
              <center><img src='img/111.jpg' className='col-md-12 ms-md-0' />
              <p className='textclrwhite fontsize20 mt-2 ms-3' style={{fontWeight: '800'}}>{props.defaulttext6}</p> 
              <hr className='mt-3 ms-3' style={{color:'white' , width: '20%' , border: '1px solid white'}} />
              <p className='textclrwhite mt-2 ms-3' style={{fontSize: '18px' ,fontWeight: '300'}}>{props.defaulttext7}</p> </center>
            </div>
            <div className='col-md-3 p-0'>
              <center><img src='img/112.jpg' className='col-md-12 ms-md-0' />
              <p className='textclrwhite fontsize20 mt-2 ms-3' style={{fontWeight: '800'}}>{props.defaulttext8}</p> 
              <hr className='mt-3 ms-3' style={{color:'white' , width: '20%' , border: '1px solid white'}} />
              <p className='textclrwhite mt-2 ms-3' style={{fontSize: '18px' ,fontWeight: '300'}}>{props.defaulttext9}</p> </center>
            </div>
          </div>
        </div>
      </div>
    </div>
</div>


    </>
  )
}
