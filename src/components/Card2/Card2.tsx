import './Card2.css'
import codeIcon from '../../assets/icons/code.svg';

type Props = {
    icon: React.ComponentType<React.SVGProps<SVGSVGElement>>;
    array?: string[];
    title:string;
    description:string;
}
function Card2({icon:Icon,array,title,description}:Props){
    return(
        <div className='panel'>
            <div className='IconPanel'>
                <Icon className='Icon' />
            </div>
            <h2>{title}</h2>
            <p className='discription'>{description}</p>
            <div className='types'>
                {array?.map((item, index) => (
                    <p key={index} className="type">
                        {item}
                    </p>
                ))}
            </div>
        </div>
    )
}


export default Card2;