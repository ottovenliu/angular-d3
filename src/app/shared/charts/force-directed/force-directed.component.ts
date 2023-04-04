import {
  AfterViewInit,
  Component,
  HostListener,
  Input,
  OnInit,
} from '@angular/core';
import * as d3 from 'd3';
import * as d3Sankey from 'd3-sankey';

import { ChartData, LineData, SankeyData } from 'src/assets/interface';
@Component({
  selector: 'app-force-directed',
  templateUrl: './force-directed.component.html',
  styleUrls: ['./force-directed.component.scss'],
})
export class ForceDirectedComponent implements OnInit, AfterViewInit {
  constructor() {}
  rwdSvgWidth: number = 0;
  rwdSvgHeight: number = this.rwdSvgWidth * 0.8;
  private svg: any;
  private margin = 50;
  private width = 750 - this.margin * 2;
  private height = 400 - this.margin * 2;

  @Input()
  chartName: string = 'bar';
  @Input()
  data = {};
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
      this.drawCarts(this.data);
    } else if (target.innerWidth >= 400) {
      this.createSvg();
      this.drawCarts(this.data);
    } else {
    }
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
    this.drawCarts(this.data);
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
      .attr('width', this.width + this.margin * 2)
      .attr('height', this.height + this.margin * 2)
      .append('g')
      .attr(
        'transform',
        'translate(' + this.margin / 5 + ',' + this.margin / 5 + ')'
      );
  }
  private drawCarts(data: any): void {
    // Format Lines and Notes
    const links = data.links.map((d: any) => Object.create(d));
    const nodes = data.nodes.map((d: any) => Object.create(d));
    const scale = d3.scaleOrdinal(d3.schemeCategory10);
    const color = (d: any) => scale(d.group);

    let drag = (simulation: any) => {
      function dragstarted(event: any) {
        if (!event.active) simulation.alphaTarget(0.3).restart();
        event.subject.fx = event.subject.x;
        event.subject.fy = event.subject.y;
      }

      function dragged(event: any) {
        event.subject.fx = event.x;
        event.subject.fy = event.y;
      }

      function dragended(event: any) {
        if (!event.active) simulation.alphaTarget(0);
        event.subject.fx = null;
        event.subject.fy = null;
      }

      return d3
        .drag()
        .on('start', dragstarted)
        .on('drag', dragged)
        .on('end', dragended);
    };

    const simulation = d3
      .forceSimulation(nodes)
      .force(
        'link',
        d3.forceLink(links).id((d: any) => d.id)
      )
      .force('charge', d3.forceManyBody())
      .force('center', d3.forceCenter(this.width / 2, this.height / 2));

    const link = this.svg
      .append('g')
      .attr('stroke', '#999')
      .attr('stroke-opacity', 0.6)
      .selectAll('line')
      .data(links)
      .join('line')
      .attr('stroke-width', (d: any) => Math.sqrt(d.value));

    const node = this.svg
      .append('g')
      .attr('stroke', '#fff')
      .attr('stroke-width', 1.5)
      .selectAll('circle')
      .data(nodes)
      .join('circle')
      .attr('r', 5)
      .attr('fill', color)
      .call(drag(simulation) as unknown);

    node.append('title').text((d: any) => d.id);

    simulation.on('tick', () => {
      link
        .attr('x1', (d: any) => d.source.x)
        .attr('y1', (d: any) => d.source.y)
        .attr('x2', (d: any) => d.target.x)
        .attr('y2', (d: any) => d.target.y);

      node.attr('cx', (d: any) => d.x).attr('cy', (d: any) => d.y);
    });

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
  }
}
