import { useState } from 'react'
import { Link } from 'react-router-dom'

function Header() { 

  return (
    <>
    <header className="site-header">
        <div className="container">
            <div className="site-header__inner">
                <h2 className="site-header__title">
                    <Link to="/">Home</Link>
                </h2>
                <div>
                    <ul className="site-header__box">
                        <li className='item'><Link to="/popular"><h2>Popular</h2></Link></li>
                        <li className='item'><Link to="/toprated"><h2>Top Rated</h2></Link></li>
                        <li className='item'><Link to="/upcoming"><h2>UpComing</h2></Link></li>
                    </ul>
                </div>
            </div>
        </div>
    </header>
    </>
  )
}

export default Header
