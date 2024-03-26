import React from 'react'

export default function Home(props) {
  return (
<>

<div id='home'>
<div className='backgroundimage1'>
    <div className='opecity'>
        <div className='container'>
        <nav class="navbar navbar-expand-sm navbar-dark">
            <div class="container-fluid mt-3">
                <a class="navbar-brand" href="#"><img src='img/101.png' className='ms-md-4' /></a>                <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#collapsibleNavbar">
                <span class="navbar-toggler-icon"></span>
                </button>
                <div class="collapse navbar-collapse" id="collapsibleNavbar">
                    <ul class="navbar-nav ms-auto">
                        <li class="nav-item">
                        <a class="nav-link textclrwhite ms-3 mt-md-0 mt-5" href="#home">HOME</a>
                        </li>
                        <li class="nav-item">
                        <a class="nav-link textclrwhite ms-3" href="#aboutme">ABOUT ME</a>
                        </li>
                        <li class="nav-item">
                        <a class="nav-link textclrwhite ms-3" href="#traning">TRANING</a>
                        </li>
                        <li class="nav-item">
                        <a class="nav-link textclrwhite ms-3" href="#rates">RATES</a>
                        </li>
                        <li class="nav-item">
                        <a class="nav-link textclrwhite ms-3" href="#clients">CLIENTS</a>
                        </li>
                        <li class="nav-item">
                        <a class="nav-link textclrwhite ms-3" href="#testimonials">TESTIMONIALS</a>
                        </li>
                        <li class="nav-item">
                        <a class="nav-link textclrwhite ms-3" href="#gallery">GALLERY</a>
                        </li>
                        <li class="nav-item">
                        <a class="nav-link textclrwhite ms-3" href="#contact">CONTACT</a>
                        </li>    
                    </ul>
                </div>
            </div>
        </nav>

        </div>

        <div className='div1'></div>

        <div className='container'>
            <div className='row'>
                <div className='col-md-7'>

                    <div className='col-md-12 backgroundimage2' style={{padding: '0px', margin: '0px'}}>
                        <span className='textclrwhite fontsize30 ms-md-5 ms-4' style={{fontWeight: '800'}}>{props.maverick}</span>
                        <span className='fontsize30' style={{color: '#00c6c3', fontWeight: '800'}}>{props.kaan}</span>

                        <p className='textclrwhite fontsize10vw ms-md-5 ms-4 mt-md-0 mt-4' style={{fontWeight: '800'}}>{props.fitness}</p>
                        <p className='textclrwhite fontsize10vw ms-md-5 ms-4' style={{fontWeight: '100', margin: '0px', padding: '0px'}}>{props.traning}</p>
                   </div>

                    <div className='div2'></div>
                    <p className='textclrwhite display-6 ms-md-5 ms-4' style={{fontWeight: '600'}}>{props.lets}</p>
                    <button className='button1 mt-md-5 ms-md-5 ms-4'>{props.contactbtn}</button>
                </div>
                <div className='col-md-5'></div>
            </div>
        </div>
    </div>
</div>
</div>



</>
  )
}
