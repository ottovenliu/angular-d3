import { Component, OnInit } from '@angular/core';

@Component({
  templateUrl: './calendar.component.html'
})
export class CalendarComponent implements OnInit {

  constructor() { }
  calendarRange = [0, 10]
  calendarData = [
    { 'group': 'Monday', 'variable': '10:00', 'value': Math.floor(Math.random() * 10) },
    { 'group': 'Monday', 'variable': '11:00', 'value': Math.floor(Math.random() * 10) },
    { 'group': 'Monday', 'variable': '12:00', 'value': Math.floor(Math.random() * 10) },
    { 'group': 'Monday', 'variable': '13:00', 'value': Math.floor(Math.random() * 10) },
    { 'group': 'Monday', 'variable': '14:00', 'value': Math.floor(Math.random() * 10) },
    { 'group': 'Monday', 'variable': '15:00', 'value': Math.floor(Math.random() * 10) },
    { 'group': 'Monday', 'variable': '16:00', 'value': Math.floor(Math.random() * 10) },
    { 'group': 'Monday', 'variable': '17:00', 'value': Math.floor(Math.random() * 10) },
    { 'group': 'Monday', 'variable': '18:00', 'value': Math.floor(Math.random() * 10) },
    { 'group': 'Monday', 'variable': '19:00', 'value': Math.floor(Math.random() * 10) },

    { 'group': 'Tuesday', 'variable': '10:00', 'value': Math.floor(Math.random() * 10) },
    { 'group': 'Tuesday', 'variable': '11:00', 'value': Math.floor(Math.random() * 10) },
    { 'group': 'Tuesday', 'variable': '12:00', 'value': Math.floor(Math.random() * 10) },
    { 'group': 'Tuesday', 'variable': '13:00', 'value': Math.floor(Math.random() * 10) },
    { 'group': 'Tuesday', 'variable': '14:00', 'value': Math.floor(Math.random() * 10) },
    { 'group': 'Tuesday', 'variable': '15:00', 'value': Math.floor(Math.random() * 10) },
    { 'group': 'Tuesday', 'variable': '16:00', 'value': Math.floor(Math.random() * 10) },
    { 'group': 'Tuesday', 'variable': '17:00', 'value': Math.floor(Math.random() * 10) },
    { 'group': 'Tuesday', 'variable': '18:00', 'value': Math.floor(Math.random() * 10) },
    { 'group': 'Tuesday', 'variable': '19:00', 'value': Math.floor(Math.random() * 10) },

    { 'group': 'Wednesday', 'variable': '10:00', 'value': Math.floor(Math.random() * 10) },
    { 'group': 'Wednesday', 'variable': '11:00', 'value': Math.floor(Math.random() * 10) },
    { 'group': 'Wednesday', 'variable': '12:00', 'value': Math.floor(Math.random() * 10) },
    { 'group': 'Wednesday', 'variable': '13:00', 'value': Math.floor(Math.random() * 10) },
    { 'group': 'Wednesday', 'variable': '14:00', 'value': Math.floor(Math.random() * 10) },
    { 'group': 'Wednesday', 'variable': '15:00', 'value': Math.floor(Math.random() * 10) },
    { 'group': 'Wednesday', 'variable': '16:00', 'value': Math.floor(Math.random() * 10) },
    { 'group': 'Wednesday', 'variable': '17:00', 'value': Math.floor(Math.random() * 10) },
    { 'group': 'Wednesday', 'variable': '18:00', 'value': Math.floor(Math.random() * 10) },
    { 'group': 'Wednesday', 'variable': '19:00', 'value': Math.floor(Math.random() * 10) },

    { 'group': 'Thursday', 'variable': '10:00', 'value': Math.floor(Math.random() * 10) },
    { 'group': 'Thursday', 'variable': '11:00', 'value': Math.floor(Math.random() * 10) },
    { 'group': 'Thursday', 'variable': '12:00', 'value': Math.floor(Math.random() * 10) },
    { 'group': 'Thursday', 'variable': '13:00', 'value': Math.floor(Math.random() * 10) },
    { 'group': 'Thursday', 'variable': '14:00', 'value': Math.floor(Math.random() * 10) },
    { 'group': 'Thursday', 'variable': '15:00', 'value': Math.floor(Math.random() * 10) },
    { 'group': 'Thursday', 'variable': '16:00', 'value': Math.floor(Math.random() * 10) },
    { 'group': 'Thursday', 'variable': '17:00', 'value': Math.floor(Math.random() * 10) },
    { 'group': 'Thursday', 'variable': '18:00', 'value': Math.floor(Math.random() * 10) },
    { 'group': 'Thursday', 'variable': '19:00', 'value': Math.floor(Math.random() * 10) },

    { 'group': 'Friday', 'variable': '10:00', 'value': Math.floor(Math.random() * 10) },
    { 'group': 'Friday', 'variable': '11:00', 'value': Math.floor(Math.random() * 10) },
    { 'group': 'Friday', 'variable': '12:00', 'value': Math.floor(Math.random() * 10) },
    { 'group': 'Friday', 'variable': '13:00', 'value': Math.floor(Math.random() * 10) },
    { 'group': 'Friday', 'variable': '14:00', 'value': Math.floor(Math.random() * 10) },
    { 'group': 'Friday', 'variable': '15:00', 'value': Math.floor(Math.random() * 10) },
    { 'group': 'Friday', 'variable': '16:00', 'value': Math.floor(Math.random() * 10) },
    { 'group': 'Friday', 'variable': '17:00', 'value': Math.floor(Math.random() * 10) },
    { 'group': 'Friday', 'variable': '18:00', 'value': Math.floor(Math.random() * 10) },
    { 'group': 'Friday', 'variable': '19:00', 'value': Math.floor(Math.random() * 10) },

    { 'group': 'Saturday', 'variable': '10:00', 'value': Math.floor(Math.random() * 10) },
    { 'group': 'Saturday', 'variable': '11:00', 'value': Math.floor(Math.random() * 10) },
    { 'group': 'Saturday', 'variable': '12:00', 'value': Math.floor(Math.random() * 10) },
    { 'group': 'Saturday', 'variable': '13:00', 'value': Math.floor(Math.random() * 10) },
    { 'group': 'Saturday', 'variable': '14:00', 'value': Math.floor(Math.random() * 10) },
    { 'group': 'Saturday', 'variable': '15:00', 'value': Math.floor(Math.random() * 10) },
    { 'group': 'Saturday', 'variable': '16:00', 'value': Math.floor(Math.random() * 10) },
    { 'group': 'Saturday', 'variable': '17:00', 'value': Math.floor(Math.random() * 10) },
    { 'group': 'Saturday', 'variable': '18:00', 'value': Math.floor(Math.random() * 10) },
    { 'group': 'Saturday', 'variable': '19:00', 'value': Math.floor(Math.random() * 10) },

    { 'group': 'Sunday', 'variable': '10:00', 'value': Math.floor(Math.random() * 10) },
    { 'group': 'Sunday', 'variable': '11:00', 'value': Math.floor(Math.random() * 10) },
    { 'group': 'Sunday', 'variable': '12:00', 'value': Math.floor(Math.random() * 10) },
    { 'group': 'Sunday', 'variable': '13:00', 'value': Math.floor(Math.random() * 10) },
    { 'group': 'Sunday', 'variable': '14:00', 'value': Math.floor(Math.random() * 10) },
    { 'group': 'Sunday', 'variable': '15:00', 'value': Math.floor(Math.random() * 10) },
    { 'group': 'Sunday', 'variable': '16:00', 'value': Math.floor(Math.random() * 10) },
    { 'group': 'Sunday', 'variable': '17:00', 'value': Math.floor(Math.random() * 10) },
    { 'group': 'Sunday', 'variable': '18:00', 'value': Math.floor(Math.random() * 10) },
    { 'group': 'Sunday', 'variable': '19:00', 'value': Math.floor(Math.random() * 10) },

  ];
  ngOnInit(): void {
  }

}
