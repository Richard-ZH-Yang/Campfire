const express = require('express');
const mysql = require('mysql');

// Create connection
const db = mysql.createConnection({
    host     : 'localhost',
    user     : 'root',
    password : '123456'
});

// Connect
db.connect((err) => {
    if(err){
        throw err;
    }
    console.log('MySql Connected...');
});

const app = express();


// REQUIRES: tagName should be exact as the tag column in the database
// EFFECTS: get a random content from a specific tag that is the same as the tagName. If the tagName does not exist,
//          reject with NotFoundError
app.get('/getRandomContent/:tag', (req, res) => {
    let tagName = req.params.tag;

    let sql = `SELECT DISTINCT content FROM folklore WHERE tag = '${tagName}'`;
    let query = db.query(sql, (err, results) => {
        if(err) {
            res.status(400).json({result: "tag not found"});
        }
        if (results.length === 1 && results[0][tagName] === "") {
            res.status(400).json({result: "There is no valid content for this tag"})
        }
        let randNum = getRandomIntInclusive(0, results.length);
        res.status(200).json({result: results[randNum]})
        // res.send('Posts fetched...');
    });
});

// EFFECTS: get a random number between min and max inclusive
function getRandomIntInclusive(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1) + min); //The maximum is inclusive and the minimum is inclusive
}

// EFFECTS: return a random tagName from the database. If the database is empty, reject with notFoundError
app.get('/getRandomTag', (req, res) => {
    let sql = `SELECT DISTINCT tag FROM folklore`;
    let query = db.query(sql, (err, results) => {
        if(err) {
            res.status(400).json({result: "ERROR! Invalid query"});
        }
        let randNum = getRandomIntInclusive(0, results.length);
        res.status(200).json({result: results[randNum]})
        // res.send('Posts fetched...');
    });
});

// Create DB
app.get('/createdb', (req, res) => {
    let sql = 'CREATE DATABASE nodemysql';
    db.query(sql, (err, result) => {
        // if(err) throw err;
        console.log(result);
        res.send('Database created...');
    });
});

// Create table
app.get('/createpoststable', (req, res) => {
    let sql = 'CREATE TABLE posts(id int AUTO_INCREMENT, title VARCHAR(255), body VARCHAR(255), PRIMARY KEY(id))';
    db.query(sql, (err, result) => {
        // if(err) throw err;
        console.log(result);
        res.send('Posts table created...');
    });
});


app.listen('3000', () => {
    console.log('Server started on port 3000');
});
