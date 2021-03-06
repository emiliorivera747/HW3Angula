import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {PARecord} from '../_models/PARecord';
import {NotificationService} from '../_services/notification.service';


@Component({
  // tslint:disable-next-line:component-selector
  selector: 'parecord-component',
  templateUrl: './parecord.component.html',
  styleUrls: ['./parecord.component.css']
})
export class ParecordComponent implements OnInit {
  @Input() parecord: PARecord;
  @Output() deleteEvent = new EventEmitter<Date>();

   mode = 'determinate';

   bufferValue = 0;

   activities = ['directions_walk', 'directions_run', 'directions_bike'];

   colors = ['primary', 'accent', 'warn', 'warning', 'surface'];
   color = this.colors[Math.floor(Math.random() * Math.floor(this.colors.length))];

   activity = this.activities[0];
   calprogressvalue = 0;
   minprogressvalue = 0;

  constructor(private notifService: NotificationService) { }

  delete(date) {
    this.deleteEvent.emit(date);
  }

  notImplemented(message) {

    this.notifService.notImplementedWarning(message);
  }

  ngOnInit() {
    this.activity = this.activities[this.parecord.activityType];
    this.calprogressvalue = Math.floor(this.parecord.calories / this.parecord.caloriegoal * 100);
    this.minprogressvalue = Math.floor(this.parecord.minutes / this.parecord.minutegoal * 100);
  }


}
