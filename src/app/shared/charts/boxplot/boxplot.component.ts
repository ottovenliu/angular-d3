import {
  AfterViewInit,
  Component,
  HostListener,
  Input,
  OnInit,
} from '@angular/core';
import * as d3 from 'd3';
@Component({
  selector: 'app-boxplot',
  templateUrl: './boxplot.component.html',
  styleUrls: ['./boxplot.component.scss'],
})
export class BoxPlotComponent implements OnInit, AfterViewInit {
  rwdSvgWidth: number = 0;
  rwdSvgHeight: number = this.rwdSvgWidth * 0.8;
  constructor() {}
  @Input()
  chartName: string = 'bar';
  @Input()
  data: any = [];
  @HostListener('window:resize', ['$event'])
  onResize(event: Event) {
    const target = event.target as Window;
    this.rwdSvgWidth = document.querySelector('#' + this.chartName)
      ? document.querySelector('#' + this.chartName)!.clientWidth
      : 0;
    this.rwdSvgHeight = this.rwdSvgWidth * 0.8;
    this.width = this.rwdSvgWidth - this.margin * 2;
    this.height = this.rwdSvgHeight - this.margin * 2;
    if (target.innerWidth > 310 && target.innerWidth < 520) {
      this.createSvg();
      this.drawPlot(this.data, 5);
    } else if (target.innerWidth >= 520) {
      this.createSvg();
      this.drawPlot(this.data);
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
  private drawPlot(data: any, YAxis: number = 10): void {
    // Compute summary statistics used for the box:
    let data_sorted = data.sort(d3.ascending);
    let q1 = d3.quantile(data_sorted, 0.25) || 0;
    let median = d3.quantile(data_sorted, 0.5) || 0;
    let q3 = d3.quantile(data_sorted, 0.75) || 0;
    let interQuantileRange = q3 - q1;
    let min = q1 - 1.5 * interQuantileRange;
    let max = q1 + 1.5 * interQuantileRange;
    let center = 200;
    let width = 100;
    // Show the Y scale
    var y = d3.scaleLinear().domain([0, 24]).range([this.height, 0]);
    this.svg.call(d3.axisLeft(y));

    // Show the main vertical line
    this.svg
      .append('line')
      .attr('x1', center)
      .attr('x2', center)
      .attr('y1', y(min))
      .attr('y2', y(max))
      .attr('stroke', 'black');

    // Show the box
    this.svg
      .append('rect')
      .attr('x', center - width / 2)
      .attr('y', y(q3))
      .attr('height', y(q1) - y(q3))
      .attr('width', width)
      .attr('stroke', 'black')
      .style('fill', '#69b3a2');

    // show median, min and max horizontal lines
    this.svg
      .selectAll('toto')
      .data([min, median, max])
      .enter()
      .append('line')
      .attr('x1', center - width / 2)
      .attr('x2', center + width / 2)
      .attr('y1', (d: any) => {
        return y(d);
      })
      .attr('y2', (d: any) => {
        return y(d);
      })
      .attr('stroke', 'black');

    // 建立tooltips
    // const tooltips = d3
    //   .select(`figure#${this.chartName}`)
    //   .append('div')
    //   .style('opacity', 0)
    //   .style('position', 'absolute')
    //   .attr('class', 'tooltip')
    //   .style('background-color', 'white')
    //   .style('color', 'black')
    //   .style('border', 'solid')
    //   .style('border-width', '2px')
    //   .style('border-radius', '5px')
    //   .style('padding', '5px');

    // Add dots
    // const dots = this.svg.append('g');
    // dots
    //   .selectAll('dot')
    //   .data(data)
    //   .enter()
    //   .append('circle')
    //   .attr('cx', (d: any) => x(d.Released))
    //   .attr('cy', (d: any) => y(d.Stars))
    //   .attr('r', 7)
    //   .attr('class', 'point')
    //   .style('opacity', 0.5)
    //   .style('fill', '#69b3a2')
    //   .on('mouseover', (d: any) => {
    //     tooltips.style('opacity', 1);
    //     tooltips.style('display', 'initial');
    //   })
    //   .on('mousemove', (d: any) => {
    //     tooltips
    //       .style('left', d.layerX + 10 + 'px')
    //       .style('top', d.layerY + 'px')
    //       .html(
    //         d.target.__data__.Framework +
    //           '<br>' +
    //           'Stars: ' +
    //           d.target.__data__.Stars +
    //           '<br>' +
    //           'Released: ' +
    //           d.target.__data__.Released
    //       );
    //   })
    //   .on('mouseout', (d: any) => {
    //     //設定滑鼠離開時tooltips隱藏
    //     tooltips.style('opacity', 0);
    //     tooltips.style('display', 'none');
    //   })
    //   .on('click', (d: any) => {
    //     // window.open(d.target.__data__.Url);
    //     console.log('d.target.__data__:', d.target.__data__);
    //     console.log('d:', d);
    //   });
    // if (window.innerWidth < 520) {
    //   dots.selectAll('.point').attr('r', 3);
    // }

    // Add labels
    // dots
    //   .selectAll('text')
    //   .data(this.data)
    //   .enter()
    //   .append('text')
    //   .attr('class', 'label')
    //   .text((d: any) => d.Framework)
    //   .attr('x', (d: any) => x(d.Released))
    //   .attr('y', (d: any) => y(d.Stars))
    //   .on('mouseover', (d: any) => {
    //     tooltips.style('opacity', 1);
    //     tooltips.style('display', 'initial');
    //   })
    //   .on('mousemove', (d: any) => {
    //     tooltips
    //       .style('left', d.layerX + 10 + 'px')
    //       .style('top', d.layerY + 'px')
    //       .html(
    //         d.target.__data__.Framework +
    //           '<br>' +
    //           'Stars: ' +
    //           d.target.__data__.Stars +
    //           '<br>' +
    //           'Released: ' +
    //           d.target.__data__.Released
    //       );
    //   })
    //   .on('mouseout', (d: any) => {
    //     //設定滑鼠離開時tooltips隱藏
    //     tooltips.style('opacity', 0);
    //     tooltips.style('display', 'none');
    //   })
    //   .on('click', (d: any) => {
    //     // window.open(d.target.__data__.Url);
    //     console.log('d.target.__data__:', d.target.__data__);
    //     console.log('d:', d);
    //   });
    // if (window.innerWidth < 520) {
    //   this.svg.selectAll('.label').style('font-size', '2vw');
    // }
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
    this.drawPlot(this.data);
  }
}
