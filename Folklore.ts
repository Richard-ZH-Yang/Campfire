
var uuid = require('uuid');

const currentDate = new Date();
const timestamp = currentDate.getTime();

interface Tag {
    id: string;
    tag: string;
    content: string;
    date: number;
}

export class NotFindError extends Error {
    constructor(...args: any[]) {
        super(...args)
    }
}

class Folklore {

    public addTag(tagName: string, content: string) {
        app.get('/addfolkflore', (req, res) => {
            let post: Tag = {id: uuid.v3(), tag: tagName, content: content, date: timestamp};
            let sql = 'INSERT INTO folklore SET ?';
            let query = db.query(sql, post, (err, result) => {
                if(err) res.status(400).json({error: err});
                console.log(result);
                res.status(200).json({result: result});
            });
        });
    }

    public searchTag(tagName: string) {
        app.get('/getfolkflore', (req, res) => {
            let sql = 'SELECT tag FROM folklore LIKE (tagName)';
            let query = db.query(sql, (err, results) => {
                if(err) res.status(400).json({error: err});
                console.log(results);
                res.status(200).json({result: results});
            });
        });
    }

    public getRandomContent(tagName: string) {
        let resultArray: string[];
        app.get('/getfolkflore', (req, res) => {
            let sql = 'SELECT DISTINCT content FROM folklore';
            let query = db.query(sql, (err, results) => {
                if(err) throw err;
                console.log(results);
                resultArray = results;
                let arrayIsNotValid: boolean = (!(resultArray.indexOf("") === -1));
                if(arrayIsNotValid) {

                }
                if(arrayIsNotValid) res.status(400).json({error: err});
                let index = Math.random() * resultArray.length;
                res.status(200);
            });
        });

    }

    public getRandomTag() {

    }
}
