import React from 'react'

export default function Contact(props) {
  return (
    <>

<div id='contact'>
    <div className='backgroundimage11'>
      <div className='opecity6'>
        <div className='container'>
          <div className='row'>
            <div className='col-md-6 p-5'>
              <div className='div3'></div>
                <div className='col-md-12 backgroundimage12'>
                    <p className='textclrwhite fontsize52 display-3 mt-3 mt-md-0' style={{fontWeight: '600'}}>{props.contact}</p>
                </div>
                <p className='textclrwhite mt-3' style={{fontSize: '18px' , fontWeight: '400'}}>{props.defaulttext1}</p>

                <span><i className="fa-solid fa-phone-flip mt-4" style={{color: 'white', fontSize: '20px'}}></i></span>
                <span className='ms-4' style={{color: 'white', fontSize: '20px'}}>{props.defaulttext2}</span> <br />

                <span><i className="fa-regular fa-envelope" style={{color: 'white', fontSize: '20px'}}></i></span>
                <span className='ms-4' style={{color: 'white', fontSize: '20px'}}>{props.defaulttext3}</span> <br /><br /><br /><br />

                <span style={{color: 'white', fontSize: '35px' , fontWeight: '700'}}>{props.defaulttext4}</span>
                <span className='ms-3' style={{color: '#00c6c3', fontSize: '35px' , fontWeight: '700'}}>{props.defaulttext5}</span> <br />

                <span><i className="fa-brands fa-facebook mt-3" style={{color: 'white', fontSize: '35px'}}></i></span>
                <span><i class="fa-brands fa-square-twitter mt-3 ms-2" style={{color: 'white', fontSize: '35px'}}></i></span>
                <span><i class="fa-brands fa-square-google-plus mt-3 ms-2" style={{color: 'white', fontSize: '35px'}}></i></span>
                <span><i class="fa-brands fa-square-instagram mt-3 ms-2" style={{color: 'white', fontSize: '35px'}}></i></span>
              </div>
            <div className='col-md-6 p-5 p-md-0' >
              <div className='div9'></div>
              <span style={{color: 'white', fontSize: '35px' , fontWeight: '700'}}>{props.defaulttext6}</span>
              <span className='ms-3' style={{color: '#00c6c3', fontSize: '35px' , fontWeight: '700'}}>{props.defaulttext7}</span> <br />

              <input type='text' placeholder='Your Name' className='p-3 col-md-10 mt-5 col-12' style={{height: '55px'}} />
              <input type='email' placeholder='Email' className='p-3 col-md-10 mt-3 col-12' style={{height: '55px'}} />
              <textarea type='text' placeholder='Your Message' className='p-3 col-md-10 mt-3 col-12' style={{height: '100px'}} ></textarea>
              <button className='button1 mt-3'>{props.defaulttext8}</button>
            </div>
          </div>
        </div> 

        <div className='container mt-5' style={{background: '#172d55'}}>
          <div className='row'>
            <div className='col-md-6'>
              <center><p className='textclrwhite mt-3' style={{fontSize: '18px' , fontWeight: '400'}}>{props.defaulttext9}</p></center>
            </div>
            <div className='col-md-6'>
              <center><p className='textclrwhite mt-3' style={{fontSize: '18px' , fontWeight: '400'}}>{props.defaulttext10}</p></center>
            </div>
          </div>
        </div>
      </div>
    </div>    
</div>
    
    </>
  )
}
