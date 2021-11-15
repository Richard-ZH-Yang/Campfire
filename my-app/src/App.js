// import { BrowserRouter as Routes, Route } from "react-router-dom";
import { BrowserRouter as Routes ,Route } from 'react-router-dom';
import './App.css';

import MainPage from "./containers/MainPage";
import AddTagPage from "./containers/AddTagPage";

function App() {
  return (
    <div className="App">
        <AddTagPage></AddTagPage>
        <MainPage></MainPage>
    </div>
  );
}

export default App;
