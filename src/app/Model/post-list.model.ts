export class PostListModel {
    type: string;
    title: string;
    datePost: Date;
    imageUrl: string;
    content: string;
    
    constructor(type: string, title: string , datePost: Date , imageUrl: string, content: string) {
      this.type = type;
      this.title = title;
      this.datePost = datePost;
      this.imageUrl = imageUrl;
      this.content = content;
    }
  }