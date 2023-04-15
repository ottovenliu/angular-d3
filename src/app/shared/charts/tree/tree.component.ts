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
  data: any;
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
  private treemap = d3.tree().size([this.height, this.width]);
  // The radius of the pie chart is half the smallest side
  private radius = Math.min(this.width, this.height) / 2;
  ngOnChanges(changes: SimpleChanges): void {}
  ngOnInit(): void {}
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
      .attr('height', this.height)
      .append('g')
      .attr('transform', 'translate(' + 350 + ',' + 20 + ')');
  }

  private drawChart(data: any, duration: number = 750, i = 0): void {
    let root: any = d3.hierarchy(data, (d: any) => d.children);
    root.x0 = this.height / 2;
    root.y0 = 0;
    // Collapse after the second level
    root.children.forEach(collapse);
    function collapse(d: any) {
      if (d.children) {
        d._children = d.children;
        d._children.forEach(collapse);
        d.children = null;
      }
    }
    this.update(root, this.svg, duration);

    console.log(data);
  }
  // Toggle children on click.
  click(event: any, d: any, duration: number = 750) {
    console.log(duration);
    console.log(d);
    console.log(event);
    if (d.children) {
      d._children = d.children;
      d.children = null;
    } else {
      d.children = d._children;
      d._children = null;
    }
    this.update(d, this.svg, duration);
  }
  update(source: any, svg: any, duration: number) {
    // Assigns the x and y position for the nodes
    var treeData = this.treemap(source);

    // Compute the new tree layout.
    var nodes = treeData.descendants(),
      links = treeData.descendants().slice(1);

    // Normalize for fixed-depth.
    nodes.forEach(function (d) {
      d.y = d.depth * 180;
    });

    // ****************** Nodes section ***************************

    // Update the nodes...
    var node = this.svg.selectAll('g.node').data(nodes, (d: any, i: any) => {
      return d.id || (d.id = ++i);
    });

    // Enter any new modes at the parent's previous position.
    var nodeEnter = node
      .enter()
      .append('g')
      .attr('class', 'node')
      .attr('transform', (d: any) => {
        return 'translate(' + source.y0 + ',' + source.x0 + ')';
      })
      .on('click', this.click);

    // Add Circle for the nodes
    nodeEnter
      .append('circle')
      .attr('class', 'node')
      .attr('r', 1e-6)
      .style('fill', (d: any) => {
        return d._children ? 'lightsteelblue' : '#fff';
      });

    // Add labels for the nodes
    nodeEnter
      .append('text')
      .attr('dy', '.35em')
      .attr('x', (d: any) => {
        return d.children || d._children ? -13 : 13;
      })
      .attr('text-anchor', (d: any) => {
        return d.children || d._children ? 'end' : 'start';
      })
      .text((d: any) => {
        return d.data.name;
      });

    // UPDATE
    var nodeUpdate = nodeEnter.merge(node);

    // Transition to the proper position for the node
    nodeUpdate
      .transition()
      .duration(duration)
      .attr('transform', (d: any) => {
        return 'translate(' + d.y + ',' + d.x + ')';
      });

    // Update the node attributes and style
    nodeUpdate
      .select('circle.node')
      .attr('r', 10)
      .style('fill', (d: any) => {
        return d._children ? 'lightsteelblue' : '#fff';
      })
      .attr('cursor', 'pointer');

    // Remove any exiting nodes
    var nodeExit = node
      .exit()
      .transition()
      .duration(duration)
      .attr('transform', (d: any) => {
        return 'translate(' + source.y + ',' + source.x + ')';
      })
      .remove();

    // On exit reduce the node circles size to 0
    nodeExit.select('circle').attr('r', 1e-6);

    // On exit reduce the opacity of text labels
    nodeExit.select('text').style('fill-opacity', 1e-6);

    // ****************** links section ***************************

    // Update the links...
    var link = svg.selectAll('path.link').data(links, (d: any) => {
      return d.id;
    });

    // Enter any new links at the parent's previous position.
    var linkEnter = link
      .enter()
      .insert('path', 'g')
      .attr('class', 'link')
      .attr('d', (d: any) => {
        var o = { x: source.x0, y: source.y0 };
        return diagonal(o, o);
      });

    // UPDATE
    var linkUpdate = linkEnter.merge(link);

    // Transition back to the parent element position
    linkUpdate
      .transition()
      .duration(duration)
      .attr('d', (d: any) => {
        return diagonal(d, d.parent);
      });

    // Remove any exiting links
    var linkExit = link
      .exit()
      .transition()
      .duration(duration)
      .attr('d', (d: any) => {
        var o = { x: source.x, y: source.y };
        return diagonal(o, o);
      })
      .remove();

    // Store the old positions for transition.
    nodes.forEach((d: any) => {
      d.x0 = d.x;
      d.y0 = d.y;
    });

    // Creates a curved (diagonal) path from parent to the child nodes
    function diagonal(s: any, d: any) {
      let path = `M ${s.y} ${s.x}
              C ${(s.y + d.y) / 2} ${s.x},
                ${(s.y + d.y) / 2} ${d.x},
                ${d.y} ${d.x}`;

      return path;
    }
  }
}
