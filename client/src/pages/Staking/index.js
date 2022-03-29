import React, { useState, useEffect, useHistory } from 'react';
import $ from 'jquery';
import './index.css';
const Staking = (props) => {

    return (
        <>
            <div className="swap__mainfield">
                <div className="badge bg-info team-rank px-3 bg-item" style={{position:'absolute', left:0, borderRadius:' .35rem 0 8px 0', top:0, boxShadow:' 0 0 5px rgba(0,0,0,.6)', textAlign:'center', paddingLeft:'1rem', paddingRight:'1rem', lineHeight:'1.6rem', width:'190px', color:'#f4f4f4', fontSize:'17px', fontWeight:300}}>STAKE</div>                        
                <div id='swap-page' className="swap__page pt2">
                    <div className="swap__header__line__settings">
                        <div><img src="img/star.png" alt="icon" style={{width:'44px', display:'inline-block'}}/></div>
                    </div>
                    <div className="swap__page__container">
                        <div>
                            <div id="swap-currency-output" label="[object Object]" style={{borderRadius:'0.4375rem', marginBottom:'0.3rem', height:'28px'}}>
                                <p style={{fontSize:'12px', position:'relative', bottom:'35px', right:'43px', fontWeight:600}}>Save The Moon by STAKING your SafeMoon. <br/>
                                    APR: 112.72% + 0.1% unstaking fee 
                                </p>
                            </div>
                            <div id="swap-currency-input" label="[object Object]" style={{borderRadius:'0.4375rem', marginBottom:'0.3rem'}}>
                                <p style={{fontSize:'12px', fontWeight:600}}>Stake SafeMoon to generate additional SafeMoon</p>
                            </div>
                        </div>
                        <div className="swap__connect">
                            <button  type="button" id="stake_tokens"  style={{fontFamily:'Open Sans', fontWeight:'bold'}}>Stake SafeMoon</button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Staking;
