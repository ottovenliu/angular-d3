import {
  AfterViewInit,
  Component,
  HostListener,
  Input,
  OnInit,
} from '@angular/core';
import * as d3 from 'd3';
import { HeatMapData } from 'src/assets/interface';
@Component({
  selector: 'app-heat-map',
  templateUrl: './heat-map.component.html',
  styleUrls: ['./heat-map.component.scss'],
})
export class HeatMapComponent implements OnInit {
  rwdSvgWidth: number = 0;
  rwdSvgHeight: number = this.rwdSvgWidth * 0.8;
  constructor() {}
  @Input()
  chartName: string = 'bar';
  @Input()
  data = {};
  @Input()
  range = [0, 100];
  @HostListener('window:resize', ['$event'])
  onResize(event: Event) {
    const target = event.target as Window;
    this.rwdSvgWidth = document.querySelector('#' + this.chartName)
      ? document.querySelector('#' + this.chartName)!.clientWidth
      : 0;
    this.rwdSvgHeight = this.rwdSvgWidth * 0.8;
    this.width = this.rwdSvgWidth - this.margin * 2;
    this.height = this.rwdSvgHeight - this.margin * 2;
    if (target.innerWidth > 310 && target.innerWidth < 400) {
      this.createSvg();
      this.drawHeatMap(this.data);
    } else if (target.innerWidth >= 400) {
      this.createSvg();
      this.drawHeatMap(this.data);
    } else {
    }
  }

  private svg: any;
  private margin = 50;
  private width = 750 - this.margin * 2;
  private height = 400 - this.margin * 2;
  private createSvg(): void {
    if (d3.select(`figure#${this.chartName} svg`)) {
      d3.select(`figure#${this.chartName} svg`).remove();
    }
    this.svg = d3
      .select(`figure#${this.chartName}`)
      .append('svg')
      .attr('width', this.width + this.margin * 2)
      .attr('height', this.height + this.margin * 2)
      .append('g')
      .attr('transform', 'translate(' + this.margin + ',' + this.margin + ')');
  }
  private drawHeatMap(data: any, YAxis: number = 10): void {
    // Create the X-axis band scale
    const x = d3
      .scaleBand()
      .range([0, this.width])
      .domain(Array.from(new Set(data.map((d: any) => d.group))))
      .padding(0.05);

    // Draw the X-axis on the DOM
    this.svg
      .append('g')
      .style('font-size', 15)
      .attr('transform', 'translate(0,' + this.height + ')')
      .call(d3.axisBottom(x).tickSize(0))
      .selectAll('text')
      .attr('class', 'label');

    if (window.innerWidth < 520) {
      this.svg
        .selectAll('text')
        .attr('transform', 'translate(-10,0)rotate(-45)')
        .style('text-anchor', 'end')
        .style('font-size', '2vw')
        .attr('class', 'label');
    }
    // Create the Y-axis band scale
    const y = d3
      .scaleBand()
      .range([this.height, 0])
      .domain(Array.from(new Set(data.map((d: any) => d.variable))))
      .padding(0.05);

    // Draw the Y-axis on the DOM

    this.svg
      .append('g')
      // .style("font-size", 15)
      .call(d3.axisLeft(y).tickSize(0))
      .selectAll('text')
      .attr('class', 'label');

    // Build color scale
    const myColor = d3
      .scaleLinear<string, number>()
      .range(['#333', '#69b3a2'])
      .domain(this.range);

    // Add the squares
    this.svg
      .selectAll()
      .data(data, (d: HeatMapData) => {
        return d.group + ':' + d.variable;
      })
      .join('rect')
      .attr('x', (d: HeatMapData) => {
        return x(d.group);
      })
      .attr('y', (d: HeatMapData) => {
        return y(d.variable);
      })
      .attr('rx', 4)
      .attr('ry', 4)
      .attr('width', x.bandwidth())
      .attr('height', y.bandwidth())
      .style('fill', (d: HeatMapData) => {
        return myColor(d.value);
      })
      .style('stroke-width', 4)
      .style('stroke', 'none')
      .style('opacity', 0.8);

    this.svg
      .selectAll('.label')
      .data(data)
      .enter()
      .append('g')
      .attr('class', 'label')
      .attr('transform', 'translate(10,15)')
      .append('text')
      .attr('x', (d: HeatMapData) => x(d.group))
      .attr('y', (d: HeatMapData) => y(d.variable))
      .attr('dy', '.35em')
      .text((d: HeatMapData) => d.value);
    if (window.innerWidth < 520) {
      this.svg
        .selectAll('.label')
        .style('font-size', '2vw')
        .attr('transform', 'translate(5,5)');
    }
    this.svg.selectAll('.domain').remove();
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
        tooltips.style('opacity', 1);
      })
      .on('mousemove', (d: any) => {
        tooltips
          .style('left', d.layerX + 15 + 'px')
          .style('top', d.layerY - 25 + 'px')
          .text('熱點次數:' + d.target.__data__.value);
      })
      .on('mouseout', (d: any) => {
        //設定滑鼠離開時tooltips隱藏
        tooltips.style('opacity', 0);
      })
      .on('click', (d: any) => {
        console.log('d:', d);
        console.log('d.target.__data__:', d.target.__data__);
      });
  }

  ngOnInit(): void {}
  ngAfterViewInit(): void {
    this.rwdSvgWidth = document.querySelector('#' + this.chartName)
      ? document.querySelector('#' + this.chartName)!.clientWidth
      : 0;
    this.rwdSvgHeight = this.rwdSvgWidth * 0.8;
    this.width = this.rwdSvgWidth - this.margin * 2;
    this.height = this.rwdSvgHeight - this.margin * 2;
    this.createSvg();
    this.drawHeatMap(this.data);
  }
}
