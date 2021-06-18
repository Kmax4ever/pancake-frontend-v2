import React, { useState, useRef, useEffect } from 'react';
import '../../style/css/header.css'
import { Button, ButtonProps, useWalletModal} from '@pancakeswap-libs/uikit'
import useAuth from 'hooks/useAuth'
import logo from '../../style/images/logo.png';
import link from '../../style/images/link.png'

/* eslint-disable */
const Header = () => {
  const { login, logout } = useAuth()
  // const { onPresentConnectModal } = useWalletModal(login, logout)
  const [isActive, setIsactive] = useState(false);
  const nav = useRef(null);
  const hamburger = useRef(null);

  // const closeMenu = () => {
  //   if (!nav)
  //     return;
  //   document.body.classList.remove('off-nav-is-active');
  //   nav.current && (nav.current.style.maxHeight = 0);
  //   setIsactive(false);
  // }



  function showDiv(Div) {
    const x = document.getElementById(Div);
    if (!x) {
      return
    }
    if (document.body.clientWidth < 1000) {
      const toggleX = document.getElementById(`toggle-line-x`) as any;
      const toogleLine = document.getElementById(`toggle-line`) as any;
      if (x.style.display === "none") {
        x.style.display = "flex";
        x.style.left = "0 !important;"
        x.style.transitionProperty = "all";
        x.style.transitionDuration = "0.4s";
        x.style.transitionTimingFunction = "ease";
        x.style.transitionDelay = "0s";


        toggleX.style.display = "block";
        toogleLine.style.display = "none"
      } else {
        x.style.display = "none";
        toggleX.style.display = "none";
        toogleLine.style.display = "block"
      }
    }

  }

  return (
    <header>
      <div className="header-main">
        <div className="header-nav">
          <div className="left-toggle"/>
          <div className="header-nav-toggle">
            <a href="#top" className="navbar-toggle" data-menu-toggle="header-menu">
              <div className="toggle-line" id="toggle-line" onClick={() => showDiv("header_navbar")} >
                <span></span>
              </div>
              <div className="toggle-line-x" id="toggle-line-x" onClick={() => showDiv("header_navbar")} >
              </div>
            </a>
          </div>

        </div>
        <div className="header-navbar" id="header_navbar">

          <nav className="header-menu" id="header-menu">
            <ul className="menu">
              <li className="menu-item-first" >  <a href="#top" className="logo-link">
                <img className="logo" src={logo} />
              </a></li>
              <li className="menu-item"><a className="menu-item-a" href="/" target="_blank">Home</a></li>
              <li className="menu-item"><a className="menu-item-a" href="/" target="_blank">Farms</a></li>
              <li className="menu-item"><a className="menu-item-a" href="/" target="_blank">Features</a></li>
              <li className="menu-item"><a className="menu-item-a" href="/" target="_blank"> Roadmap </a></li>
              <li className="menu-item"><a className="menu-item-a" href="/" target="_blank">BBS Marketplace</a></li>
              <li className="menu-item"><a className="menu-item-a" href="/" target="_blank">BBS Swap</a></li>
              <li className="menu-item"><a className="menu-item-a" href="/" target="_blank">BBS Entertaiment</a></li>
              <li className="menu-item"><a className="menu-item-a" href="/"target="_blank">White Paper</a></li>           
              <li className="menu-item-last">
                {/* <a className="btn-truswallet" onClick={onPresentConnectModal} >
                <img className="logo" src={link} />
                  </a> */}
                  </li>
            </ul>
          </nav>
          <div className="header-navbar-overlay" id="header-navbar-overlay" onClick={() => showDiv("header_navbar")}></div>
        </div>

      </div>


    </header>

  );
}

export default Header;
