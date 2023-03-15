import { Component, OnInit } from '@angular/core';

@Component({
  templateUrl: './sankey.component.html',
})
export class SankeyComponent implements OnInit {
  constructor() { }
  chartData_2D_1 = {
    "nodes": [
      {
        "node": 0,
        "name": "node0"
      },
      {
        "node": 1,
        "name": "node1"
      },
      {
        "node": 2,
        "name": "node2"
      },
      {
        "node": 3,
        "name": "node3"
      },
      {
        "node": 4,
        "name": "node4"
      }
    ],
    "links": [
      {
        "source": 0,
        "target": 2,
        "value": 2
      },
      {
        "source": 1,
        "target": 2,
        "value": 2
      },
      {
        "source": 1,
        "target": 3,
        "value": 2
      },
      {
        "source": 0,
        "target": 4,
        "value": 2
      },
      {
        "source": 2,
        "target": 3,
        "value": 2
      },
      {
        "source": 2,
        "target": 4,
        "value": 2
      },
      {
        "source": 3,
        "target": 4,
        "value": 4
      }
    ]
  };
  ngOnInit(): void { }
}
