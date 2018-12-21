import React, { Component } from 'react';

export class Sprite extends Component {
    //canvas的宽高
    canvasWidth=0
    canvasHeight=0
    //图片的加载
    image=new Image()
    refs=null
    loadImagePromise=null
    //序列帧的参数 行数列数以及序列帧的范围
    row=0
    col=0
    fpsWidth=0
    fpsHeight=0
    //动画中序列的位置
    currentRow=0
    currentCol=0
    //控制序列帧的速度
    fps=0
    //是否停止
    stop=true
    loaded=false
    animationTimeout=null
    constructor(props){
        super(props)
        console.log(props)
        //初始化
        this.canvasWidth=props.width*2
        this.canvasHeight=props.height*2
        this.image.src=props.data.spriteImg
        this.loadImagePromise=this.loadImg()
        
        if(this.props.data.spriteConf&&this.props.data.spriteConf.length===4) 
            [this.row,this.col,this.fpsWidth,this.fpsHeight]=this.props.data.spriteConf

        this.canvas=(refs)=>{
            if(refs) {
                //获取绘图环境
                this.refs=refs
                this.context=refs.getContext("2d")
                console.log(refs)
            }
        }
    }
    shouldComponentUpdate(props){//当幻灯片疯狂滑动的时候，停止滑动
        if(props.isMoving!==0){
            this.stop=true
            return false
        }else{
            return true
        }
    }
    componentDidUpdate(){//当幻灯片停止滑动的时候，更新组件，重新获取context
        this.context=this.refs.getContext("2d")
        this.stop=false
        this.animate()
        console.log("componentDidUpdate",this.context)
    }
    componentDidMount(){
        this.currentRow=0
        this.currentCol=0
        //初始化之后，设定动画不停止
        this.stop=false
        if(!this.loaded){
            this.loadImagePromise.then(()=>{
                this.animate()
                //图片加载完之后才算真正加载完
                this.loaded=true
            },(e)=>console.log(e)) 
        }else{
            this.animate()
        }
    }
    componentWillUnmount(){
        console.log("canvas unload")
        //卸载后，清除canvas
        this.stop=true
        if(this.context.clearRect) this.context.clearRect(0,0,this.canvasWidth,this.canvasHeight)
        this.image=null
    }
    animate(){
        if(this.fps>=4){//此处控制速度
            
            this.fps=0
            let cr=this.currentRow, cc=this.currentCol;
            if(cr===this.row){
                this.currentRow=0
                this.currentCol++
            }else{
                this.currentRow++
            }
            if(cc>this.col){
                this.currentCol=0
            }
            this.drawSpirt()
        }
        this.fps++
        if(!this.stop&&this.context) window.requestAnimationFrame(this.animate.bind(this))//如果未停止以及存在绘图环境
        else{ console.log(this)}
    }
    drawSpirt(){
        let cr=this.currentRow, cc=this.currentCol;
        if(this.context.drawImage) this.context.drawImage(this.image,cr*this.fpsWidth,cc*this.fpsHeight,this.fpsWidth,this.fpsHeight,0,0,this.canvasWidth,this.canvasHeight)
    }
    loadImg(){
        return new Promise((rs,rj)=>{
            this.image.onload=rs
            this.image.onerror=rj
        })
    }
    render(){
        let { height,width}=this.props
        return <canvas width={this.canvasWidth} height={this.canvasHeight} style={{width:width,height:height}} ref={this.canvas}></canvas>
    }
}
export default Sprite