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
  selector: 'app-tree',
  templateUrl: './tree.component.html',
  styleUrls: ['./tree.component.scss'],
})
export class TreeComponent implements OnInit, AfterViewInit {
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
  ngOnChanges(changes: SimpleChanges): void {}
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

  private drawChart(data: any): void {}
}
