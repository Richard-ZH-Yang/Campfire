interface Tag {
    id: string;
    tag: string;
    content: string;
    date: Date;
}

export class NotFindError extends Error {
    constructor(...args: any[]) {
        super(...args)
    }
}

class Folklore {

    public addTag(tagName: string, content: string) {

    }

    public searchTag(tagName: string) {

    }

    public getRandomContent(tagName: string) {

    }

    public getRandomTag() {

    }
}
