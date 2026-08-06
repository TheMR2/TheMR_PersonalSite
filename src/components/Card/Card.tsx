import './CardStyle.css';

type Props = {
    array?: string[];
    image:string;
    title:string;
    des:string;
    url:string;
}

function Card({array,image,title,des,url}:Props) {
    return (
        <div className="card">
            <img className="image" src={image} alt="" />
            <div className='types'>
                {array?.map((item, index) => (
                    <p key={index} className="type">
                        {item}
                    </p>
                ))}
            </div>
            <h1 style={{fontSize:25,color:"#D4E4FA"}}>{title}</h1>
            <p style={{color:"#B9CACB", marginTop:-10}}>{des}</p>
            <a className='project' href={url} >View Project</a>
        </div>
    );
}

export default Card;