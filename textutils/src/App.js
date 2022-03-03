import logo from './logo.svg';
import './App.css';

let name = "Soha";
function App() {
  return (
    <>
    <nav>
      <li>Home</li>
      <li>About</li>
      <li>Contact</li>
    </nav>
    <div className="container">
      <h1>Hello {name}</h1>
      <p>React embraces the fact that rendering logic is inherently coupled with other UI logic:
       how events are handled, how the state changes over time, and how the data is prepared 
       for display.</p>
    </div>
    </>
  );
}

export default App;
