import { Component } from '@angular/core';
import { TreeNode } from 'primeng/api';

@Component({
  selector: 'app-membres',
  templateUrl: './membres.component.html',
  styleUrls: ['./membres.component.scss']
})
export class MembresComponent {
    data: TreeNode[] = [
        {
            expanded: true,
            type: 'person',
            styleClass: 'blue-bg',
            data: {
                image: 'G',
                name: 'Mme LALLEMENT Gaëlle',
                title: '- Présidente / Communication avec la Mairie',
            },
            children: [
                {
                    expanded: true,
                    type: 'person',
                    styleClass: 'bg-purple-500 text-white',
                    data: {
                        image: 'C',
                        name: 'Mme COSTY Corinne',
                        title: '- Vice-présidente',
                        title2: '- Secrétaire',
                        title3: '- Elue du lycée'
                    },
                    children: [
                        {
                            expanded: true,
                            type: 'person',
                            styleClass: 'bg-purple-500 text-white',
                            data: {
                                image: 'C',
                                name: 'BUQUET Celine',
                                title: '- Responsable niveau 2nd'
                            }
                        }
                    ]
                },
                {
                    expanded: true,
                    type: 'person',
                    styleClass: 'bg-teal-500 text-white',
                    data: {
                        image: 'A',
                        name: 'Mme Aurélie LANDOLFI',
                        title: '- Vice-présidente',
                        title2: '- Elue du Collège'
                    },
                    children: [
                        {
                            type: 'person',
                            styleClass: 'bg-teal-500 text-white',
                            data: {
                                image: 'M',
                                name: 'Mme TABORET Marina',
                                title: '- Elue à la Maternelle Les Myrtilles'
                            },
                        },
                        {
                            type: 'person',
                            styleClass: 'bg-teal-500 text-white',
                            data: {
                                image: 'A',
                                name: 'Mme QUINQUET Aurélie',
                                title: "- Elue à l'Elémentaire des Myrtilles"
                            },
                        },
                        {
                            type: 'person',
                            styleClass: 'bg-teal-500 text-white',
                            data: {
                                image: 'E',
                                name: 'Mme ALPHONSI Estelle',
                                title: '- Elue à La Jeannotte Maternelle'
                            },
                        },
                        {
                            type: 'person',
                            styleClass: 'bg-teal-500 text-white',
                            data: {
                                image: 'N',
                                name: 'Mme HAMIMED Nasserine',
                                title: '- Elue à La Jeannotte Elémentaire'
                            },
                        },
                        {
                            type: 'person',
                            styleClass: 'bg-teal-500 text-white',
                            data: {
                                image: 'C',
                                name: 'Mme BLEMUS Cathy',
                                title: '- Responsable niveau 6ème'
                            },
                        },
                        {
                            type: 'person',
                            styleClass: 'bg-teal-500 text-white',
                            data: {
                                image: 'F',
                                name: 'Mme LOIRAT Florence',
                                title: '- Responsable niveau 5ème'
                            },
                        },
                        {
                            type: 'person',
                            styleClass: 'bg-teal-500 text-white',
                            data: {
                                image: 'B',
                                name: 'M BELGACEM Brahim',
                                title: '- Responsable niveau 4ème'
                            },
                        },
                        {
                            type: 'person',
                            styleClass: 'bg-teal-500 text-white',
                            data: {
                                image: 'A',
                                name: 'Mme FERRE Anne',
                                title: '- Responsable niveau 3ème'
                            },
                        }
                    ]
                },
                {
                    expanded: true,
                    type: 'person',
                    styleClass: 'bg-teal-500 text-white',
                    data: {
                        image: 'F',
                        name: 'Mme DELALANDRE Fallone',
                        title: '- Trésorière'
                    },
                },
                {
                    expanded: true,
                    type: 'person',
                    styleClass: 'bg-teal-500 text-white',
                    data: {
                        image: 'C',
                        name: 'M. BOUTIN Clément',
                        title: '- Représentant à la commission des Menus de Mennecy'
                    },
                },
                {
                    expanded: true,
                    type: 'person',
                    styleClass: 'bg-teal-500 text-white',
                    data: {
                        image: 'J',
                        name: 'M. Jean PORCHET',
                        title: '- Communication digitale'
                    },
                }
            ]
        }
    ];
}
