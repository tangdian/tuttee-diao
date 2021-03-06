// import { Injectable } from '@angular/core';
// import {TUTPROFILES} from './mock-tutprofile'
// import {HTTP_PROVIDERS,Http,Headers} from '@angular/http';
import { Injectable } from '@angular/core'
import {HTTP_PROVIDERS, Http, Headers, URLSearchParams} from '@angular/http';
import {TokenService} from '../services/token.service'


export interface Reviews {
	id: number;
	rating: number;
	text: string;
	timestamp: Date;
}

export interface Courses {
	id: string;
	name: string;
	number: number;
	reviews: Reviews[];
}

export interface Timeslots {
  address: string,
  capacity: number,
  course: number,
  course_id: number,
  current_apps: number,
  end_time: Date,
  fee: number,
  id: number,
  start_time: Date,
  timestamp: Date
}

export interface TutProfile {
	courses: Courses[];
	favourite: boolean;
	id: number;
	overall_rating: number;
	timeslots: Timeslots[];
	username: string;
}

@Injectable()
export class TutProfileService { 
	constructor(private _tokenservice: TokenService, private _http: Http) {}

	getTutProfile(id: string) {
		return this._http.get('http://tuttee.ca/api/tutors/' + id)
			.map(res => res.json());
	}


}
