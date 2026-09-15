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
    onClick?:()=>void;
}

function Button({label,isColored,isBorder,width,height,fontsize,onClick}:props){
    let styling:CSSProperties ={}
        styling = {
            borderWidth:isBorder? '2px':'0px',
            color:isColored? '#00363a':'#fff',
            background: isColored? 'linear-gradient(to right,#3031c0 , #00f2ff)':'transparent'
        }
    return(
        <div style={{...styling,width:width,height:height,fontSize:fontsize}} className='button' onClick={onClick}>{label}</div>
    )
}




export default Button;