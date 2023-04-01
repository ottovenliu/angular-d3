import { Component, OnInit } from '@angular/core';

@Component({
  templateUrl: './line.component.html',
})
export class LineComponent implements OnInit {
  constructor() {}
  scatterData = [
    {
      date: '2018-04-14',
      value: 8140.71,
    },
    {
      date: '2018-04-15',
      value: 8338.42,
    },
    {
      date: '2018-04-16',
      value: 8371.15,
    },
    {
      date: '2018-04-17',
      value: 8285.96,
    },
    {
      date: '2018-04-18',
      value: 8197.8,
    },
    {
      date: '2018-04-19',
      value: 8298.69,
    },
    {
      date: '2018-04-20',
      value: 8880.23,
    },
    {
      date: '2018-04-21',
      value: 8997.57,
    },
    {
      date: '2018-04-22',
      value: 9001.64,
    },
    {
      date: '2018-04-23',
      value: 8958.55,
    },
  ];
  ngOnInit(): void {}
}
