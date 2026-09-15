import type { CSSProperties } from 'react'
import './ButtonStyle.css'

type props={
    label:string,
    isColored:boolean,
    isBorder:boolean,
    fontsize?:number;
    color?:string;
    width?:number;
    height?:number;
}

function Button({label,isColored,isBorder,width,height,fontsize}:props){
    let styling:CSSProperties ={}
        styling = {
            borderWidth:isBorder? '2px':'0px',
            color:isColored? '#00363a':'#fff',
            background: isColored? 'linear-gradient(to right,#3031c0 , #00f2ff)':'transparent'
        }
    return(
        <div style={{...styling,width:width,height:height,fontSize:fontsize}} className='button'>{label}</div>
    )
}




export default Button;