import { Injectable } from 'angular2/core';
import {SUBJECT} from './mock-subject';
import {HTTP_PROVIDERS,Http,Headers,URLSearchParams} from 'angular2/http';
import {TokenService} from '../../services/token.service'

export interface Teacher {
	   id: number;
       name: string;
	 //  teacher_descripition: string;
    //   imageURL: string;
	//   sales: number;
	 //  avgpr: number;

}
export interface Subject {
	id: string;	
	name:string;
	//course_description: string;   
	//teacher: Teacher[];
}


@Injectable()
export class SubjectService {

	constructor (private _tokenservice:TokenService, private _http:Http){}

	getSubject(id: string) {

		 let params: URLSearchParams = new URLSearchParams();
		 params.set('limit', "6");
		// params.set('cnt', days.toString());
		var headers = new Headers();
		//headers.append('Content-Type','application/json');
		headers.append('Authorization',this._tokenservice.getToken());


		return this._http.get('http://127.0.0.1:5000/api/courses/'+id,{headers:headers})
		   .map(res => res.json());



		// return	Promise.resolve(SUBJECT).then(
		// 	heroes => heroes.filter(hero => hero.id === id)[0]
		);	 
	}
}