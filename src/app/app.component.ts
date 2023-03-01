import { Component } from '@angular/core';
import { ChartData } from './bar2/interface';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'angular-d3';
  chartData_2D_1: ChartData = {
    yrange: 200000,
    lineData: [
      { label: 'Vue', value: 166443 },
      { label: 'React', value: 150793 },
      { label: 'Angular', value: 62342 },
      { label: 'Backbone', value: 27647 },
      { label: 'Ember', value: 21471 },
      { label: 'jQuery', value: 67458 },
      { label: 'Bootstrap', value: 12567 },
      { label: 'Preact', value: 88372 },
      { label: 'Svelte', value: 42879 },
      { label: 'Next', value: 99653 },
      { label: 'Gatsby', value: 74124 },
      { label: 'Nuxt', value: 30926 },
    ],
  };
}
