import { Component, OnInit } from '@angular/core';
import { MegaMenuItem, MenuItem } from 'primeng/api';
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  constructor() { }
  items: MegaMenuItem[] = [] as MegaMenuItem[];
  ngOnInit(): void {
    this.items = [
      {
        label: 'Bar', icon: 'pi pi-fw pi-chart-bar',
        items: [
          [
            {
              label: 'Bar Charts',
              items: [
                // { label: 'Video 1.1', command: () => this.addNewUser(), },
                { label: 'Bar', routerLink: "BarCharts/Bar" }
              ]
            }
          ]
        ]
      },
      {
        label: 'Pie', icon: 'pi pi-fw pi-chart-pie',
        items: [
          [
            {
              label: 'Pie Charts',
              items: [
                { label: 'Pie', routerLink: "PieCharts/Pie" }
              ]
            },

          ],
        ]
      },
    ]
  }

  addNewUser(): void {
    console.log('scuess')
  }
}
