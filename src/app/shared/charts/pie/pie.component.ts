import { AfterViewInit, Component, HostListener, Input, OnInit } from '@angular/core';
import * as d3 from 'd3';
@Component({
  selector: 'app-pie',
  templateUrl: './pie.component.html',
  styleUrls: ['./pie.component.scss']
})
export class PieComponent implements OnInit, AfterViewInit {
  rwdSvgWidth: number = 0;
  rwdSvgHeight: number = this.rwdSvgWidth * 0.8;
  constructor() { }
  @Input()
  chartName: string = 'bar';
  @Input()
  data: any = [];
  @HostListener('window:resize', ['$event'])
  onResize(event: Event) {
    const target = event.target as Window
    this.rwdSvgWidth = document.querySelector('#' + this.chartName) ? document.querySelector('#' + this.chartName)!.clientWidth : 0
    this.rwdSvgHeight = this.rwdSvgWidth;
    this.width = this.rwdSvgWidth
    this.height = this.rwdSvgHeight
    this.radius = Math.min(this.width, this.height) / 2;
    if (target.innerWidth > 310 && target.innerWidth < 400) {
      this.createSvg();
      this.drawChart(this.data);
    } else if (target.innerWidth >= 400) {
      this.createSvg();
      this.drawChart(this.data);
    } else { }
  }

  private svg: any;
  private margin = 50;
  private width = 750 - this.margin * 2;
  private height = 750 - this.margin * 2;
  // The radius of the pie chart is half the smallest side
  private radius = Math.min(this.width, this.height) / 2;
  private colors: any;
  private createSvg(): void {
    if (d3.select(`figure#${this.chartName} svg`)) { d3.select(`figure#${this.chartName} svg`).remove() }
    this.svg = d3
      .select(`figure#${this.chartName}`)
      .append('svg')
      .attr('width', this.width + this.margin * 2)
      .attr('height', this.height + this.margin * 2)
      .append('g')
      .attr('transform', "translate(" + this.width / 2 + "," + this.height / 2 + ")");
  }
  private createColors(): void {
    this.colors = d3.scaleOrdinal()
      .domain(this.data.map((d: any) => d.Stars.toString()))
      .range(["#c7d3ec", "#a5b8db", "#879cc4", "#677795", "#5a6782"]);
  }
  private drawChart(data: any): void {
    // Compute the position of each group on the pie:
    const pie = d3.pie<any>().value((d: any) => Number(d.Stars));

    // Build the pie chart
    this.svg
      .selectAll('pieces')
      .data(pie(data))
      .enter()
      .append('path')
      .attr('d', d3.arc()
        .innerRadius(0)
        .outerRadius(this.radius)
      )
      .attr('fill', (d: any, i: any) => (this.colors(i)))
      .attr("stroke", "#121926")
      .style("stroke-width", "1px")
      .on('mouseover', (d: any) => {
        tooltips.style("opacity", 1)
        tooltips.style('display', 'initial');
      })
      .on('mousemove', (d: any) => {
        tooltips
          .style("left", d.layerX + 10 + "px")
          .style("top", d.layerY + "px")
          .html(d.target.__data__.data.Framework + '<br>'
            + 'Stars: ' + d.target.__data__.data.Stars + '<br>'
            + 'Released: ' + d.target.__data__.data.Released);

      })
      .on('mouseout', (d: any) => { //設定滑鼠離開時tooltips隱藏
        tooltips.style("opacity", 0)
        tooltips.style('display', 'none');
      })
      .on('click', (d: any) => {
        // window.open(d.target.__data__.Url);
        console.log('d.target.__data__:', d.target.__data__)
        console.log('d:', d)

      });






    // Add labels
    const labelLocation = d3.arc()
      .innerRadius(100)
      .outerRadius(this.radius);

    this.svg
      .selectAll('pieces')
      .data(pie(data))
      .enter()
      .append('text')
      .text((d: any) => d.data.Framework)
      .attr("class", "label")
      .attr("transform", (d: any) => "translate(" + labelLocation.centroid(d) + ")")
      .style("text-anchor", "middle")
      .style("font-size", 15);






    if (window.innerWidth < 520) {
      this.svg
        .selectAll('.label')
        .attr("transform", (d: any) => "translate(" + labelLocation.centroid(d) + ")")
        .style("font-size", '2vw');
    }


    //創建tooltips
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
  }

  ngOnInit(): void { }
  ngAfterViewInit(): void {
    this.rwdSvgWidth = document.querySelector('#' + this.chartName) ? document.querySelector('#' + this.chartName)!.clientWidth : 0
    this.rwdSvgHeight = this.rwdSvgWidth
    this.width = this.rwdSvgWidth - this.margin * 2
    this.height = this.rwdSvgHeight - this.margin * 2
    this.radius = Math.min(this.width, this.height) / 2;
    this.createSvg();
    this.createColors();
    this.drawChart(this.data);
  }
}
