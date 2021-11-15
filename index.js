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
app.get('/addfolkflore/:tag/:content', (req, res) => {
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

// Select single post
app.get('/getrandomcontent', (req, res) => {
    let sql = `SELECT DISTINCT content FROM folklore WHERE tag = ${req.params.tag}`;
    let query = db.query(sql, (err, result) => {
        if(err) throw err;
        console.log(result);
        res.send('Post fetched...');
    });
});

// Update post
app.get('/updatepost/:id', (req, res) => {
    let newTitle = 'Updated Title';
    let sql = `UPDATE posts SET title = '${newTitle}' WHERE id = ${req.params.id}`;
    let query = db.query(sql, (err, result) => {
        if(err) throw err;
        console.log(result);
        res.send('Post updated...');
    });
});

// Delete post
app.get('/deletepost/:id', (req, res) => {
    let newTitle = 'Updated Title';
    let sql = `DELETE FROM posts WHERE id = ${req.params.id}`;
    let query = db.query(sql, (err, result) => {
        if(err) throw err;
        console.log(result);
        res.send('Post deleted...');
    });
});

app.listen('3000', () => {
    console.log('Server started on port 3000');
});

