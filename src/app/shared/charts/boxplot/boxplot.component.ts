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
  constructor() { }
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

    // Add X axis
    const x = d3
      .scaleBand()
      .domain(['Vue', 'React', 'Angular'])
      .range([0, this.width])
      .paddingInner(1)
      .paddingOuter(.5);
    // Draw the X-axis on the DOM
    this.svg
      .append('g')
      .attr('transform', 'translate(0,' + this.height + ')')
      .call(d3.axisBottom(x));
    if (window.innerWidth < 520) {
      this.svg
        .selectAll('text')
        .attr('transform', 'translate(-10,0)rotate(-45)')
        .style('text-anchor', 'end');
    }
    const sumstat = this.data.map(
      (dataItem: any) => {
        let q1 = d3.quantile(dataItem.Stars.sort(d3.ascending), .25) || 0;
        let median = d3.quantile(dataItem.Stars.sort(d3.ascending), .5) || 0;
        let q3 = d3.quantile(dataItem.Stars.sort(d3.ascending), .75) || 0;
        let interQuantileRange = q3 - q1
        let min = Math.min(...dataItem.Stars)
        let max = Math.max(...dataItem.Stars)
        return {
          key: dataItem.Framework,
          value: { q1: q1, median: median, q3: q3, interQuantileRange: interQuantileRange, min: min, max: max }
        }
      }
    )
    sumstat
    console.log('sumstat:', sumstat)
    // Add Y axis
    const y = d3.scaleLinear().domain([0, 50]).range([this.height, 0]);
    // Draw the Y-axis on the DOM
    this.svg.append('g').call(d3.axisLeft(y));

    // Show the main vertical line
    this.svg
      .selectAll("vertLines")
      .data(sumstat)
      .enter()
      .append("line")
      .attr("x1", function (d: any) { return (x(d.key)) })
      .attr("x2", function (d: any) { return (x(d.key)) })
      .attr("y1", function (d: any) { return (y(d.value.min)) })
      .attr("y2", function (d: any) { return (y(d.value.max)) })
      .attr("stroke", "black")
      .style("width", 40)

    // rectangle for the main box
    let boxWidth = 100
    this.svg
      .selectAll("boxes")
      .data(sumstat)
      .enter()
      .append("rect")
      .attr("x", function (d: any) { return (Number(x(d.key)) - boxWidth / 2) })
      .attr("y", function (d: any) { return (y(d.value.q3)) })
      .attr("height", function (d: any) { return (y(d.value.q1) - y(d.value.q3)) })
      .attr("width", boxWidth)
      .attr("stroke", "black")
      .style("fill", "#69b3a2")
      .on('mouseover', (d: any) => {
        tooltips.style('opacity', 1);
        tooltips.style('display', 'initial');
      })
      .on('mousemove', (d: any) => {
        tooltips
          .style('left', d.layerX + 10 + 'px')
          .style('top', d.layerY + 'px')
          .html(
            d.target.__data__.key +
            '<br>' +
            'median: ' +
            d.target.__data__.value.median +
            '<br>' +
            'Q1: ' +
            d.target.__data__.value.q1 +
            '<br>' +
            'Q3: ' +
            d.target.__data__.value.q3
          );
      })
      .on('mouseout', (d: any) => {
        //設定滑鼠離開時tooltips隱藏
        tooltips.style('opacity', 0);
        tooltips.style('display', 'none');
      })
      .on('click', (d: any) => {
        console.log('d.target.__data__:', d.target.__data__);
        console.log('d:', d);
      });



    // Show the median
    this.svg
      .selectAll("medianLines")
      .data(sumstat)
      .enter()
      .append("line")
      .attr("x1", function (d: any) { return (Number(x(d.key)) - boxWidth / 2) })
      .attr("x2", function (d: any) { return (Number(x(d.key)) + boxWidth / 2) })
      .attr("y1", function (d: any) { return (y(d.value.median)) })
      .attr("y2", function (d: any) { return (y(d.value.median)) })
      .attr("stroke", "black")
      .style("width", 80);

    this.svg
      .selectAll("minLines")
      .data(sumstat)
      .enter()
      .append("line")
      .attr("x1", function (d: any) { return (Number(x(d.key)) - boxWidth / 2) })
      .attr("x2", function (d: any) { return (Number(x(d.key)) + boxWidth / 2) })
      .attr("y1", function (d: any) { return (y(d.value.min)) })
      .attr("y2", function (d: any) { return (y(d.value.min)) })
      .attr("stroke", "black")
      .style("width", 80)
      .on('mouseover', (d: any) => {
        tooltips.style('opacity', 1);
        tooltips.style('display', 'initial');
      })
      .on('mousemove', (d: any) => {
        tooltips
          .style('left', d.layerX + 10 + 'px')
          .style('top', d.layerY + 'px')
          .html(
            d.target.__data__.key +
            '<br>' +
            'min: ' +
            d.target.__data__.value.min
          );
      })
      .on('mouseout', (d: any) => {
        //設定滑鼠離開時tooltips隱藏
        tooltips.style('opacity', 0);
        tooltips.style('display', 'none');
      })
      .on('click', (d: any) => {
        console.log('d.target.__data__:', d.target.__data__);
        console.log('d:', d);
      });
    this.svg
      .selectAll("maxLines")
      .data(sumstat)
      .enter()
      .append("line")
      .attr("x1", function (d: any) { return (Number(x(d.key)) - boxWidth / 2) })
      .attr("x2", function (d: any) { return (Number(x(d.key)) + boxWidth / 2) })
      .attr("y1", function (d: any) { return (y(d.value.max)) })
      .attr("y2", function (d: any) { return (y(d.value.max)) })
      .attr("stroke", "black")
      .style("width", 80)
      .on('mouseover', (d: any) => {
        tooltips.style('opacity', 1);
        tooltips.style('display', 'initial');
      })
      .on('mousemove', (d: any) => {
        tooltips
          .style('left', d.layerX + 10 + 'px')
          .style('top', d.layerY + 'px')
          .html(
            d.target.__data__.key +
            '<br>' +
            'Max: ' +
            d.target.__data__.value.max
          );
      })
      .on('mouseout', (d: any) => {
        //設定滑鼠離開時tooltips隱藏
        tooltips.style('opacity', 0);
        tooltips.style('display', 'none');
      })
      .on('click', (d: any) => {
        console.log('d.target.__data__:', d.target.__data__);
        console.log('d:', d);
      });









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
  ngOnInit(): void { }
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
