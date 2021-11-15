// import { BrowserRouter as Routes, Route } from "react-router-dom";
import './App.css';

import MainPage from "./containers/MainPage";
import AddTagPage from "./containers/addTagPage";
import {BrowserRouter, Route, Routes,} from "react-router-dom";

function App() {

  return (

      <BrowserRouter>
          <Routes>
              <Route path="/" element={<MainPage />} />
              <Route path="/add" element={<AddTagPage />} />
          </Routes>
      </BrowserRouter>
  );
}

export default App;
