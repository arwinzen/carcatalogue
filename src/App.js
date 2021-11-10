import './App.css';

import { BrowserRouter, Routes, Route } from "react-router-dom";
import Dashboard from './containers/dashboard';
import Login from './containers/login';
import Header from './components/header';
import Details from './containers/dashboard/details';
import CreateProduct from './containers/createProduct';

function App() {
  return (
    <BrowserRouter className="App">
      <Header />
      <Routes>

        <Route path="/create" element={<CreateProduct />} />
        <Route path="/" element={<Login />} />
        <Route path="/dashboard/:id" element={<Details />} />
        <Route path="/dashboard" element={<Dashboard />} />
        
      </Routes>
    </BrowserRouter>

  );
}

export default App;
