import './style.css';
import srcImg from "./imgSrc.jpg"
function App() {
  return (
    <div className="App">
      <h1 className='title red'>Your name here:</h1>
      <img src={srcImg} alt="nature-img"/>
      <br/>
      <img src="/imgPublic.jpg" alt='mountains'/>
      <br />
      <video width={320} height={240} controls>
        <source src="myvideo.mp4" type='video/mp4'></source>
      </video>
    </div>
  );
}

export default App;
