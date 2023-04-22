export class PostListModel {
    type: string;
    title: string;
    datePost: Date;
    imageUrl: string;
    content: string;
    id: number;
    
    constructor(type: string, title: string , datePost: Date , imageUrl: string, content: string, id: number) {
      this.type = type;
      this.title = title;
      this.datePost = datePost;
      this.imageUrl = imageUrl;
      this.content = content;
      this.id = id;
    }
  }