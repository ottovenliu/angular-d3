import { Component, OnInit } from '@angular/core';

@Component({
  templateUrl: './bubble-map.component.html'
})
export class BubbleMapComponent implements OnInit {

  constructor() { }
  checkbox_1: string = ''
  checkbox_2: string = ''
  checkbox_3: string = ''
  selectedGroups: string[] = []
  pieData = [
    { "Framework": "Vue", "Stars": "166443", "Released": "2014" },
    { "Framework": "React", "Stars": "150793", "Released": "2013" },
    { "Framework": "Angular", "Stars": "62342", "Released": "2016" },
    { "Framework": "Backbone", "Stars": "27647", "Released": "2010" },
    { "Framework": "Ember", "Stars": "21471", "Released": "2011" },
  ]
  ngOnInit(): void {
  }
  updateList(value: string): void {
    if (!(this.selectedGroups.includes(value))) {
      this.selectedGroups = [...this.selectedGroups, value]
    } else if (!!(this.selectedGroups.includes(value))) {
      this.selectedGroups = this.selectedGroups.filter((selectedItem) => selectedItem != value)
    }
  }

}
