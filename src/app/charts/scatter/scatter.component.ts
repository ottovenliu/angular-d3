import { AfterViewInit, Component, HostListener, Input, OnInit } from '@angular/core';
import * as d3 from 'd3';
@Component({
  selector: 'app-scatter',
  templateUrl: './scatter.component.html',
  styleUrls: ['./scatter.component.scss']
})
export class ScatterComponent implements OnInit, AfterViewInit {
  rwdSvgWidth: number = 0;
  rwdSvgHeight: number = this.rwdSvgWidth * 0.8;
  constructor() { }
  @Input()
  chartName: string = 'bar';
  @Input()
  data: any = []
  @HostListener('window:resize', ['$event'])
  onResize(event: Event) {
    const target = event.target as Window
    this.rwdSvgWidth = document.querySelector('#' + this.chartName) ? document.querySelector('#' + this.chartName)!.clientWidth : 0
    this.rwdSvgHeight = this.rwdSvgWidth * 0.8;
    this.width = this.rwdSvgWidth - this.margin * 2
    this.height = this.rwdSvgHeight - this.margin * 2
    if (target.innerWidth > 310 && target.innerWidth < 520) {
      this.createSvg();
      this.drawPlot(this.data, 5);
    } else if (target.innerWidth >= 520) {
      this.createSvg();
      this.drawPlot(this.data);
    } else { }
  }
  private svg: any;
  private margin = 50;
  private width = 750 - (this.margin * 2);
  private height = 400 - (this.margin * 2);
  private createSvg(): void {
    if (d3.select(`figure#${this.chartName} svg`)) { d3.select(`figure#${this.chartName} svg`).remove() }
    this.svg = d3.select(`figure#${this.chartName}`)
      .append("svg")
      .attr("width", this.width + (this.margin * 2))
      .attr("height", this.height + (this.margin * 2))
      .append("g")
      .attr("transform", "translate(" + this.margin + "," + this.margin + ")");
  }
  private drawPlot(data: any, YAxis: number = 10): void {
    // Add X axis
    const x = d3.scaleLinear()
      .domain([2009, 2017])
      .range([0, this.width]);
    // Draw the X-axis on the DOM
    this.svg.append("g")
      .attr("transform", "translate(0," + this.height + ")")
      .call(d3.axisBottom(x).tickFormat(d3.format("d")));
    if (window.innerWidth < 520) {
      this.svg.selectAll('text')
        .attr('transform', 'translate(-10,0)rotate(-45)')
        .style('text-anchor', 'end');
    }
    // Add Y axis
    const y = d3.scaleLinear()
      .domain([0, 200000])
      .range([this.height, 0]);
    // Draw the Y-axis on the DOM
    this.svg.append("g")
      .call(d3.axisLeft(y).ticks(YAxis));

    // Add dots
    const dots = this.svg.append('g');
    dots.selectAll("dot")
      .data(data)
      .enter()
      .append("circle")
      .attr("cx", (d: any) => x(d.Released))
      .attr("cy", (d: any) => y(d.Stars))
      .attr("r", 7)
      .attr("class", "point")
      .style("opacity", .5)
      .style("fill", "#69b3a2");
    if (window.innerWidth < 520) {
      dots.selectAll('.point')
        .attr("r", 3)
    }
    // Add labels
    dots.selectAll("text")
      .data(this.data)
      .enter()
      .append("text")
      .attr("class", "label")
      .text((d: any) => d.Framework)
      .attr("x", (d: any) => x(d.Released))
      .attr("y", (d: any) => y(d.Stars))
      .style("fill", "#fff");
    if (window.innerWidth < 520) {
      this.svg
        .selectAll('.label')
        .style("font-size", '2vw');
    }
  }
  ngOnInit(): void {
  }
  ngAfterViewInit(): void {
    this.rwdSvgWidth = document.querySelector('#' + this.chartName) ? document.querySelector('#' + this.chartName)!.clientWidth : 0
    this.rwdSvgHeight = this.rwdSvgWidth * 0.8;
    this.width = this.rwdSvgWidth - this.margin * 2
    this.height = this.rwdSvgHeight - this.margin * 2
    this.createSvg();
    this.drawPlot(this.data);
  }
}
