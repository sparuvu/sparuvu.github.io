'use strict';

/**
 * @ngdoc overview
 * @name sparuvuApp
 * @description
 * # sparuvuApp
 *
 * Main module of the application.
 */
angular
  .module('sparuvuApp', [
    'ngAnimate',
    'ngAria',
    'ngCookies',
    'ngMessages',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'ngTouch'
  ])
  .config(["$routeProvider", function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl'
      })
      .when('/about', {
        templateUrl: 'views/about.html',
        controller: 'AboutCtrl'
      })
      .otherwise({
        redirectTo: '/'
      });
  }]);

'use strict';

/**
 * @ngdoc function
 * @name sparuvuApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the sparuvuApp
 */
angular.module('sparuvuApp')
  .controller('MainCtrl', ["$scope", function ($scope) {
    $scope.scrolly = function() {
    	$('html, body').animate({
        scrollTop: $('html').offset().top
      }, 500);
    };

    $scope.resume = resume;
  }]);

'use strict';

/**
 * @ngdoc function
 * @name sparuvuApp.controller:AboutCtrl
 * @description
 * # AboutCtrl
 * Controller of the sparuvuApp
 */
angular.module('sparuvuApp')
  .controller('AboutCtrl', ["$scope", function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  }]);

var resume = {
	"name": "Sundeep Paruvu",
	"address": {
		"value": "6631 W 140th St. Apt#1506, Overland Park, Kansas - 66223",
		"href": "https://www.google.com/maps/place/6631+W+140th+St+%231506,+Overland+Park,+KS+66223/@38.87473,-94.663517,17z/data=!4m2!3m1!1s0x87c0c1eaa42e32f7:0x1164c7422091cb05"
	},
	"phone": {
		"value": "(918)-671-2287",
		"href": "tel:9186712287"
	},
	"email": {
		"value": "sparuvu@gmail.com",
		"href": "mailto:sparuvu@gmail.com"
	},
	"objective": "To be the part of a team, that makes the web more fascinating.",
	"experience": [
		{
			"company": "Cerner Corp.",
			"title": "Software Engineer",
			"date": "Nov, 2012 – Present",
			"projects": [
				{
					"name": "Healthe Intent Service Deployment Chef Cookbook",
					"date": "Sept, 2014 - Present",
					"details": [
						"Revamped the cookbook from scratch.",
						"Developed 100% of the cookbook.",
						"Played a key role in setting up companion configuration projects (dev., staging and production).",
						"Point of contact of the application."
					],
					"technologiesUsed": "Ruby, Chef, Test Kitchen, Server spec."
				},
				{
					"name": "Red-Tape",
					"date": "June, 2014 - Present",
					"details": [
						"Designed the application from scratch.",
						"Have been developing the RESTful services from scratch.",
						"Developed 100% of the application.",
						"Played a key role in setting up different environments (dev., staging and production).",
						"Point of contact of the application."
					],
					"technologiesUsed": "Java, Guice, MySQL, RestEasy, Chef."
				},
				{
					"name": "Proper Channel",
					"date": "June, 2014 – Present",
					"details": [
						"Fixed lots of Frontend glitches.",
						"Updated the Frontend design.",
						"Worked on some of the critical parts of the application like Auditing.",
						"Played a key role in setting up different environments (dev., staging and production)."
					],
					"technologiesUsed": "Ruby on Rails, Object Oriented JavaScript, jQuery, CSS, Chef."
				},
				{
					"name": "Jolly Rogers",
					"date": "Dec, 2013 – Present",
					"details": [
						"Designed the application from scratch.",
						"Set the basic structure/framework.",
						"Developed 70% of the application.",
						"Point of contact of the application."
					],
					"technologiesUsed": "Ruby on Rails, Object Oriented JavaScript, jQuery, CSS, Chef."
				},
				{
					"name": "Desiccator",
					"date": "Dec, 2013 – Present",
					"details": [
						"Designed and developed the front-end of the application.",
						"Fixed some potential glitches."
					],
					"technologiesUsed": "Ruby on Rails, CSS."
				},
				{
					"name": "Population Health Application Services",
					"date": "Dec, 2012 - Present",
					"details": [
						"Have been developing the RESTful services from scratch.",
						"Developed the prototype for the views (frontend).",
						"Played the key role in setting up different environments (dev., staging and production).",
						"Resolved several performance related issues."
					],
					"technologiesUsed": "Java, HBase, Hadoop, Dagger, Guice, Ruby, Rails, Chef."
				}
			]
		},
		{
			"company": "Jobvite Inc.",
			"title": "Software UI Engineer",
			"date":  "Jul, 2011 – Oct, 2012",
			"projects": [
				{
					"name": "Source",
					"date": "May 2012 – Nov, 2012",
					"details": [
						"Developed several features in the most engaging areas (like contacts page) of the application.",
						"Developed Widgets that work independent of platforms and browsers.",
						"Refactored/Optimized several parts of the code to improve the performance of the overall application.",
						"Worked on the frontend to develop the features on top of the existing functionality.",
						"Picked up the backend as and when needed."
					],
					"technologiesUsed": "Object Oriented JavaScript, JQuery, AngularJS, CSS, CSS3, Java, Spring."
				},
				{
					"name": "Share",
					"date": "July, 2011 - May, 2012",
					"details": [
						"Developed about 40% of the application.",
						"Developed the JavaScript APIs/libraries/Utilities, which were used in the core part of the application. ",
						"Refactored/Optimized several parts of the code to improve the performance of the overall application."
					],
					"technologiesUsed": "Object Oriented JavaScript, JQuery, and CSS."
				}
			]
		},
		{
			"company": "University of Tulsa",
			"title": "Web Developer",
			"date": "May, 2010 – Dec, 2010",
			"projects": [
				{
					"name": "TU Online Housing and Dining Services",
					"date": "May 2010 - Dec, 2010",
					"details": [
						"Developed, Tested and maintained the University Of Tulsa (TU) Housing and Dining services website.",
						"Re-designed the housing selection process by incorporating the priority system.",
						"Status Automator is an intelligent script that sends appropriate e-mails every day to the users based on their inactivity in the TU Roommate finder forum.",
						"Fixed many potential glitches in the core application of TU Housing Services."
					],
					"technologiesUsed": "PHP, MYSQL, JavaScript, jQuery, CSS, CakePHP."
				}
			]
		}
	],
	"professionalSummary": [
		"Experience in all phases of Software Development Life Cycle (SDLC) as a Software Developer with expertise in Object-Oriented Design (OOD), Development and Testing.",
		"Clear understanding of Big Data technologies (Hadoop, Hive, HBase, MapReduce).",
		"Ability to design and develop well-structured and scalable applications.",
		"Web developer with extensive knowledge on MVC paradigm.",
		"Deep understanding of Agile and Scrum.",
		"Terrific understanding of frontend [HTML, CSS, Object oriented JavaScript] and backend [Java, API designing, Unit testing] stacks of web development.",
		"Amazing User Experience designing skills.",
		"Team Player with excellent COMMUNICATION & LEADERSHIP Skills.",
		"Self-Motivated Individual with Analytical and Problem Solving Skills.",
		"Highly adaptable and can play any role. [Frontend/Backend]",
		"Good motivator and can function independently on multiple projects.",
		"Mentored and trained several candidates at different stacks of the web development."
	],
	"skills": [
		{
			"category": "Programming Languages",
			"proficientIn": "JavaScript, HTML, CSS, SASS, Java.",
			"familiarWith": "Ruby, Scala, C#."
		},
		{
			"category": "Frameworks",
			"proficientIn": "jQuery, Rails, Guice, RestEasy, Compass.",
			"familiarWith": "Java Spring, AngularJS, Dagger, Chef."
		},
		{
			"category": "Tools",
			"proficientIn": "IntelliJ, Eclipse, SVN, GitHub, Browser Developer Tools, Tamper Data, SourceTree.",
			"familiarWith": "xCode, Visual Studios, Fiddler2."
		},
		{
			"category": "Others",
			"proficientIn": "OSX, Tomcat, MVC architecture, Application deployment Strategies.",
			"familiarWith": "Unix, Linux, MYSQL, HBASE, Windows."
		}
	],
	"education": [
		{
			"degree": "Masters in Computer Science",
			"university": "The University of Tulsa",
			"place": "OK",
			"date": "Jan, 2009 – Dec, 2010"
		},
		{
			"degree": "Bachelors in Computer Science",
			"University": "JNTU",
			"place": "India",
			"date": "Aug, 2004 – May, 2008"
		}
	],
	"sideProjects" : [
		{
		  "name": "Desiccator",
		  "date": "Dec, 2013",
		  "details": [
		    "Designed and developed the front-end of the application.",
		    "Fixed some potential glitches."
		  ],
		  "technologiesUsed": "Ruby on Rails, CSS."
		},
		{
		  "name": "JsonFrill",
		  "date": "Feb, 2013",
		  "details": [
		    "jQuery library to format the json.",
		    "Collapsible object, color-coded datatypes.",
		    "Widely used in all the Population health application testing consoles at Cerner corp.",
		  ],
		  "technologiesUsed": "JavaScript, jQuery, CSS."
		},
		{
		  "name": "NGen Search tool",
		  "date": "Apr, 2008",
		  "details": [
		    "Scraps the results of the search from search engines like Google, Yahoo, AOL.",
		    "Stores the results locally to save the Internet bandwidth.",
		    "Periodically updates the cached searches and serves them when needed."
		  ],
		  "technologiesUsed": "Used: Visual Studios, C#"
		},
		{
		  "name": "SafePad",
		  "date": "Apr, 2007",
		  "details": [
		    "RTF format based textual notepad.",
		    "Multi-layered secured textual files.",
		    "Implemented pseudo cloud architecture."
		  ],
		  "technologiesUsed": "Used: Visual Studios, C#"
		}
  ]
}
