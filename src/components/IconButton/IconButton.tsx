import type {ComponentType} from 'react'
import './IconButton.css'
type props={
    icon:ComponentType<any>,
    size:number,
    OnClick?:()=>void
}

function IconButton({icon: Icon, size, OnClick}:props){
    return(
        <div style={{width: size, height: size}} className="icon-button" onClick={OnClick}>
            <Icon size={size} />
        </div>
    )
}


export default IconButton;