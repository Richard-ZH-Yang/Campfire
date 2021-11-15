// import { BrowserRouter as Routes, Route } from "react-router-dom";
import './App.css';

import MainPage from "./containers/MainPage";

import AddTagPage from "./containers/AddTagPage";
import SearchPage from "./containers/SearchPage";
import {BrowserRouter, Route, Routes,} from "react-router-dom";


function App() {

  return (


      <BrowserRouter>
          <Routes>
              <Route path="/" element={<MainPage />} />
              <Route path="/add" element={<AddTagPage />} />
              <Route path="/search" element={<SearchPage />} />
          </Routes>
      </BrowserRouter>

  );
}

export default App;
