export class PostData {
    constructor(
        public title: string,
        public content: string
    ) {}
}

export class Post extends PostData {
    constructor( public id: string, title: string, content: string ) {
        super(title, content);
    }
}