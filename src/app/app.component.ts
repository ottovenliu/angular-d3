import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'angular-d3';
  chartData_2D_1 = {
    yrange: 200000,
    lineData: [
      {
        label: 'Vue',
        value: 166443,
        Url: 'https://vuejs.org/'
      },
      {
        label: 'React',
        value: 150793,
        Url: 'https://reactjs.org/'
      },
      {
        label: 'Angular',
        value: 62342,
        Url: 'https://angular.io/'
      },
      {
        label: 'Backbone',
        value: 27647,
        Url: 'https://backbonejs.org/'
      },
      {
        label: 'Ember',
        value: 21471,
        Url: 'https://emberjs.com/'
      },
      {
        label: 'jQuery',
        value: 67458,
        Url: 'https://jquery.com/'
      },
      {
        label: 'Bootstrap',
        value: 12567,
        Url: 'https://getbootstrap.com/'
      },
      {
        label: 'Preact',
        value: 88372,
        Url: 'https://preactjs.com/'
      },
      {
        label: 'Svelte',
        value: 42879,
        Url: 'https://svelte.dev/'
      },
      {
        label: 'Next',
        value: 99653,
        Url: 'https://nextjs.org/'
      },
      {
        label: 'Gatsby',
        value: 74124,
        Url: 'https://www.gatsbyjs.com/'
      },
      {
        label: 'Nuxt',
        value: 30926,
        Url: 'https://nuxtjs.org/'
      }
    ]
  };
  calendarRange = [0, 10]
  calendarData = [
    { 'group': 'Monday', 'variable': '10:00', 'value': Math.floor(Math.random() * 10) },
    { 'group': 'Monday', 'variable': '11:00', 'value': Math.floor(Math.random() * 10) },
    { 'group': 'Monday', 'variable': '12:00', 'value': Math.floor(Math.random() * 10) },
    { 'group': 'Monday', 'variable': '13:00', 'value': Math.floor(Math.random() * 10) },
    { 'group': 'Monday', 'variable': '14:00', 'value': Math.floor(Math.random() * 10) },
    { 'group': 'Monday', 'variable': '15:00', 'value': Math.floor(Math.random() * 10) },
    { 'group': 'Monday', 'variable': '16:00', 'value': Math.floor(Math.random() * 10) },
    { 'group': 'Monday', 'variable': '17:00', 'value': Math.floor(Math.random() * 10) },
    { 'group': 'Monday', 'variable': '18:00', 'value': Math.floor(Math.random() * 10) },
    { 'group': 'Monday', 'variable': '19:00', 'value': Math.floor(Math.random() * 10) },

    { 'group': 'Tuesday', 'variable': '10:00', 'value': Math.floor(Math.random() * 10) },
    { 'group': 'Tuesday', 'variable': '11:00', 'value': Math.floor(Math.random() * 10) },
    { 'group': 'Tuesday', 'variable': '12:00', 'value': Math.floor(Math.random() * 10) },
    { 'group': 'Tuesday', 'variable': '13:00', 'value': Math.floor(Math.random() * 10) },
    { 'group': 'Tuesday', 'variable': '14:00', 'value': Math.floor(Math.random() * 10) },
    { 'group': 'Tuesday', 'variable': '15:00', 'value': Math.floor(Math.random() * 10) },
    { 'group': 'Tuesday', 'variable': '16:00', 'value': Math.floor(Math.random() * 10) },
    { 'group': 'Tuesday', 'variable': '17:00', 'value': Math.floor(Math.random() * 10) },
    { 'group': 'Tuesday', 'variable': '18:00', 'value': Math.floor(Math.random() * 10) },
    { 'group': 'Tuesday', 'variable': '19:00', 'value': Math.floor(Math.random() * 10) },

    { 'group': 'Wednesday', 'variable': '10:00', 'value': Math.floor(Math.random() * 10) },
    { 'group': 'Wednesday', 'variable': '11:00', 'value': Math.floor(Math.random() * 10) },
    { 'group': 'Wednesday', 'variable': '12:00', 'value': Math.floor(Math.random() * 10) },
    { 'group': 'Wednesday', 'variable': '13:00', 'value': Math.floor(Math.random() * 10) },
    { 'group': 'Wednesday', 'variable': '14:00', 'value': Math.floor(Math.random() * 10) },
    { 'group': 'Wednesday', 'variable': '15:00', 'value': Math.floor(Math.random() * 10) },
    { 'group': 'Wednesday', 'variable': '16:00', 'value': Math.floor(Math.random() * 10) },
    { 'group': 'Wednesday', 'variable': '17:00', 'value': Math.floor(Math.random() * 10) },
    { 'group': 'Wednesday', 'variable': '18:00', 'value': Math.floor(Math.random() * 10) },
    { 'group': 'Wednesday', 'variable': '19:00', 'value': Math.floor(Math.random() * 10) },

    { 'group': 'Thursday', 'variable': '10:00', 'value': Math.floor(Math.random() * 10) },
    { 'group': 'Thursday', 'variable': '11:00', 'value': Math.floor(Math.random() * 10) },
    { 'group': 'Thursday', 'variable': '12:00', 'value': Math.floor(Math.random() * 10) },
    { 'group': 'Thursday', 'variable': '13:00', 'value': Math.floor(Math.random() * 10) },
    { 'group': 'Thursday', 'variable': '14:00', 'value': Math.floor(Math.random() * 10) },
    { 'group': 'Thursday', 'variable': '15:00', 'value': Math.floor(Math.random() * 10) },
    { 'group': 'Thursday', 'variable': '16:00', 'value': Math.floor(Math.random() * 10) },
    { 'group': 'Thursday', 'variable': '17:00', 'value': Math.floor(Math.random() * 10) },
    { 'group': 'Thursday', 'variable': '18:00', 'value': Math.floor(Math.random() * 10) },
    { 'group': 'Thursday', 'variable': '19:00', 'value': Math.floor(Math.random() * 10) },

    { 'group': 'Friday', 'variable': '10:00', 'value': Math.floor(Math.random() * 10) },
    { 'group': 'Friday', 'variable': '11:00', 'value': Math.floor(Math.random() * 10) },
    { 'group': 'Friday', 'variable': '12:00', 'value': Math.floor(Math.random() * 10) },
    { 'group': 'Friday', 'variable': '13:00', 'value': Math.floor(Math.random() * 10) },
    { 'group': 'Friday', 'variable': '14:00', 'value': Math.floor(Math.random() * 10) },
    { 'group': 'Friday', 'variable': '15:00', 'value': Math.floor(Math.random() * 10) },
    { 'group': 'Friday', 'variable': '16:00', 'value': Math.floor(Math.random() * 10) },
    { 'group': 'Friday', 'variable': '17:00', 'value': Math.floor(Math.random() * 10) },
    { 'group': 'Friday', 'variable': '18:00', 'value': Math.floor(Math.random() * 10) },
    { 'group': 'Friday', 'variable': '19:00', 'value': Math.floor(Math.random() * 10) },

    { 'group': 'Saturday', 'variable': '10:00', 'value': Math.floor(Math.random() * 10) },
    { 'group': 'Saturday', 'variable': '11:00', 'value': Math.floor(Math.random() * 10) },
    { 'group': 'Saturday', 'variable': '12:00', 'value': Math.floor(Math.random() * 10) },
    { 'group': 'Saturday', 'variable': '13:00', 'value': Math.floor(Math.random() * 10) },
    { 'group': 'Saturday', 'variable': '14:00', 'value': Math.floor(Math.random() * 10) },
    { 'group': 'Saturday', 'variable': '15:00', 'value': Math.floor(Math.random() * 10) },
    { 'group': 'Saturday', 'variable': '16:00', 'value': Math.floor(Math.random() * 10) },
    { 'group': 'Saturday', 'variable': '17:00', 'value': Math.floor(Math.random() * 10) },
    { 'group': 'Saturday', 'variable': '18:00', 'value': Math.floor(Math.random() * 10) },
    { 'group': 'Saturday', 'variable': '19:00', 'value': Math.floor(Math.random() * 10) },

    { 'group': 'Sunday', 'variable': '10:00', 'value': Math.floor(Math.random() * 10) },
    { 'group': 'Sunday', 'variable': '11:00', 'value': Math.floor(Math.random() * 10) },
    { 'group': 'Sunday', 'variable': '12:00', 'value': Math.floor(Math.random() * 10) },
    { 'group': 'Sunday', 'variable': '13:00', 'value': Math.floor(Math.random() * 10) },
    { 'group': 'Sunday', 'variable': '14:00', 'value': Math.floor(Math.random() * 10) },
    { 'group': 'Sunday', 'variable': '15:00', 'value': Math.floor(Math.random() * 10) },
    { 'group': 'Sunday', 'variable': '16:00', 'value': Math.floor(Math.random() * 10) },
    { 'group': 'Sunday', 'variable': '17:00', 'value': Math.floor(Math.random() * 10) },
    { 'group': 'Sunday', 'variable': '18:00', 'value': Math.floor(Math.random() * 10) },
    { 'group': 'Sunday', 'variable': '19:00', 'value': Math.floor(Math.random() * 10) },

  ];
  pieData = [
    { "Framework": "Vue", "Stars": "166443", "Released": "2014" },
    { "Framework": "React", "Stars": "150793", "Released": "2013" },
    { "Framework": "Angular", "Stars": "62342", "Released": "2016" },
    { "Framework": "Backbone", "Stars": "27647", "Released": "2010" },
    { "Framework": "Ember", "Stars": "21471", "Released": "2011" },
  ]
}
