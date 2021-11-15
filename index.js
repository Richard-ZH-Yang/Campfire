const express = require('express');
const mysql = require('mysql');

var uuid = require('uuid');

const currentDate = new Date();
const timestamp = currentDate.getTime();

// Create connection
const db = mysql.createConnection({
    host     : 'localhost',
    user     : 'root',
    password : '123456',
    database : 'nodemysql'
});

// Connect
db.connect((err) => {
    if(err){
        throw err;
    }
    console.log('MySql Connected...');
});

const app = express();

// Create DB
app.get('/createdb', (req, res) => {
    let sql = 'CREATE DATABASE nodemysql';
    db.query(sql, (err, result) => {
        if(err) throw err;
        console.log(result);
        res.send('Database created...');
    });
});

// Create table
app.get('/createfolkloretable', (req, res) => {
    let sql = 'CREATE TABLE folklore(id VARCHAR(100) , tag VARCHAR(100), content VARCHAR(300), date DATE, PRIMARY KEY(id))';
    db.query(sql, (err, result) => {
        if(err) throw err;
        console.log(result);
        res.send('folklore table created...');
    });
});

// Insert post 1
app.get('/addfolkflore/:tag/:content?', (req, res) => {
    // let tag = ${req.params.tag};
    // let content = req.value.get('content');
    let uid = uuid.v4();
    let date = timestamp;
    let post = {id:uid, tag: req.params.tag, content: req.params.content, date: date};
    let sql = 'INSERT INTO folklore SET ?';
    let query = db.query(sql, post, (err, result) => {
        if(err) res.status(400).json({error: err});
        console.log(result);
        res.status(200).json({result: result});
    });
});

// Select posts
app.get('/searchtag/:tag', (req, res) => {
    let sql = `SELECT tag FROM folklore WHERE tag LIKE '%${req.params.tag}%'`;
    let ouput = [];
    let query = db.query(sql, (err, results) => {
        if(err) res.status(400).json({error: err});
        console.log(results);
        res.status(200).json({result: results});
    });
});

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

        if (results.length === 1 && results[0][tagName] === undefined) {
            res.status(400).json({result: "There is no valid content for this tag"})
        }
        let randNum = getRandomIntInclusive(0, results.length-1);
        res.status(200).json({result: results[randNum]})
        // res.send('Posts fetched...');
    });
});

// EFFECTS: return a random tagName from the database. If the database is empty, reject with notFoundError
app.get('/getRandomTag', (req, res) => {
    let sql = `SELECT DISTINCT tag FROM folklore`;
    let query = db.query(sql, (err, results) => {
        if(err) {
            res.status(400).json({result: "ERROR! Invalid query"});
        }
        if (results.length ===  0) {
            res.status(400).json({result: "Dataset is empty"})
        }
        let randNum = getRandomIntInclusive(0, results.length-1);
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

app.listen('3000', () => {
    console.log('Server started on port 3000');
});

