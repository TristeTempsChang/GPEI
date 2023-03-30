import { Injectable } from '@angular/core';
import { PostListModel } from '../Model/post-list.model';

@Injectable({
  providedIn: 'root'
})
export class PostListService {
    postlist: PostListModel[] = [
      {
        type: "FONCTIONNEMENT DE L'ÉCOLE",
        title: "Comment la nouvelle réforme",
        datePost: new Date(),
        imageUrl: "https://www.fcpe.asso.fr/sites/default/files/styles/contenu_liste/public/article/iStock-1186533653.jpg?itok=57vVZs8Y",
        content: "Vraiment, on en parle pas assez mais starfoulilah Parcoursup ça a été inventé par des bâtards qui ne souhaite que la mort des étudiants..."
      },
      {
        type: "BIEN-ÊTRE DE L'ENFANT",
        title: "Balayer ses gosses peut être bénéfique",
        datePost: new Date(),
        imageUrl: "https://www.fcpe.asso.fr/sites/default/files/styles/contenu_liste/public/article/InfogFCPEParcourssup.jpg?itok=xsY_f2EW",
        content: "Il est grand temps de remettre au goût du jour le principe de frapper ses enfants gratuitement et sans limites, avant tout parce que c'est amusant"
      },
      {
        type: "GPEI",
        title: "Nouveauté 2023",
        datePost: new Date(),
        imageUrl: "https://www.fcpe.asso.fr/sites/default/files/styles/contenu_liste/public/article/iStock-172270432.jpg?itok=kiUDc2HV",
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