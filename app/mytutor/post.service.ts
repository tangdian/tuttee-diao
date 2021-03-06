import {Injectable,} from '@angular/core';
import {HTTP_PROVIDERS,Http,Headers,URLSearchParams} from '@angular/http';
import {TokenService} from '../services/token.service'




export interface postObj {
    course_id:string;
    start_time:string;
    end_time:string;
    duration:number;
    capacity:number;
    fee:number;
    address:string;
}


@Injectable()
export class PostService {

	
 	constructor(private _http: Http,private _tokenservice:TokenService) {
	  }
               
	  
	  
	postTimeslot(postObj:postObj) {
		this._tokenservice.checkExp();
		 // let params: URLSearchParams = new URLSearchParams();
		 // params.set('start_time', postObj.start_time);
		 //  params.set('end_time',postObj.end_time);
		 //  params.set('course_id',postObj.course_id);
		 //  params.set('capacity',postObj.capacity.toString());
		 //  params.set('fee',postObj.fee.toString());
		 //  params.set('address',postObj.address);

 			let slot = JSON.stringify ({start_time:postObj.start_time,
				end_time:postObj.end_time,
				course_id:postObj.course_id,
				capacity:postObj.capacity,
				fee:postObj.fee,
				address:postObj.address});

		// params.set('cnt', days.toString());
		var headers = new Headers();
		headers.append('Content-Type','application/json');
	  headers.append('Authorization',"Basic "+window.btoa(this._tokenservice.getToken()+":"));


		return this._http.post('http://tuttee.ca/api/timeslots',
			   slot ,
			{headers:headers})
		   .map(res => res.json());

		//return Promise.resolve(COURSES);
	}

	modifyTimeslot(modObj) {
				this._tokenservice.checkExp();
		let slot = JSON.stringify ({
			id: modObj.id,
			start_time:modObj.start_time,
			end_time:modObj.end_time,
			course_id:modObj.course_id,
			capacity:modObj.capacity,
			fee:modObj.fee,
			address:modObj.address});
		console.log(slot);

		var headers = new Headers();
		headers.append('Content-Type','application/json');
	 	headers.append('Authorization',"Basic "+window.btoa(this._tokenservice.getToken()+":"));

	 	return this._http.put('http://tuttee.ca/api/timeslots/'+modObj.id,
			   slot ,
			{headers:headers})
		   .map(res => res.json());
	}

		deleteSlot(id) {
		this._tokenservice.checkExp();
		 var headers = new Headers();
		 headers.append('Authorization',"Basic "+window.btoa(this._tokenservice.getToken()+":"));
		  return this._http.delete('http://tuttee.ca/api/timeslots/'+id,{headers:headers})
    
    // constructor(private _http: Http,private _tokenservice:TokenService) {
    //   }

    // postTimeslot(postObj:postObj) {
    //     this._tokenservice.checkExp();
    //      // let params: URLSearchParams = new URLSearchParams();
    //      // params.set('start_time', postObj.start_time);
    //      //  params.set('end_time',postObj.end_time);
    //      //  params.set('course_id',postObj.course_id);
    //      //  params.set('capacity',postObj.capacity.toString());
    //      //  params.set('fee',postObj.fee.toString());
    //      //  params.set('address',postObj.address);

    //         let slot = JSON.stringify ({start_time:postObj.start_time,
    //             end_time:postObj.end_time,
    //             course_id:postObj.course_id,
    //             capacity:postObj.capacity,
    //             fee:postObj.fee,
    //             address:postObj.address});

    //     // params.set('cnt', days.toString());
    //     var headers = new Headers();
    //     headers.append('Content-Type','application/json');
    //   headers.append('Authorization',"Basic "+window.btoa(this._tokenservice.getToken()+":"));


    //     return this._http.post('http://tuttee.ca/api/timeslots',
    //            slot ,
    //         {headers:headers})
    //        .map(res => res.json());

    //     //return Promise.resolve(COURSES);
    // }
    
    // modifyTimeslot(modObj) {
    //     this._tokenservice.checkExp();
    //     let slot = JSON.stringify ({
    //         id: modObj.id,
    //         start_time:modObj.start_time,
    //         end_time:modObj.end_time,
    //         course_id:modObj.course_id,
    //         capacity:modObj.capacity,
    //         fee:modObj.fee,
    //         address:modObj.address});
    //     console.log(slot);

    //     var headers = new Headers();
    //     headers.append('Content-Type','application/json');
    //     headers.append('Authorization',"Basic "+window.btoa(this._tokenservice.getToken()+":"));

    //     return this._http.put('http://tuttee.ca/api/timeslots/'+modObj.id,
    //            slot ,
    //         {headers:headers})
    //        .map(res => res.json());
    // }

    //     deleteSlot(id) {
    //     this._tokenservice.checkExp();
    //      var headers = new Headers();
    //      headers.append('Authorization',"Basic "+window.btoa(this._tokenservice.getToken()+":"));
    //       return this._http.delete('http://tuttee.ca/api/timeslots/'+id,{headers:headers})

       // .map(res => res.json());

        }
}

