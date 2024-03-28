import './App.css';
import LoginPage from './Pages/Login/Login';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import MainPage from './Pages/MainPage/MainPage';


function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route index element={<LoginPage />} path="/" />
          <Route index element={<MainPage />} path="/home/:userName" />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
