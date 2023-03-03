import { AfterViewInit, Component, HostListener, Input, OnInit } from '@angular/core';

import * as d3 from 'd3';
import { ChartData, LineData } from 'src/assets/interface';
@Component({
  selector: 'app-bar2',
  templateUrl: './bar2.component.html',
  styleUrls: ['./bar2.component.scss']
})

export class Bar2Component implements AfterViewInit {
  rwdSvgWidth: number = 0;
  rwdSvgHeight: number = this.rwdSvgWidth * 0.8;
  constructor() { }
  @Input()
  chartName: string = 'bar';
  @Input()
  data: ChartData = {} as ChartData;
  @HostListener('window:resize', ['$event'])
  onResize(event: Event) {
    const target = event.target as Window
    this.rwdSvgWidth = document.querySelector('#' + this.chartName) ? document.querySelector('#' + this.chartName)!.clientWidth : 0
    this.rwdSvgHeight = this.rwdSvgWidth * 0.8;
    this.width = this.rwdSvgWidth - this.margin * 2
    this.height = this.rwdSvgHeight - this.margin * 2
    if (target.innerWidth > 310 && target.innerWidth < 400) {
      this.createSvg();
      this.drawBars(this.data, 5);
    } else if (target.innerWidth >= 400) {
      this.createSvg();
      this.drawBars(this.data);
    } else { }
  }


  private svg: any;
  private margin = 50;
  private width = 750 - this.margin * 2;
  private height = 400 - this.margin * 2;
  private createSvg(): void {
    if (d3.select(`figure#${this.chartName} svg`)) { d3.select(`figure#${this.chartName} svg`).remove() }
    this.svg = d3
      .select(`figure#${this.chartName}`)
      .append('svg')
      .attr('width', this.width + this.margin * 2)
      .attr('height', this.height + this.margin * 2)
      .append('g')
      .attr('transform', 'translate(' + this.margin + ',' + this.margin + ')');


  }
  private drawBars(data: ChartData, YAxis: number = 10): void {
    // Create the X-axis band scale
    const x = d3
      .scaleBand()
      .range([0, this.width])
      .domain(data.lineData.map((d: LineData) => d.label))
      .padding(0.2);

    // Draw the X-axis on the DOM
    this.svg
      .append('g')
      .attr('transform', 'translate(0,' + this.height + ')')
      .call(d3.axisBottom(x))
      .selectAll('text')
      .attr('transform', 'translate(-10,0)rotate(-45)')
      .style('text-anchor', 'end');

    // Create the Y-axis band scale
    const y = d3.scaleLinear().domain([0, data.yrange]).range([this.height, 0]);

    // Draw the Y-axis on the DOM

    this.svg.append('g').call(d3.axisLeft(y).ticks(YAxis));


    // Create and fill the bars
    this.svg
      .selectAll('bars')
      .data(data.lineData)
      .enter()
      .append('rect')
      .attr('x', (d: LineData) => x(d.label))
      .attr('y', (d: LineData) => y(d.value))
      .attr('width', x.bandwidth())
      .attr('height', (d: any) => this.height - y(d.value))
      .attr('fill', '#d04a35');


    // 建立tooltips
    const tooltips = d3.select(`figure#${this.chartName}`)
      .append("div")
      .style("opacity", 0)
      .style('position', 'absolute')
      .attr("class", "tooltip")
      .style("background-color", "white")
      .style("color", "black")
      .style("border", "solid")
      .style("border-width", "2px")
      .style("border-radius", "5px")
      .style("padding", "5px")

    this.svg.on('mouseover', (d: any) => {
      if (d.srcElement.tagName === 'rect') {
        tooltips.style("opacity", 1)
        d3.select(d.srcElement).attr("fill", "red")
      }
    })
      .on('mousemove', (d: any) => {
        if (d.srcElement.tagName === 'rect') {
          tooltips
            .style("left", d.pageX + 15 + "px")
            .style("top", d.pageY - 25 + "px")
            .text(d.target.__data__.label + '：' + d.target.__data__.value);
        }
      })
      .on('mouseout', (d: any) => { //設定滑鼠離開時tooltips隱藏
        if (d.srcElement.tagName === 'rect') {
          d3.select(d.srcElement).attr("fill", '#d04a35')
        }
        tooltips.style("opacity", 0)
      })
      .on('click', (d: any) => {
        // window.open(d.target.__data__.Url);
        console.log('d.target.__data__:', d.target.__data__)
        console.log('d:', d)

      });
  }

  ngOnInit(): void {
  }
  ngAfterViewInit(): void {
    this.rwdSvgWidth = document.querySelector('#' + this.chartName) ? document.querySelector('#' + this.chartName)!.clientWidth : 0
    this.rwdSvgHeight = this.rwdSvgWidth * 0.8;
    this.width = this.rwdSvgWidth - this.margin * 2
    this.height = this.rwdSvgHeight - this.margin * 2
    this.createSvg();
    this.drawBars(this.data);
  }

}
