import { Component, OnInit } from '@angular/core';

@Component({
  templateUrl: './sankey.component.html',
})
export class SankeyComponent implements OnInit {
  constructor() { }
  chartData_2D_1 = {
    yrange: 200000,
    lineData: [
      {
        label: 'Vue',
        value: 166443,
        Url: 'https://vuejs.org/',
      },
      {
        label: 'React',
        value: 150793,
        Url: 'https://reactjs.org/',
      },
      {
        label: 'Angular',
        value: 62342,
        Url: 'https://angular.io/',
      },
      {
        label: 'Backbone',
        value: 27647,
        Url: 'https://backbonejs.org/',
      },
      {
        label: 'Ember',
        value: 21471,
        Url: 'https://emberjs.com/',
      },
      {
        label: 'jQuery',
        value: 67458,
        Url: 'https://jquery.com/',
      },
      {
        label: 'Bootstrap',
        value: 12567,
        Url: 'https://getbootstrap.com/',
      },
      {
        label: 'Preact',
        value: 88372,
        Url: 'https://preactjs.com/',
      },
      {
        label: 'Svelte',
        value: 42879,
        Url: 'https://svelte.dev/',
      },
      {
        label: 'Next',
        value: 99653,
        Url: 'https://nextjs.org/',
      },
      {
        label: 'Gatsby',
        value: 74124,
        Url: 'https://www.gatsbyjs.com/',
      },
      {
        label: 'Nuxt',
        value: 30926,
        Url: 'https://nuxtjs.org/',
      },
    ],
  };
  ngOnInit(): void { }
}
