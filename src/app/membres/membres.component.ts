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
                image: '../../assets/gaelle-test.png',
                name: 'Mme LALLEMENT Gaëlle',
                title: 'Présidente / Communication avec la Maire',
            },
            children: [
                {
                    expanded: true,
                    type: 'person',
                    styleClass: 'bg-purple-500 text-white',
                    data: {
                        image: '../../assets/gaelle-test.png',
                        name: 'COSTY Corinne',
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
                                image: '../../assets/gaelle-test.png',
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
                        image: '../../assets/gaelle-test.png',
                        name: 'Stephen Shaw',
                        title: 'CTO'
                    },
                    children: [
                        {
                            type: 'person',
                            styleClass: 'bg-teal-500 text-white',
                            data: {
                                image: '../../assets/gaelle-test.png',
                                name: 'Stephen Shaw',
                                title: 'CTO'
                            },
                        },
                        {
                            type: 'person',
                            styleClass: 'bg-teal-500 text-white',
                            data: {
                                image: '../../assets/gaelle-test.png',
                                name: 'Stephen Shaw',
                                title: 'CTO'
                            },
                        },
                        {
                            type: 'person',
                            styleClass: 'bg-teal-500 text-white',
                            data: {
                                image: '../../assets/gaelle-test.png',
                                name: 'Stephen Shaw',
                                title: 'CTO'
                            },
                        },
                        {
                            type: 'person',
                            styleClass: 'bg-teal-500 text-white',
                            data: {
                                image: '../../assets/gaelle-test.png',
                                name: 'Stephen Shaw',
                                title: 'CTO'
                            },
                        }
                    ]
                },
                {
                    expanded: true,
                    type: 'person',
                    styleClass: 'bg-teal-500 text-white',
                    data: {
                        image: '../../assets/gaelle-test.png',
                        name: 'Stephen Shaw',
                        title: 'CTO'
                    },
                },
                {
                    expanded: true,
                    type: 'person',
                    styleClass: 'bg-teal-500 text-white',
                    data: {
                        image: '../../assets/gaelle-test.png',
                        name: 'Stephen Shaw',
                        title: 'CTO'
                    },
                },
                {
                    expanded: true,
                    type: 'person',
                    styleClass: 'bg-teal-500 text-white',
                    data: {
                        image: '../../assets/gaelle-test.png',
                        name: 'Stephen Shaw',
                        title: 'CTO'
                    },
                }
            ]
        }
    ];
}
