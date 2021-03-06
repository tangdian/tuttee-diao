import {Component,OnInit,AfterViewInit} from '@angular/core';
import {CoursesService,Course} from './courses.service';
// import {Router,RouteData} from '@angular/router-deprecated';
import {Router} from '@angular/router'
import {NavbarComponent} from '../other/navbar.component'
//import {SubjectComponent} from 'subject/subject.component';
import {TokenService} from '../services/token.service'
import{SearchPipe} from './search-pipe'

// import {PaginatePipe, PaginationControlsCmp, PaginationService} from 'ng2-pagination';

@Component({
	selector: 'course',

	styleUrls: ['./app/courses/courses.component.css'],
	templateUrl: './app/courses/courses.component.html',
	  // providers: [PaginationService],
	  //   directives: [PaginationControlsCmp],
	     pipes: [SearchPipe]

})


export class CoursesComponent implements OnInit, AfterViewInit{
	public Courses: Course[];
	public test :string;
    public token: string;
    public loading: boolean = true;
    public categories:string[];     

	constructor(private _router: Router,
	            private _coursesservices: CoursesService,
	            private _tokenservice:TokenService
	) {}

	getCourse() {
			this._coursesservices.getCourses().subscribe(data => {
				this.loading = false;
				this.Courses = data.courses;
		console.log(data);
		//	console.log("runed");
			this.test = data.courses[0].name;
			// console.log(data.courses);
			// console.log(data.courses[0].name);
			// this.Courses[0].name = data.courses[0].name;
			// for (var i=0;i<data.courses.length;i++) {
			// 	this.Courses[i].name = data.courses[i].name;
			// 	// this.Courses[i].favorited = data.courses[i].favorited;
			// 	// this.Courses[i].total_tutors = data.courses[i].total_tutors;
			// 	// this.Courses[i].tutors = data.courses[i].tutors;
			// }
			//console.log(this.Courses);
		},
		err => console.log(err));
	
	}
	ngOnInit() {
		this.getCourse();
		this.categories = ["actsc","art","cs","math","science","stat"];
	}

	ngAfterViewInit () {

	}


	gotoDetail(course_id: String) {
		console.log(course_id);
		this._router.navigate(['/subject', course_id]);
	}
}
