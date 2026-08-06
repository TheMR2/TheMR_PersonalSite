
import Card from './components/Card/Card';
import Button from './components/Button/Button';


function App() {
  return(
    <div>
      <Card
       array={["C++","Node.js","Python"]} 
       image="https://fastly.picsum.photos/id/741/536/354.jpg?hmac=JV13P4XHP5tamm2vlyXNFZxns3IyVLT_akGo-VhYPkw" 
       title='Project' 
       des='Good PRoject to show for testing' 
       url='youtube.com'></Card>
      <Button></Button>

    </div>
  );
}

export default App;