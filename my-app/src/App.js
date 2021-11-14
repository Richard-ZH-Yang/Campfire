// import { BrowserRouter as Routes, Route } from "react-router-dom";
import { BrowserRouter as Routes ,Route } from 'react-router-dom';
import './App.css';

import MainPage from "./containers/MainPage";
import AddTagPage from "./containers/addTagPage";

function App() {
  return (
    <div className="App">
      {/* <Header /> */}
{/*   
        <Routes>
          <Route path="/addTagPage"  component={AddTagPage} />;
        </Routes>  */}
        <AddTagPage></AddTagPage>
        <MainPage></MainPage>
    </div>
  );
}

export default App;
