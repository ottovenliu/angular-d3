import { Component, OnInit } from '@angular/core';

@Component({
  templateUrl: './boxplot.component.html',
})
export class BoxPlotComponent implements OnInit {
  constructor() {}
  BoxPlotData = [12, 19, 11, 13, 12, 22, 13, 4, 15, 16, 18, 19, 20, 12, 11, 9];
  ngOnInit(): void {}
}
