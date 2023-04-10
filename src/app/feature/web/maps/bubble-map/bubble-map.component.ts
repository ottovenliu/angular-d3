import { Component, OnInit } from '@angular/core';

@Component({
  templateUrl: './bubble-map.component.html',
})
export class BubbleMapComponent implements OnInit {
  constructor() {}
  checkbox_1: string = '';
  checkbox_2: string = '';
  checkbox_3: string = '';
  selectedGroups: string[] = ['A', 'B', 'C'];
  pieData = [];
  ngOnInit(): void {}
  updateList(value: string): void {
    if (!this.selectedGroups.includes(value)) {
      this.selectedGroups = [...this.selectedGroups, value];
    } else if (!!this.selectedGroups.includes(value)) {
      this.selectedGroups = this.selectedGroups.filter(
        (selectedItem) => selectedItem != value
      );
    }
  }
}
