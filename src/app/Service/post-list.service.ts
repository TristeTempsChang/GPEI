import { Injectable } from '@angular/core';
import { PostListModel } from '../Model/post-list.model';

@Injectable({
  providedIn: 'root'
})
export class PostListService {
    postlist: PostListModel[] = [
      {
        type: "FONCTIONNEMENT DE L'ÉCOLE",
        title: "La nouvelle réforme du gouvernement va considérablement vous avantager !",
        datePost: new Date(),
        imageUrl: "https://huffpost-focus.sirius.press/2022/12/29/110/0/2121/1193/1820/1023/75/0/76b5986_1672325371679-gettyimages-538397859.jpg",
        content: "Vraiment, on en parle pas assez mais starfoulilah Parcoursup ça a été inventé par des bâtards qui ne souhaite que la mort des étudiants..."
      },
      {
        type: "BIEN-ÊTRE DE L'ENFANT",
        title: "Balayer ses gosses peut être bénéfique",
        datePost: new Date(),
        imageUrl: "https://i.ytimg.com/vi/YgnjSnNJ3us/maxresdefault.jpg",
        content: "Il est grand temps de remettre au goût du jour le principe de frapper ses enfants gratuitement et sans limites, avant tout parce que c'est amusant"
      },
      {
        type: "GPEI",
        title: "Nouveauté 2023",
        datePost: new Date(),
        imageUrl: "https://metricool.com/wp-content/uploads/jason-blackeye-364785-2-1.jpg",
        content: "Comme chaque année, nous vous souhaitons de joyeuse fêtes et puis bah voilà hein. Y'avait plus d'idée pour faire du remplissage..."
      }
    ]

    getAllPostList(): PostListModel[]{
      return this.postlist;
    }

    addPostOnList(formValue: { type: string, title: string, imageUrl: string, content: string}) {
      const post: PostListModel = {
          ...formValue,
          datePost: new Date(),
      };
      this.postlist.push(post);
  }
}