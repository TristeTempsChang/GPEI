export class PostListModel {
    type: string;
    title: string;
    datePost: Date;
    image: string;
    content: string;
    id: string;
    
    constructor(type: string, title: string , datePost: Date , image: string, content: string, id: string) {
      this.type = type;
      this.title = title;
      this.datePost = datePost;
      this.image = image;
      this.content = content;
      this.id = id;
    }
  }