var app = angular.module('App', []);

app.controller('AppCtrl', ['$scope', '$interval', '$timeout', function($scope, $interval, $timeout) {
    //FETCHING DATA
    $scope.data = {
      "questions": [{
        "id": 01,
        "options": [{
          "name": "Kim Vilfort",
          "solution": false,
        }, {
          "name": "Peter Schmeichel",
          "solution": true,

        }, {
          "name": "Michael Laudrup",
          "solution": false,

        }],
        "teams": [{
          "id": 1,
          "club": "Gladsaxe-Hero",
          "img": "gladsaxe-hero",
        }, {
          "id": 2,
          "club": "Hvidovre IF",
          "img": "hvidovreif",

        }, {
          "id": 3,
          "club": "Brøndby IF",
          "img": "bif",

        }, {
          "id": 4,
          "club": "Manchester United",
          "img": "manchester-united",

        }, {
          "id": 5,
          "club": "Sporting Lissabon",
          "img": "sporting",

        }, {
          "id": 6,
          "club": "Aston Villa",
          "img": "aston-villa",

        }, {
          "id": 7,
          "club": "Manchester City",
          "img": "manchester-united",

        }],
        "correctImg": "Schmeichel---AP.png",
        "wrongImg": "dommer---Rui-Vieira.png",
      }, {
        "id": 02,
        "options": [{
          "name": "Ronaldinho",
          "solution": true,
        }, {
          "name": "Kaká",
          "solution": false,

        }, {
          "name": "Ronaldo",
          "solution": false,

        }],
        "teams": [{
          "id": 1,
          "club": "Gremio",
          "img": "gremio",
        }, {
          "id": 2,
          "club": "Paris Saint-Germain",
          "img": "paris-saint-germain",

        }, {
          "id": 3,
          "club": "Barcelona",
          "img": "barcelona",

        }, {
          "id": 4,
          "club": "Milan",
          "img": "ac-milan",

        }],
        "correctImg": "Ronaldihno---Ricardo-Mazalan.png",
        "wrongImg": "dommer1---Michael-Sohn.png",
      }, {
        "id": 03,
        "options": [{
          "name": "Roy Makaay",
          "solution": false,
        }, {
          "name": "Lothar Matthäus",
          "solution": true,

        }, {
          "name": "Jürgen Kinsmann",
          "solution": false,

        }],
        "teams": [{
          "id": 1,
          "club": "Gladbach",
          "img": "gladbach",
        }, {
          "id": 2,
          "club": "Bayern München",
          "img": "bayern-munchen",

        }, {
          "id": 3,
          "club": "Inter",
          "img": "inter",

        }, {
          "id": 4,
          "club": "Bayern München",
          "img": "bayern-munchen",

        }],
        "correctImg": "Matthaus---TOM-HEVEZI.png",
        "wrongImg": "dommer2---Michel-Euler.png",
      }, {
        "id": 04,
        "options": [{
          "name": "Michel Platini",
          "solution": false,
        }, {
          "name": "Marcel Desailly",
          "solution": false,

        }, {
          "name": "Zinedine Zidane",
          "solution": true,

        }],
        "teams": [{
          "id": 1,
          "club": "Cannes",
          "img": "cannes",
        }, {
          "id": 2,
          "club": "Bordeaux",
          "img": "bordeaux",

        }, {
          "id": 3,
          "club": "Juventus",
          "img": "juventus",

        }, {
          "id": 4,
          "club": "Real Madrid",
          "img": "real-madrid",

        }],
        "correctImg": "Zidane---DENIS-DOYLE.png",
        "wrongImg": "dommer3---Ted-S.-Warren.png",
      }, {
        "id": 05,
        "options": [{
          "name": "Didier Deschamps",
          "solution": true,
        }, {
          "name": "Basile Boli",
          "solution": false,

        }, {
          "name": "Pavel Nedved",
          "solution": false,

        }],
        "teams": [{
          "id": 1,
          "club": "Nantes",
          "img": "nantes",
        }, {
          "id": 2,
          "club": "Olympique Marseille",
          "img": "marseille",

        }, {
          "id": 3,
          "club": "Bordeaux",
          "img": "bordeaux",

        }, {
          "id": 4,
          "club": "Juventus",
          "img": "juventus",

        }, {
          "id": 5,
          "club": "Chelsea",
          "img": "chelsea",

        }, {
          "id": 6,
          "club": "Valencia",
          "img": "valencia",

        }],
        "correctImg": "Deschamps---AP.png",
        "wrongImg": "dommer6---Manu-Fernandez.png",
      }, {
        "id": 06,
        "options": [{
          "name": "Frank Arnesen",
          "solution": false,
        }, {
          "name": "Kenneth Brylle",
          "solution": false,
        }, {
          "name": "Morten Olsen",
          "solution": true,
        }],
        "teams": [{
          "id": 1,
          "club": "B 1901",
          "img": "b1901",
        }, {
          "id": 2,
          "club": "Cercle-brugge",
          "img": "cercle-brugge",

        }, {
          "id": 3,
          "club": "Racing White Molenbeek",
          "img": "racing-white-molenbeek",

        }, {
          "id": 4,
          "club": "Anderlecht",
          "img": "anderlecht",

        }, {
          "id": 5,
          "club": " FC Köln",
          "img": "fc-koln",

        }],
        "correctImg": "Olsen.png",
        "wrongImg": "dommer5---Luis-Hidalgo.png",
      }, {
        "id": 07,
        "options": [{
          "name": "Javier Saviola",
          "solution": false,
        }, {
          "name": "Gaizka Mendieta",
          "solution": true,

        }, {
          "name": "Simao Sabrosa",
          "solution": false,

        }],
        "teams": [{
          "id": 1,
          "club": "Valencia",
          "img": "valencia",
        }, {
          "id": 2,
          "club": "Lazio",
          "img": "lazio",

        }, {
          "id": 3,
          "club": "Barcelona",
          "img": "barcelona",

        }, {
          "id": 4,
          "club": "Middelsbrough",
          "img": "middlesbrough",

        }],
        "correctImg": "Mendieta---ALASTAIR-GRANT.png",
        "wrongImg": "dommer1---Michael-Sohn.png",
      }, {
        "id": 08,
        "options": [{
          "name": "Marcelo Salas",
          "solution": false,
        }, {
          "name": "Alexandre Pato",
          "solution": false,

        }, {
          "name": "Ivan Zamorano",
          "solution": true,

        }],
        "teams": [{
          "id": 1,
          "club": "Cobresal",
          "img": "cobresal",
        }, {
          "id": 2,
          "club": "St.Gallen",
          "img": "st-gallen",

        }, {
          "id": 3,
          "club": "Sevilla",
          "img": "sevilla",

        }, {
          "id": 4,
          "club": "Real Madrid",
          "img": "real-madrid",

        }, {
          "id": 5,
          "club": "Inter",
          "img": "inter",

        }, {
          "id": 6,
          "club": "Club América",
          "img": "club-america",

        }, {
          "id": 7,
          "club": "Colo-Colo",
          "img": "colo-colo",

        }],
        "correctImg": "zamorano---CARLO-FUMAGALLI.png",
        "wrongImg": "dommer2---Michel-Euler.png",
      }, {
        "id": 09,
        "options": [{
          "name": "Ronnie Schwartz",
          "solution": true,
        }, {
          "name": "Johan Elmander",
          "solution": false,

        }, {
          "name": "Dario Dumic",
          "solution": false,

        }],
        "teams": [{
          "id": 1,
          "club": "Esbjerg",
          "img": "esbjerg",
        },{
          "id": 2,
          "club": "AaB",
          "img": "aab",
        }, {
          "id": 3,
          "club": "Randers FC",
          "img": "randers-fc",

        }, {
          "id": 4,
          "club": "Guingamp",
          "img": "guingamp",

        }, {
          "id": 5,
          "club": "Brøndby IF",
          "img": "bif",
        }],
        "correctImg": "Schwartz---BONNERUP-CLAUS.png",
        "wrongImg": "dommer---Rui-Vieira.png",
      }, {
        "id": 10,
        "options": [{
          "name": "Luis Suárez",
          "solution": true,
        }, {
          "name": "Diego Forlán ",
          "solution": false,

        }, {
          "name": "Roque Santa Cruz",
          "solution": false,

        }],
        "teams": [{
          "id": 1,
          "club": "Nacional",
          "img": "nacional",
        }, {
          "id": 2,
          "club": "Groningen",
          "img": "groningen",

        }, {
          "id": 3,
          "club": "Ajax Amsterdam",
          "img": "ajax",

        }, {
          "id": 4,
          "club": "Liverpool",
          "img": "liverpool",

        }, {
          "id": 5,
          "club": "Barcelona",
          "img": "barcelona",

        }],
        "correctImg": "Suarez---Eugene-Hoshiko.png",
        "wrongImg": "dommer6---Manu-Fernandez.png",
      }, {
        "id": 11,
        "options": [{
          "name": "Franck Ribéry",
          "solution": false,
        }, {
          "name": "David Trézéguet",
          "solution": false,

        }, {
          "name": "Patrice Evra",
          "solution": true,

        }],
        "teams": [{
          "id": 1,
          "club": "Nice",
          "img": "nice",
        }, {
          "id": 2,
          "club": "Monaco",
          "img": "monaco",

        }, {
          "id": 3,
          "club": "Manchester United",
          "img": "manchester-united",

        }, {
          "id": 4,
          "club": "Juventus",
          "img": "juventus",

        }],
        "correctImg": "Evra---JON-SUPER.png",
        "wrongImg": "dommer5---Luis-Hidalgo.png",
      }, {
        "id": 12,
        "options": [{
          "name": "Sami Khedira",
          "solution": false,
        }, {
          "name": "Luis Suárez ",
          "solution": false,

        }, {
          "name": "Xabi Alonso",
          "solution": true,

        }],
        "teams": [{
          "id": 1,
          "club": "Real Sociedad",
          "img": "real-sociedad",
        }, {
          "id": 2,
          "club": "Liverpool",
          "img": "liverpool",

        }, {
          "id": 3,
          "club": "Real Madrid",
          "img": "real-madrid",

        }, {
          "id": 4,
          "club": "Bayern München",
          "img": "bayern-munchen",

        }],
        "correctImg": "Alonso---Matthias-Schrader.png",
        "wrongImg": "dommer2---Michel-Euler.png",
      }, {
        "id": 13,
        "options": [{
          "name": "Edgar Davids",
          "solution": false,
        }, {
          "name": "Arjen Robben",
          "solution": false,

        }, {
          "name": "Wesley Sneijder",
          "solution": true,

        }],
        "teams": [{
          "id": 1,
          "club": " Ajax Amsterdam",
          "img": "ajax",
        }, {
          "id": 2,
          "club": "Real Madrid",
          "img": "real-madrid",

        }, {
          "id": 3,
          "club": "Inter",
          "img": "inter",

        }, {
          "id": 4,
          "club": "Galatasaray",
          "img": "galatasaray",

        }],
        "correctImg": "Sneijder---Antonio-Calanni.png",
        "wrongImg": "dommer5---Luis-Hidalgo.png",
      }, {
        "id": 14,
        "options": [{
          "name": "Gianluca Vialli",
          "solution": false,
        }, {
          "name": "Didier Drogba",
          "solution": true,
        }, {
          "name": "Lukas Podolski ",
          "solution": false,
        }],
        "teams": [{
          "id": 1,
          "club": "Guingamp",
          "img": "guingamp",
        }, {
          "id": 2,
          "club": "Olympique Marseille",
          "img": "marseille",
        }, {
          "id": 3,
          "club": "Chelsea",
          "img": "chelsea",
        }, {
          "id": 4,
          "club": "Shanghai Shenhua",
          "img": "shanghai-shenhua",
        }, {
          "id": 5,
          "club": "Galatasaray",
          "img": "galatasaray",
        }, {
          "id": 6,
          "club": "Chelsea",
          "img": "chelsea",
        }, {
          "id": 7,
          "club": "Montreal Impact",
          "img": "montreal-impact",
        }],
        "correctImg": "Drogba---Eugene-Hoshiko.png",
        "wrongImg": "dommer3---Ted-S.-Warren.png",
      }, {
        "id": 15,
        "options": [{
          "name": "Simon Kjær",
          "solution": true,
        }, {
          "name": "Viktor Fischer",
          "solution": false,

        }, {
          "name": "Thomas Rytter",
          "solution": false,

        }],
        "teams": [{
          "id": 1,
          "club": "FC Midtjylland",
          "img": "fc-midtjylland",
        }, {
          "id": 2,
          "club": "Palermo",
          "img": "palermo",

        }, {
          "id": 3,
          "club": "Wolfsburg",
          "img": "wolfsburg",

        }, {
          "id": 4,
          "club": "Roma",
          "img": "roma",

        }, {
          "id": 5,
          "club": "Lille",
          "img": "lille",

        }, {
          "id": 6,
          "club": "Fenerbahce",
          "img": "fenerbache",

        }],
        "correctImg": "Kjaer---Michel-Spingler.png",
        "wrongImg": "dommer6---Manu-Fernandez.png",
      }, {
        "id": 16,
        "options": [{
          "name": "Wojciech Szczesny",
          "solution": false,
        }, {
          "name": "Jakub Blaszczykowski",
          "solution": false,

        }, {
          "name": "Artur Boruc",
          "solution": true,

        }],
        "teams": [{
          "id": 1,
          "club": "Legia Warszawa",
          "img": "legia-warszawa",
        }, {
          "id": 2,
          "club": "Celtic",
          "img": "celtic",

        }, {
          "id": 3,
          "club": "Fiorentina",
          "img": "fiorentina",

        }, {
          "id": 4,
          "club": "Southampton",
          "img": "southampton",

        }, {
          "id": 5,
          "club": "Bournemouth",
          "img": "bournemouth",

        }],
        "correctImg": "Boruc---ANDREW-MILLIGAN.png",
        "wrongImg": "dommer---Rui-Vieira.png",
      }]
    };
    $scope.questions = $scope.data.questions;
    //RANDOMIZE ORDER OF QUESTIONS
    $scope.questions.sort(function() {
        return 0.5 - Math.random()
      })
    //VARIABLES
    var scoreTimer = 120;
    var viewTimer = 2000;
    var timerInt = 0;
    var clue = 1;
    var slice;
    var intervalTimer;
    //SCOPED VARIABLES
    $scope.pageNumber = 1;
    $scope.rightanswer = 0;
    $scope.wronganswer = 0;
    $scope.point = 0;
    $scope.roundPoint = 0;
    $scope.price = 4;
    $scope.view = 'startscreen';
    $scope.reply = '';
    $scope.imgUrl = 'http://static.ekstrabladet.dk/redaktioneludvikling/data/graphics/2016/Fodboldlogos/players/';
    //CALCULATES TIMEINTERVAL FOR REVEALING OF CLUES - AND PRELOAD IMAGES;
    var sliceIt = function() {
      var correctImg = new Image();
      var wrongImg = new Image();

      $scope.clueCount = $scope.questions[$scope.pageNumber - 1].teams.length;
      slice = 1 / $scope.clueCount * 100;
      intervalTimer = slice * scoreTimer;

      $scope.revealClue = 1;
      //Preload images
      correctImg.src = $scope.imgUrl +  $scope.questions[$scope.pageNumber - 1].correctImg;
      wrongImg.src = $scope.imgUrl + $scope.questions[$scope.pageNumber - 1 ].wrongImg;

      $scope.correctImg = correctImg.src;
      $scope.wrongImg = wrongImg.src;
    };
    //START QUIZ
    $scope.start = function() {
        $scope.view = 'quizscreen';
        sliceIt();
        //CALCULATING INTERVAL BETWEEN EACH CLUE IS REVEALED
        var sliceInterval = $interval(function() {
          if ($scope.revealClue <= $scope.clueCount) {
            slice * $scope.revealClue;
            if ($scope.revealClue < $scope.clueCount) {
              $scope.revealClue++;
            }
          }
        }, intervalTimer);
        //ADJUST PRICE ACCORDING TO TIME EVERY 25%
        var scoreAdjustment = $interval(function() {
          $scope.barWidth = timerInt + '%';
          if (timerInt<= 100 && $scope.view  === 'quizscreen') {
            timerInt += 1;
            if (timerInt== 25) {
              $scope.price--;
            }
            if (timerInt== 50) {
              $scope.price--;
            }
            if (timerInt== 75) {
              $scope.price--;
            }
          }
        }, scoreTimer);
      }
    //WHEN ANWSERING QUETIONS
    $scope.answer = function(val) {
      timerInt = 0;

      $scope.view = 'midscreen';

      //CORRECT ANSWER
      if (val == true) {
        $scope.reply = 'Rigtigt!';
        $scope.roundPoint = $scope.price;
        $scope.rightanswer += 1;
        $scope.point += $scope.price;
        // IF LAST PAGE REACED - SWITCH TO FINAL SCREEN
        if ($scope.pageNumber == $scope.questions.length) {
          $timeout(function() {
            $scope.view = 'finalscreen';
          }, viewTimer);
        }
      }
      //WRONG ANSWER
      if (val == false) {
        $scope.reply = 'Forkert!';
        $scope.roundPoint = 0;
        $scope.wronganswer++;
        //IF LAST PAGE -  SWITCH TO FINAL SCREEN
        if ($scope.pageNumber == $scope.questions.length ) {
          $scope.view = 'finalscreen';
        }
      }
      //SWITCH BACK TO QUESTIONS VIEW
      //RESET SETTINGS
      $timeout(function() {
        if ($scope.view != 'quizscreen') {
          $scope.pageNumber++;
          //RE-CALCULATES INTERAL SIZE FOR EACH CLUE
          sliceIt();
          timerInt = 0;
          $scope.view = 'quizscreen';
          $scope.price = 4;
        }
      }, viewTimer);
    };
  //PARTIAL DIRECTIVES
  }]).directive('questions', function() {
    return {
      restrict: 'E',
      transclude: true,
      templateUrl: 'directives/questions.html'
    };
  }).directive('midscreen', function() {
    return {
      restrict: 'E',
      transclude: true,
      templateUrl: 'directives/midscreen.html'
    };
  }).directive('clues', function() {
    return {
      restrict: 'E',
      transclude: true,
      templateUrl: 'directives/clues.html'
    };
  }).directive('end', function() {
    return {
      restrict: 'E',
      transclude: true,
      templateUrl: 'directives/end.html'
    };
  }).directive('start', function() {
    return {
      restrict: 'E',
      transclude: true,
      templateUrl: 'directives/start.html'
    };
  });
