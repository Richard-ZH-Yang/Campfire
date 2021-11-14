// import { BrowserRouter as Routes, Route } from "react-router-dom";
import { BrowserRouter as Routes ,Route } from 'react-router-dom';
import './App.css';


import AddTagPage from "./containers/addTagPage";

function App() {
  return (
    <div className="App">
      {/* <Header /> */}
      <AddTagPage></AddTagPage>
      <MainPage/>
    </div>
  );
}

export default App;
