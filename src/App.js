import './App.css';
import projectOne from './images/project-1.png'
import projectTwo from './images/project-2.png'
import projectThree from './images/project-3.png'
import resume from './images/resume.png'

function App() {
  const testFunction = async () => {
    const response = await fetch('/test_route')
  }
  testFunction()

  return (
    <div className="App">
      <h1>Orion's Portfolio</h1>

      <div className='project-container'>
        <h2>MOD1 Space Battle Game</h2>
        <img src={projectOne}/>
        <a href='https://github.com/Orion-Cole/MOD3-Project'>Github Link</a>
      </div>

      <div className='project-container'>
        <h2>MOD2 Web Store</h2>
        <img src={projectTwo}/>
        <a href='https://github.com/Orion-Cole/Product-Store-MOD-2-PROJECT-'>Github Link</a>
      </div>

      <div className='project-container'>
        <h2>MOD3 Game Browser</h2>
        <img src={projectThree}/>
        <a href='https://github.com/Orion-Cole/Space-Battle-MOD-1-PROJECT-'>Github Link</a>
        <a href='https://orions-game-browser.onrender.com'>Website Link</a>

      </div>
      <div className='project-container'>
          <h2>Personal Links:</h2>
          <a href='https://www.linkedin.com/in/orion-cole-8524b6246/'>LinkedIn</a>
          <h2>Portfolio</h2>
          <img src={resume}/>
      </div>
    </div>
  );
}

export default App;
