import logo from './logo.svg';
import './App.css';
import Employee from './Employee';
import Post from './Post';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Welcome !!</h1>
        <Employee/>
        <Post/>
      </header>
    </div>
  );
}

export default App;
