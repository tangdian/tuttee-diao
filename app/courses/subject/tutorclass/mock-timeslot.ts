import {Timeslot} from './tutorclass.service'

//var comment1 = { faculty: "math1A", time: new Date(43214321412), content: "fuckthisshit" };
//var comment2 = { faculty: "SE1B", time: new Date(21324324), content: "你是傻逼" };

export var TIMESLOTS:Timeslot[] = 
	[ {
		tutor_name:"老大"，
        id:3,
        subject: "math137",
		time:new Date(213131432432),
		nowPeople: 2,
		maxPeople:5,
		duration:1,
		location:"DC",
		price: 10,
		description:"Final",
	},
		{          
		 tutor_name: "老大"，
		 id: 3,
		 subject: "math137",
		 time:new Date(21313142),
		 nowPeople: 5,
		 maxPeople:10,
		 duration:3,
		 location: "UBD",
		 price: 30 ,
			description:"FUCK"
		},
	 {
		 tutor_name: "老2"，
		 id: 4,
        subject: "math137",
		time: new Date(232132131432432),
		nowPeople: 3,
		maxPeople:5,
		duration:1,
		location:"RCH",
		price: 20,
		description:"a8",
		}
	]

export var COMMENT: Comment[] = [
{ faculty: "math1A", 
  time: new Date(43214321412), 
  content: "fuckthisshit" },
{ faculty: "SE1B", 
  time: new Date(21324324), 
  content: "你是傻逼" }
]