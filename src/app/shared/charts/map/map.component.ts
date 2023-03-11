import {
  AfterViewInit,
  Component,
  HostListener,
  Input,
  OnInit,
  SimpleChanges,
} from '@angular/core';
import * as d3 from 'd3';
@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.scss'],
})
export class MapComponent implements OnInit, AfterViewInit {
  rwdSvgWidth: number = 0;
  rwdSvgHeight: number = this.rwdSvgWidth * 0.8;
  constructor() {}
  @Input()
  chartName: string = 'bar';
  @Input()
  data: any = [];
  @Input()
  selectedGroups: string[] = [];
  @HostListener('window:resize', ['$event'])
  onResize(event: Event) {
    const target = event.target as Window;
    this.rwdSvgWidth = document.querySelector('#' + this.chartName)
      ? document.querySelector('#' + this.chartName)!.clientWidth
      : 0;
    this.rwdSvgHeight = this.rwdSvgWidth;
    this.width = this.rwdSvgWidth;
    this.height = this.rwdSvgHeight;
    this.radius = Math.min(this.width, this.height) / 2;
    if (target.innerWidth > 310 && target.innerWidth < 400) {
      this.createSvg();
      this.drawChart(this.data);
    } else if (target.innerWidth >= 400) {
      this.createSvg();
      this.drawChart(this.data);
    } else {
    }
  }

  private svg: any;
  private margin = 50;
  private width = 750 - this.margin * 2;
  private height = 750 - this.margin * 2;
  // The radius of the pie chart is half the smallest side
  private radius = Math.min(this.width, this.height) / 2;
  private colors: any;
  private previousGroups: string[] = [];
  ngOnChanges(changes: SimpleChanges): void {
    if (
      changes['selectedGroups'] &&
      changes['selectedGroups'].currentValue &&
      !changes['selectedGroups'].firstChange
    ) {
      this.update(this.selectedGroups);
    }
    if (
      changes['selectedGroups'] &&
      changes['selectedGroups'].currentValue &&
      changes['selectedGroups'].firstChange
    ) {
      this.previousGroups = this.selectedGroups;
      console.log('this.previousGroups ', this.previousGroups);
    }
  }
  ngOnInit(): void {
    this.previousGroups;
  }
  ngAfterViewInit(): void {
    this.rwdSvgWidth = document.querySelector('#' + this.chartName)
      ? document.querySelector('#' + this.chartName)!.clientWidth
      : 0;
    this.rwdSvgHeight = this.rwdSvgWidth;
    this.width = this.rwdSvgWidth - this.margin * 2;
    this.height = this.rwdSvgHeight - this.margin * 2;
    this.radius = Math.min(this.width, this.height) / 2;
    this.createSvg();
    this.createColors();
    this.drawChart(this.data);
  }

  private createSvg(): void {
    if (d3.select(`figure#${this.chartName} svg`)) {
      d3.select(`figure#${this.chartName} svg`).remove();
    }
    if (d3.select(`figure#${this.chartName} .tooltip`)) {
      d3.select(`figure#${this.chartName} .tooltip`).remove();
    }

    this.svg = d3
      .select(`figure#${this.chartName}`)
      .append('svg')
      .attr('width', this.width)
      .attr('height', this.height);
  }
  private createColors(): void {
    this.colors = d3
      .scaleOrdinal()
      .domain(['A', 'B', 'C'])
      .range(['#402D54', '#D18975', '#8FD175']);
  }
  private drawChart(data: any): void {
    // Create data for circles:
    const markers = [
      { long: 9.083, lat: 42.149, group: 'A', size: 34, Name: 'Corsica' }, // corsica
      { long: 7.26, lat: 43.71, group: 'A', size: 14, Name: 'nice' }, // nice
      { long: 2.349, lat: 48.864, group: 'B', size: 87, Name: 'Paris' }, // Paris
      { long: -1.397, lat: 43.664, group: 'B', size: 41, Name: 'Hossegor' }, // Hossegor
      { long: 3.075, lat: 50.64, group: 'C', size: 78, Name: 'Lille' }, // Lille
      { long: -3.83, lat: 58, group: 'C', size: 12, Name: 'Morlaix' }, // Morlaix
    ];
    // Map and projection
    const projection = d3
      .geoMercator()
      .center([2, 47]) // GPS of location to zoom on
      .scale(1020) // This is like the zoom
      .translate([this.width / 2, this.height / 2]);
    d3.json(
      'https://raw.githubusercontent.com/holtzy/D3-graph-gallery/master/DATA/world.geojson'
    ).then((data: any) => {
      // Filter data
      data.features = data.features.filter(
        (d: any) => d.properties.name == 'France'
      );

      // Create a color scale
      const color = d3
        .scaleOrdinal()
        .domain(['A', 'B', 'C'])
        .range(['#402D54', '#D18975', '#8FD175']);

      // Add a scale for bubble size
      const size = d3
        .scaleLinear()
        .domain([1, 100]) // What's in the data
        .range([4, 50]); // Size in pixel

      // Draw the map
      this.svg
        .append('g')
        .selectAll('path')
        .data(data.features)
        .join('path')
        .attr('fill', '#b8b8b8')
        .attr('d', d3.geoPath().projection(projection))
        .style('stroke', 'black')
        .style('opacity', 0.3);

      // Add circles:
      this.svg
        .selectAll('myCircles')
        .data(markers)
        .join('circle')
        .attr('class', (d: any) => d.group)
        .attr('cx', (d: any) => projection([d.long, d.lat])![0])
        .attr('cy', (d: any) => projection([d.long, d.lat])![1])
        .attr('r', (d: any) => size(d.size))
        .style('fill', (d: any) => color(d.group))
        .attr('stroke', (d: any) => color(d.group))
        .attr('stroke-width', 3)
        .attr('fill-opacity', 0.4);
      // 建立tooltips
      const tooltips = d3
        .select(`figure#${this.chartName}`)
        .append('div')
        .style('opacity', 0)
        .style('position', 'absolute')
        .attr('class', 'tooltip')
        .style('background-color', 'white')
        .style('color', 'black')
        .style('border', 'solid')
        .style('border-width', '2px')
        .style('border-radius', '5px')
        .style('padding', '5px');

      this.svg
        .on('mouseover', (d: any) => {
          if (d.srcElement.tagName === 'circle') {
            tooltips.style('opacity', 1);
            tooltips.style('display', 'initial');
            d3.select(d.srcElement).attr('fill', 'red');
          }
        })
        .on('mousemove', (d: any) => {
          if (d.srcElement.tagName === 'circle') {
            tooltips
              .style('left', d.layerX + 10 + 'px')
              .style('top', d.layerY + 'px')
              .html(
                'Group:' +
                  d.target.__data__.group +
                  '<br>' +
                  'City:' +
                  d.target.__data__.Name
              );
          }
        })
        .on('mouseout', (d: any) => {
          //設定滑鼠離開時tooltips隱藏
          if (d.srcElement.tagName === 'circle') {
            d3.select(d.srcElement).attr('fill', '#d04a35');
          }
          tooltips.style('opacity', 0);
          tooltips.style('display', 'none');
        })
        .on('click', (d: any) => {
          // window.open(d.target.__data__.Url);
          console.log('d.target.__data__:', d.target.__data__);
          console.log('d:', d);
        });
    });
  }
  private update(selectedGroups: string[]): void {
    // For each check box:
    const addCheck = selectedGroups.filter(
      (Item) => !this.previousGroups.includes(Item)
    );
    const removeCheck = this.previousGroups.filter(
      (Item) => !selectedGroups.includes(Item)
    );
    console.log('removeCheck', removeCheck);
    console.log('addCheck', addCheck);

    if (removeCheck.length) {
      removeCheck.forEach((selectedItem: string) => {
        console.log('removeCheckselectedItem', selectedItem);
        console.log('svg', this.svg.selectAll('.' + selectedItem));
        this.svg.selectAll('.' + selectedItem).style('opacity', 0);
      });
    }

    if (addCheck.length) {
      addCheck.forEach((selectedItem: string) => {
        console.log('addCheckselectedItem', selectedItem);
        this.svg
          .selectAll('.' + selectedItem)
          .transition()
          .duration(1000)
          .style('opacity', 1);
      });
    }
    this.previousGroups = selectedGroups;
    console.log('previous', this.previousGroups);

    // // If the box is check, I show the group
    // if (cb.property("checked")) {
    //   svg.selectAll("." + grp).transition().duration(1000).style("opacity", 1).attr("r", function (d) { return size(d.size) })

    //   // Otherwise I hide it
    // } else {
    //   svg.selectAll("." + grp).transition().duration(1000).style("opacity", 0).attr("r", 0)
    // }
  }
}
