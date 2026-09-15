
import './App.css';
import Card from './components/Card/Card';
import Button from './components/Button/Button';
import Card2 from './components/Card2/Card2';
import IconButton from './components/IconButton/IconButton';
import * as Icons from "react-icons/bs";
import MRLogo from '../src/assets/Icons/MRLabel.svg';

const scrollTo = (id: string) => {
  document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
};

function App() {
  return(
    <div className='main'>
      <div className='topBar'>
        <h1 className='logo'>MR</h1>
        <div className='taps'>
          <Button isColored={false} label={'Work'} isBorder={false} onClick={() => scrollTo('work')}/>
          <Button isColored={false} label={'Skills'} isBorder={false} onClick={() => scrollTo('skills')}/>
          <Button isColored={false} label={'Contact'} isBorder={false} onClick={() => scrollTo('contact')}/>
        </div>
        <Button isColored={true} label={'Get In Touch'} isBorder={false} width={100} height={10}/>
      </div>
      <div className='welcomeTitle' id='about'>
        <img className='logo-img' src={MRLogo} alt="MR Logo"/>
        <h1 className='hero-title'>Building the Future of<br/>Digital Experiences.</h1>
        <p className='hero-subtitle'>Developer. Designer. Problem Solver. Bridging the gap<br/>between cutting-edge engineering and avant-garde<br/>aesthetics.</p>
        <Button isColored={true} isBorder={false} label={'Explore My Work →'} onClick={() => scrollTo('work')}/>
      </div>
      <div className='selectedWork' id='work'>
        <h1 className='selectedWorkTitle'>Selected Work</h1>
        <div className='horizontal-scroll'>
          <Card url={'#'} title={'Project 1'} description={'Description of Project 1'} image={'https://placehold.co/388x256'} />
        </div>
        <div className='technicalArsenal' id='skills'>
          <h1 className='technicalArsenalTitle'>Technical Arsenal</h1>
          <div className='TechnicalArsenalCards'>
            <Card2 title={'Project 1'} description={'Description of Project 1'} icon={Icons.BsCode} />
            <Card2 title={'Project 1'} description={'Description of Project 1'} icon={Icons.BsCode} />
            <Card2 title={'Project 1'} description={'Description of Project 1'} icon={Icons.BsCode} />
          </div>
        </div>
      </div>
      <div className='footer' id='contact'>
        <h1 className='footer-title'>Let's Build Something !</h1>
        <p className='footer-subtitle'>Currently open for new opportunities and interesting collaborations.</p>
        <Button isBorder={true} isColored={false} label={'Get In Touch'} />
      </div>
      <div className='copyright'>
        <h3 style={{ color: '#b9cacb', fontSize: '12px' }}>© 2024 MR Creative Technologist. Built with precision.</h3>
        <div style={{display:'flex',flexDirection:'row'}}>
          <Button fontsize={14} isBorder={false} isColored={false} label={'Github'} />
          <Button fontsize={14} isBorder={false} isColored={false} label={'LinkedIn'} />
          <Button fontsize={14} isBorder={false} isColored={false} label={'Twitter'} />
        </div>

      </div>
    </div>
  );
}




export default App;