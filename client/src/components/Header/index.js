
import React, { useState, useEffect, useHistory } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Header = () => {

    return (
        <>
            <header>
                <div className="logo">
                    <img className='mb-1' src="img/SafeMoon_Logo.svg.png" alt="Logo" />
                    <h1 style={{fontWeight:'700'}}>SafeMoonSwap</h1>
                    <p className='mb-0'>Beta</p>
                </div>
                <div className="rest">
                    <img src="img/gas.f1920a4b.svg" alt="gas" />

                    <div className="rates">
                        <div className="rate">
                            <div className="ticker">
                                SafeMoon&nbsp;
                                    <span>
                                        <i className="fas fa-dollar-sign" aria-hidden="true"></i>
                                        0.00247
                                    </span>
                            </div>
                                <span className="percent">
                                    <i className="fas fa-caret-up" aria-hidden="true"></i>&nbsp;9,05
                                </span>
                        </div>
                        <div className="rate">
                            <div className="ticker">AST&nbsp;
                                <span><i className="fas fa-dollar-sign" aria-hidden="true"></i>21.02</span>
                            </div>
                                <span className="percent">
                                    <i className="fas fa-caret-up" aria-hidden="true"></i>&nbsp;4,18
                                </span>
                        </div>
                        <div className="rate">
                            <div className="ticker">STAR&nbsp;
                                <span><i className="fas fa-dollar-sign" aria-hidden="true"></i>0.0000002</span>
                            </div>
                            <span className="percent"><i className="fas fa-caret-up" aria-hidden="true"></i>&nbsp;0,00</span>
                        </div>
                    </div>
                    <div className="dollar">
                        <i className="fas fa-dollar-sign" aria-hidden="true"></i>
                    </div>
                    <button type="button" id="connect_wallet" style={{fontFamily:'Open Sans', fontWeight:'bold'}}>Connect your wallet</button>

                    
                    <div id="drop-down" style={{float:'right', marginRight:'70px', display:'none'}}> 
                        <button id="drop" >Balance <i className="fas fa-caret-down" aria-hidden="true"></i></button> 
                        <div id="dropdown-menu"> 
                            <p className="show-balance mb-0">Asteroids AST : <span className="shib-balance">0</span></p> 
                        </div> 
                    </div> 
                </div>
            </header>
            
            <ToastContainer
                autoClose={3000}
                closeButton={false}
                closeOnClick
            />
        </>
    )
}

export default Header;
