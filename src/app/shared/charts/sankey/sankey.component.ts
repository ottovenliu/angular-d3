import { AfterViewInit, Component, HostListener, Input, OnInit } from '@angular/core';
import * as d3 from 'd3';
import * as d3Sankey from 'd3-sankey';

import { ChartData, LineData, SankeyData } from 'src/assets/interface';
@Component({
  selector: 'app-sankey',
  templateUrl: './sankey.component.html',
  styleUrls: ['./sankey.component.scss']
})
export class SankeyComponent implements OnInit, AfterViewInit {

  constructor() { }
  rwdSvgWidth: number = 0;
  rwdSvgHeight: number = this.rwdSvgWidth * 0.8;
  private svg: any;
  private margin = 50;
  private width = 750 - this.margin * 2;
  private height = 400 - this.margin * 2;
  private colors: any;
  private sankey: any;

  @Input()
  chartName: string = 'bar';
  @Input()
  data: SankeyData = {} as SankeyData;
  @HostListener('window:resize', ['$event'])
  onResize(event: Event) {
    const target = event.target as Window
    this.rwdSvgWidth = document.querySelector('#' + this.chartName) ? document.querySelector('#' + this.chartName)!.clientWidth : 0
    this.rwdSvgHeight = this.rwdSvgWidth * 0.8;
    this.width = this.rwdSvgWidth - this.margin * 2
    this.height = this.rwdSvgHeight - this.margin * 2
    if (target.innerWidth > 310 && target.innerWidth < 400) {
      this.createSvg();
      this.drawCarts(this.data);
    } else if (target.innerWidth >= 400) {
      this.createSvg();
      this.drawCarts(this.data);
    } else { }
  }

  ngOnInit(): void { }

  ngAfterViewInit(): void {
    this.rwdSvgWidth = document.querySelector('#' + this.chartName) ? document.querySelector('#' + this.chartName)!.clientWidth : 0
    this.rwdSvgHeight = this.rwdSvgWidth * 0.8;
    this.width = this.rwdSvgWidth - this.margin * 2
    this.height = this.rwdSvgHeight - this.margin * 2
    this.createSvg();
    this.drawCarts(this.data);
  }
  private createSvg(): void {
    if (d3.select(`figure#${this.chartName} svg`)) { d3.select(`figure#${this.chartName} svg`).remove() }
    if (d3.select(`figure#${this.chartName} .tooltip`)) { d3.select(`figure#${this.chartName} .tooltip`).remove() }
    this.svg = d3
      .select(`figure#${this.chartName}`)
      .append('svg')
      .attr('width', this.width + this.margin * 2)
      .attr('height', this.height + this.margin * 2)
      .append('g')
      .attr('transform', 'translate(' + this.margin / 5 + ',' + this.margin / 5 + ')');

  }
  private drawCarts(data: any): void {
    let formatNumber = d3.format(",.0f"), // zero decimal places
      format = function (d: any) { return formatNumber(d); },
      color = d3.scaleOrdinal(d3.schemeCategory10);
    let dragmove = (d: any) => {
      console.log('d:', d)
      // var rectY = d3.select(this).select("rect").attr("y");
      // var rectX = d3.select(this).select("rect").attr("X");
      // d.y0 = d.y0 + d3.event.dy;
      // d.x1 = d.x1 + d3.event.dx;
      // d.x0 = d.x0 + d3.event.dx;
      // var yTranslate = d.y0 - rectY;
      // var xTranslate = d.x0 - rectX;
      // d3.select(this).attr('transform', "translate(" + (xTranslate) + "," + (yTranslate) + ")");
      // sankey.update(graph);
      // link.attr('d', sankeyLinkHorizontal());
    }



    // Set the sankey diagram properties
    let sankey = d3Sankey
      .sankey()
      .nodeWidth(36)
      .nodePadding(180)
      .size([this.width, this.height]);
    // Constructs a new Sankey generator with the default settings.
    let graph = sankey(data);

    // Add in the links
    this.svg
      .append("g")
      .selectAll(".link")
      .data(graph.links)
      .enter()
      .append("path")
      .attr("class", "link")
      .attr("d", d3Sankey.sankeyLinkHorizontal())
      .style("stroke-width", function (d: any) { return d.width; })
      .sort(function (a: any, b: any) { return b.dy - a.dy; });

    // Styling links
    this.svg.selectAll(".link")
      .attr("fill", "none")
      .attr("stroke", "#000")
      .attr("stroke-opacity", 0.2)
      .on('mouseover', (d: any) => {
        d3.select(d.srcElement).attr("stroke-opacity", 0.6)
      })
      .on('mouseout', (d: any) => {
        d3.select(d.srcElement).attr("stroke-opacity", 0.2)
      })




    // add in the nodes
    let node = this.svg
      .append("g")
      .selectAll(".node")
      .data(graph.nodes)
      .enter().append("g")
      .attr("class", "node");


    node.append("rect")
      .attr("x", function (d: any) { return d.x0; })
      .attr("y", function (d: any) { return d.y0; })
      .attr("height", function (d: any) { return d.y1 - d.y0; })
      .attr("width", sankey.nodeWidth())
      .style("fill", function (d: any) {
        return d.color = color(d.name.replace(/ .*/, ""));
      })
      .style("stroke", function (d: any) {
        return d3.rgb(d.color).darker(2);
      })
      .append("title")
      .text(function (d: any) {
        return d.name + "\n" + format(d.value);
      })

    // add in the title for the nodes
    node.append("text")
      .attr("x", function (d: any) { return d.x0 - 6; })
      .attr("y", function (d: any) { return (d.y1 + d.y0) / 2; })
      .attr("dy", "0.35em")
      .attr("text-anchor", "end")
      .attr("stroke-opacity", 1)
      .text((d: any) => d.name)
      .filter((d: any) => { return d.x0 < (this.width) / 2; })
      .attr("x", function (d: any) { return d.x1 + 6; });
    //事件綁定
    this.svg.selectAll(".node")
      .call(d3.drag()
        .subject(d => d)
        .on('start', (d: any) => { console.log(d); })
        .on('drag', dragmove))
      .on('click', (d: any) => {
        // window.open(d.target.__data__.Url);
        console.log('d.target.__data__:', d.target.__data__);
        console.log('d:', d);
      });
  }

}
