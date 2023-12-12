import React from 'react'
import {Link} from 'react-router-dom';


function Mobile() {
  const handleClickRemove =()=>{
    
    const mobileMenu = document.querySelector('.mobile-menu')
    mobileMenu.classList.remove('show')
    
 
  }

  const handleClickSubmenu = () =>{
    const icon = document.querySelector('.triangle');
    const submenu = document.querySelector('.submenu');
    icon.addEventListener('click', ()=>{
      submenu.style.maxHeight = `${submenu.clientHeight}px`
      console.log(submenu.scrollHeight);
    })
  }

  return (
    <div className='mobile-menu'>
        <div className='close' onClick={handleClickRemove}>
        <i class="fa-solid fa-xmark"></i>
        </div>
        <div className='logo-div'>
            <h2 className='logo'>Travel</h2>
            <svg xmlns="http://www.w3.org/2000/svg" width="99" height="39" viewBox="0 0 99 39" fill="none">
  <g clip-path="url(#clip0_0_1005)">
    <path d="M-0.000159763 15.123C5.57689 23.1055 29.8412 31.0512 46.1619 30.5525C63.8029 30.0535 73.4634 26.5629 92.271 13.7275C92.2164 15.1328 92.0507 16.2765 92.0775 17.3197C92.0581 18.5099 92.0496 19.7683 92.3014 20.9154C92.3556 21.256 93.063 21.7721 93.4805 21.7756C93.898 21.779 94.5 21.1945 94.5815 20.8324C95.2819 17.3691 95.8468 13.9274 96.4686 10.4067C96.6344 9.26304 96.0978 8.51032 94.8914 8.35287C90.3125 7.96322 85.7229 7.50545 81.0871 7.19468C80.0379 7.15192 78.8612 7.61826 77.5056 7.83369C79.0555 10.5902 81.4414 9.86186 83.3228 10.331C85.2827 10.8576 87.3241 11.022 89.8263 11.4623C84.8067 16.1707 79.4921 19.4595 73.6979 21.9166C52.4894 31.0134 31.4195 29.6132 10.6745 20.2004C7.97467 18.9535 5.43486 17.4018 2.79197 16.0759C1.99227 15.8539 1.26034 15.621 -0.000159763 15.123Z" fill="#DF6951"/>
  </g>
  <defs>
    <clipPath id="clip0_0_1005">
      <rect width="96.1304" height="23.346" fill="white" transform="matrix(0.987606 -0.156951 -0.156951 -0.987606 3.66406 38.1797)"/>
    </clipPath>
  </defs>
</svg>
        </div>
        <div className="menu">
            <ul>
                <li>
                    <Link to='/' >Home</Link>
                </li>
                <li><Link to='/about'>About</Link></li>

                <li id='services'><Link to='/services'>Services</Link>
                    <span className='triangle' onClick={handleClickSubmenu}>
                    <i class="fa-solid fa-caret-right"></i>
                    </span>
                    <div className='submenu'>
                      <ul>
                        <li><Link>Honeymoon Packages</Link></li>
                        <li><Link>Tours Packages</Link></li>
                        <li><Link>Musical Events</Link></li>
                        <li><Link>Build Package</Link></li>
                      </ul>
                    </div>
</li>
                <li><Link to='/packages'>Upcomming Packages</Link></li>
                
            </ul>
        </div>
    </div>
  )
}

export default Mobile