import React from 'react'

export default function AboutMe(props) {
  return (
<>

<div id='aboutme'>
<div className='backgroundimage3'>
    <div className='opecity1'>
        <div className='div3'></div>
        <div className='container'>
            <div className='row'>
                <div className='col-md-6'>
                    <img src='img/105.jpg' className='ms-md-5 ms-5 col-md-10 col-9' />
                </div>
                <div className='col-md-6'>
                    <div className='div4'></div>
                    <div className='col-md-12 backgroundimage4'>
                        <p className='textclrwhite fontsize20 mt-md-0 mt-5 ms-md-0 ms-4' style={{fontWeight: '800'}}>{props.one}</p>
                        <p className='textclrwhite display-3 ms-md-0 ms-4 mt-4 mt-md-0' style={{fontWeight: '800'}}>{props.aboutme}</p>
                    </div>
                    <hr className='mt-4' style={{width: '10%',color: 'white'}} />

                    <p className='textclrwhite fontsize20 mt-5 col-md-10 col-12' style={{fontWeight: '800'}}>{props.defaulttext1}</p>
                    <p className='textclrwhite mt-4 col-md-10 col-11'>{props.defaulttext2}</p>
                    <p className='textclrwhite mt-4 col-md-10 col-11'>{props.defaulttext3}</p>
                    <p className='textclrwhite mt-4 col-md-10 col-11'>{props.defaulttext4}</p>
                </div>
            </div>
        </div>
    </div>

</div>
</div>

</>
  )
}
