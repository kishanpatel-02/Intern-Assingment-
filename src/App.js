import './App.css';
import Homepage from './Components/Homepage';
import HomeDisplay from './Pages/HomeDisplaypage';
import Checks from './Pages/Checkspage';
import Tagspage from './Pages/Tagspage';
import OnpageResults from './Pages/Onpageresultspage';
import Speed from './Pages/Speedpage';
import {BrowserRouter, Route,Routes} from 'react-router-dom';

function App() {

  return (
    
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<Homepage/>}/>
      <Route path="/onpageresults" element={<OnpageResults/>}/>
      <Route path="/checks" element={<Checks/>}/>
      <Route path="/tags" element={<Tagspage/>}/>
      <Route path="/home" element={<HomeDisplay/>}/>
      <Route path="/speed" element={<Speed/>}/>
    </Routes>
    </BrowserRouter>
    
  );
}

export default App;
