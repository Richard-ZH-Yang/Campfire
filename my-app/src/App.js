import logo from './logo.svg';
import './App.css';
import {hashPassword} from "mysql/lib/protocol/Auth";

const express = require("express");
const mysql = require("mysql")

const db = mysql.createConnection({
  host:"localhost",
  user:"root",
  password:"123456"
});

db.connect(() => {
  if(err){
    throw err;
  }
  console.log("MySql connected");
})

const app = express();

app.get('./creatdb',(req, res) => {
  let sql = 'CREATE DATABASE nodesql'
  db.query(sql, (err, result) => {
    if(err)
      throw err;
    console.log(result);
    res.send('database created');
  })
})

app.listen("3000", () => {
  console.log("Sever started on port 3000")
})

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
