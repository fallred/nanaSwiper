import React from 'react';

import Swiper,{SwiperSlider} from '../../index'
import {SliderSpriteTemplate} from '../template/SliderSpriteTemplate'
import {SliderDefaultTemplate} from  '../template/SliderDefaultTemplate'
import img1 from "../images/test1.jpg"
import img1Bkg from "../images/test1_bkg.jpg"
import img3 from "../images/test3.jpg"
import img3Bkg from "../images/test3_bkg.jpg"

const width=window.innerWidth*.8-20
const initMovex=window.innerWidth*.1

const data=[
    {
        width:width,
        height:300,
        spriteImg:img1,
        spriteConf:[3,1,222,350],
        speed:6,
        img:img1Bkg,
        tpl:SliderSpriteTemplate
    },
    {
        text:"text",
        tpl:SliderDefaultTemplate
    },
    {
        width:width,
        height:300,
        spriteImg:img3,
        spriteConf:[3,1,222,350],
        speed:6,
        img:img3Bkg,
        tpl:SliderSpriteTemplate
    }
]
export function CoverFlowSlider(){
   return (<div className="SwiperContainer">
    <Swiper
        slideType="flatCoverFlow"
        sensitive={.2} 
        isLoop={false}
        width={width}
        initMovex={initMovex}
        height={300}>
            {data.map((d,index)=>{
                return <SwiperSlider width={width} height={260} key={`CoverFlowSlider${index}`} render={(props)=><d.tpl {...d} {...props}/>}/>
            })}
        </Swiper>
    </div>)
}