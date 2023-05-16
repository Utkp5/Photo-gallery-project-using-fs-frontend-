import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './Components/Home/Home';
import { Upload } from '@mui/icons-material';

function App() {
  return (
    <div >
        <Router>
           <Routes>
               <Route  exact path='/' element={<Home />} />
               <Route  exact path='/Upload' element={<Upload />} />
               <Route  exact path='/' element={<Home />} />
           </Routes>
        </Router>
    </div>
  );
}

export default App;
