interface Tag {
    id: string;
    tag: string;
    content: string;
    date: string;
}

class NotFoundError extends Error {
    constructor(...args: any[]) {
        super(...args);
    }
}

class Folklore {

    // REQUIRES: tagName is not empty
    // MODIFIES: database
    // EFFECTS: add a new tag with a random id and current date to the database
    public addTag(tagName: string, content: string) {

    }


    // REQUIRES: tagName is not empty
    // EFFECTS: find all the tag in the database that includes the tagName in the tag column using wildcard
    public searchTag(tagName: string) {

    }


    // REQUIRES: tagName should be exact as the tag column in the database
    // EFFECTS: get a random content from a specific tag that is the same as the tagName. If the tagName does not exist,
    //          reject with NotFoundError
    public getRandomContent(tagName: string): Promise<string> {
        return new Promise<string>((resolve, reject) => {
            resolve("");
        })
    }



    // EFFECTS: return a random tagName from the database. If the database is empty, reject with notFoundError
    public getRandomTag(): Promise<String> {
        return new Promise<string>((resolve, reject) => {
            resolve("");
        })
    }
}
