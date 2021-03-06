import {Component,OnInit,AfterViewInit} from '@angular/core';
import {TimeslotService, Timeslot} from '../mytuttee/timeslot.service';
import { ROUTER_DIRECTIVES } from '@angular/router';
import {ReviewService} from './review.service'
import {PaginatePipe, PaginationControlsCmp, PaginationService} from 'ng2-pagination';

@Component({
	selector: 'history',
	templateUrl: './app/mytuttee/history.component.html',
	styleUrls: ['./app/mytuttee/history.component.css'],
	directives:[ROUTER_DIRECTIVES,PaginationControlsCmp],
	pipes: [PaginatePipe],
    providers: [PaginationService,TimeslotService,ReviewService]
})


export class HistoryComponent {
	Timeslots : Timeslot[];
	rating: Number;
	text: string;
	constructor(private _timeslotservice:TimeslotService, private _reviewservice:ReviewService
	) {}

	getTimeSlots() {
		
		this._timeslotservice.getTimeslot().subscribe(data => {
			// console.log(data.appointments);
			console.log(data);
			let slots = data.appointments;
			console.log(slots);
			for (let i = 0; i < slots.length; i++) {
				slots[i].timeslot.start_time = Date.parse(slots[i].timeslot.start_time);
				slots[i].timeslot.end_time = Date.parse(slots[i].timeslot.end_time);
			}
			this.Timeslots = slots.filter(item => item.timeslot.start_time < Date.now())
			.sort((a,b) => a.start_time>b.start_time?-1:1);
			
			if (this.Timeslots.length == 0) {
			this.Timeslots = null;
			}

			console.log(this.Timeslots);

			setTimeout(function() {
			$('.modal-trigger').leanModal();
			console.log ('modal triggered');
		 }, 500);
		}
			, err => console.log(err));

	}

	postComment(timeslot_id:Number) {
		this._timeslotservice.getTimeslotByID(timeslot_id).subscribe(data =>
		{
			console.log(data);
			this._reviewservice.postReview(this.rating,data.course_id,data.tutor_id,this.text)
			.subscribe(re => {
				console.log (re);
			},
			err => console.log(err));
		});
	}

	ngOnInit() {
		this.getTimeSlots();
	}

}