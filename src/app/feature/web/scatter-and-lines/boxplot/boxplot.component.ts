import { Component, OnInit } from '@angular/core';

@Component({
  templateUrl: './boxplot.component.html',
})
export class BoxPlotComponent implements OnInit {
  constructor() { }
  // BoxPlotData = [12, 19, 11, 13, 12, 22, 13, 4, 15, 16, 18, 19, 20, 12, 11, 9];
  BoxPlotData = [
    { "Framework": "Vue", "Stars": [5, 45, 37, 31, 30, 4, 15, 23, 26, 27, 49, 9, 46, 14, 32, 7, 25, 28, 42, 21] },
    { "Framework": "React", "Stars": [30, 22, 9, 39, 15, 38, 3, 40, 26, 45, 37, 7, 18, 44, 46, 14, 6, 49, 35, 19] },
    { "Framework": "Angular", "Stars": [13, 33, 28, 17, 25, 41, 20, 14, 24, 39, 25, 10, 16, 9, 41, 31, 18, 49, 6, 34] },
  ]
  ngOnInit(): void { }
}
