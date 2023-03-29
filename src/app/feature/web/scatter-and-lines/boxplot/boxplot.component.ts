import { Component, OnInit } from '@angular/core';

@Component({
  templateUrl: './boxplot.component.html',
})
export class BoxPlotComponent implements OnInit {
  constructor() { }
  BoxPlotData = [
    { "Framework": "Vue", "Stars": [37, 42, 8, 25, 1, 18, 44, 33, 12, 49] },
    { "Framework": "React", "Stars": [23, 4, 2, 47, 48, 31, 28, 19, 9, 28] },
    { "Framework": "Angular", "Stars": [36, 10, 35, 6, 22, 21, 44, 15, 17, 3] },
  ]
  ngOnInit(): void { }
}
