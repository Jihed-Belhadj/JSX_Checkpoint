
import './App.css';
import ImageInSource from './ImageInSource.jpg';

function App() {
  return (
    <div>
      <div style={{border:"solid 1px black" , maxwidth:"100vw"}}>

<h1 className="title red">Your name here</h1>

<br/>

<img src={ImageInSource} />

<br/>

<img src="/ImageInPublic.jpg" />

</div>

<video style={{width:"320" , height:"240"}} controls>

<source src="https://www.youtube.com/watch?v=GMjhMgpCeYM&ab_channel=4KVideoNature-FocusMusic" type="video/mp4" />

</video>
    </div>
    
  );
}

export default App;
