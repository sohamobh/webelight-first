import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';

//new project.. text management
function App() {
  return (
    <>
      {/*<Navbar title="TextUtils" aboutText = "About TextUtils"/>*/} 
      {/*<Navbar/>*/}
      <Navbar title="TextUtils"/>
      <TextForm/>
    </>
  );
}

export default App;
