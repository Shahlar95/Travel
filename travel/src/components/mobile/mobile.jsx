import React from 'react'
import {Link} from 'react-router-dom';


function Mobile() {
  const handleClickRemove =()=>{
    
    const mobileMenu = document.querySelector('.mobile-menu')
    mobileMenu.classList.remove('show')
    
 
  }
  return (
    <div className='mobile-menu'>
        <div className='close' onClick={handleClickRemove}>
        <i class="fa-solid fa-xmark"></i>
        </div>
        <div className="menu">
            <ul>
                <li>
                    <Link to='/' >Home</Link>
                </li>
                <li><Link to='/about'>About</Link></li>
                <li id='services'><Link to='/services'>Services</Link>
                    <span>
                    <svg xmlns="http://www.w3.org/2000/svg" width="12" height="8" viewBox="0 0 12 8" fill="none">
  <path d="M5.04535 7.14L0.249351 1.658C-0.316649 1.013 0.143351 3.67706e-07 1.00235 3.67706e-07H10.5944C10.7866 -0.000164459 10.9748 0.0550878 11.1365 0.159141C11.2981 0.263194 11.4263 0.411637 11.5058 0.586693C11.5853 0.761749 11.6126 0.955998 11.5845 1.14618C11.5564 1.33636 11.474 1.51441 11.3474 1.659L6.55135 7.139C6.45749 7.24641 6.34174 7.3325 6.21186 7.39148C6.08198 7.45046 5.94099 7.48098 5.79835 7.48098C5.65571 7.48098 5.51472 7.45046 5.38484 7.39148C5.25497 7.3325 5.13921 7.24641 5.04535 7.139V7.14Z" fill="white"/>
</svg>
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