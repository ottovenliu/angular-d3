import { Component, OnInit } from '@angular/core';
import { MegaMenuItem, MenuItem } from 'primeng/api';
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {
  constructor() {}
  items: MegaMenuItem[] = [] as MegaMenuItem[];
  ngOnInit(): void {
    this.items = [
      {
        label: 'Bar',
        icon: 'pi pi-fw pi-chart-bar',
        items: [
          [
            {
              label: 'Bar Charts',
              items: [
                // { label: 'Video 1.1', command: () => this.addNewUser(), },
                { label: 'Bar', routerLink: 'BarCharts/Bar' },
              ],
            },
          ],
        ],
      },
      {
        label: 'Pie',
        icon: 'pi pi-fw pi-chart-pie',
        items: [
          [
            {
              label: 'Pie Charts',
              items: [{ label: 'Pie', routerLink: 'PieCharts/Pie' }],
            },
          ],
        ],
      },
      {
        label: 'Heat Maps',
        icon: 'pi pi-fw pi-microsoft',
        items: [
          [
            {
              label: 'Heat Maps',
              items: [{ label: 'Calendar', routerLink: 'HeatMaps/Calendar' }],
            },
          ],
        ],
      },
      {
        label: 'Scatter And Lines',
        icon: 'pi pi-fw pi-chart-line',
        items: [
          [
            {
              label: 'Scatter Charts',
              items: [
                {
                  label: 'Scatter Chart',
                  routerLink: 'ScatterAndLines/Scatter',
                },
                {
                  label: 'Box-Plot Chart',
                  routerLink: 'ScatterAndLines/BoxPlot',
                },
              ],
            },
          ],
          [
            {
              label: 'Line Charts',
              items: [
                { label: 'Line Chart', routerLink: 'ScatterAndLines/Line' },
              ],
            },
          ],
        ],
      },
      {
        label: 'Maps',
        icon: 'pi pi-fw pi-map',
        items: [
          [
            {
              label: 'Maps',
              items: [
                { label: 'BubbleMap', routerLink: 'Maps/BubbleMap' },
                { label: 'TreeMap', routerLink: 'Maps/TreeMap' },
              ],
            },
          ],
        ],
      },
      {
        label: 'Nets',
        icon: 'pi pi-fw fas fa-circle-nodes',
        items: [
          [
            {
              label: 'Nets',
              items: [
                { label: 'Sankey', routerLink: 'Nets/Sankey' },
                { label: ' Force-Directed', routerLink: 'Nets/ForceDirected' },
              ],
            },
          ],
        ],
      },
    ];
  }

  addNewUser(): void {
    console.log('scuess');
  }
}
