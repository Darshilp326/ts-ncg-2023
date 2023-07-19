import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Views from './components/Views';
import WorldBankApp from './components/WorldBankApp';

function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route path="/" >
         <Route path="home" element={<WorldBankApp/>} />
        <Route path="views" element={<Views />} />
      </Route>
    </Routes>
  </BrowserRouter>
  );
}

export default App;
