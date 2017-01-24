var app = angular.module('App', []);

app.controller('AppCtrl', ['$scope', '$http', function($scope, $http) {

  $scope.matchInfo = {
    "datetime": "1447779600",
    "stadium": "Friends Arena",
    "city": "Stockholm",
    "contry": "Sverige",
    "stadiumSize": '50.000',
    "constructed": 2012,
    "image": "http://static.ekstrabladet.dk/redaktioneludvikling/data/dropper/2015/be84eb20-8927-11e5-876f-f3a7c07f9a1d.jpg"
  };
  // $scope.dkmatchInfo = {
  //   "datetime": "1447779600",
  //   "stadium": "Parken",
  //   "city": "København",
  //   "contry": "Denmark",
  //   "stadiumSize": 38.065,
  //   "constructed": 1911,
  //   "image": "http://static.ekstrabladet.dk/redaktioneludvikling/data/dropper/2015/d0ce13a0-86e4-11e5-a097-9b0d058e9c75.png"
  // };

  $scope.away = {
    "team": "Danmark",
    "coach": "Morten Olsen",
    "lastFive": [{
      'var': 'T',
      'order': 1
    }, {
      'var': 'T',
      'order': 2
    }, {
      'var': 'U',
      'order': 3
    }, {
      'var': 'U',
      'order': 4
    }, {
      'var': 'V',
      'order': 5
    }],
    "players": [{
      "firstName": "Kasper ",
      "lastName": "Schmeichel",
      "age": 29,
      "matches": 16,
      "nationalGoals": 0,
      "Injuries": 0,
      "number": 1,
      "shirtName": "Schmeichel",
      "shirt": "http://static.ekstrabladet.dk/redaktioneludvikling/data/dropper/2015/11e94e20-8390-11e5-be7b-954ea56d37f6.png",
      "team": "Danmark"
    }, {
      "firstName": "Stephan ",
      "lastName": "Andersen",
      "age": 33,
      "matches": 30,
      "nationalGoals": 0,
      "Injuries": 0,
      "number": 16,
      "shirtName": "Andersen",
      "shirt": "http://static.ekstrabladet.dk/redaktioneludvikling/data/dropper/2015/11e94e20-8390-11e5-be7b-954ea56d37f6.png",
      "team": "Danmark"
    }, {
      "firstName": "Jonas ",
      "lastName": "Lössl",
      "age": 26,
      "matches": 0,
      "nationalGoals": 0,
      "Injuries": 0,
      "number": 22,
      "shirtName": "Lössl",
      "shirt": "http://static.ekstrabladet.dk/redaktioneludvikling/data/dropper/2015/11e94e20-8390-11e5-be7b-954ea56d37f6.png",
      "team": "Danmark"
    }, {
      "firstName": "Daniel ",
      "lastName": "Wass",
      "age": 26,
      "matches": 14,
      "nationalGoals": 0,
      "Injuries": 0,
      "number": 2,
      "shirtName": "Wass",
      "shirt": "http://static.ekstrabladet.dk/redaktioneludvikling/data/dropper/2015/11e94e20-8390-11e5-be7b-954ea56d37f6.png",
      "team": "Danmark"
    }, {
      "firstName": "Riza ",
      "lastName": "Durmisi",
      "age": 21,
      "matches": 5,
      "nationalGoals": 0,
      "Injuries": 0,
      "number": 5,
      "shirtName": "Durmisi",
      "shirt": "http://static.ekstrabladet.dk/redaktioneludvikling/data/dropper/2015/11e94e20-8390-11e5-be7b-954ea56d37f6.png",
      "team": "Danmark"
    }, {
      "firstName": "Simon ",
      "lastName": "Kjær",
      "age": 26,
      "matches": 54,
      "nationalGoals": 2,
      "Injuries": 0,
      "number": 3,
      "shirtName": "Kjær",
      "shirt": "http://static.ekstrabladet.dk/redaktioneludvikling/data/dropper/2015/11e94e20-8390-11e5-be7b-954ea56d37f6.png",
      "team": "Danmark"
    }, {
      "firstName": "Andreas ",
      "lastName": "Christensen",
      "age": 19,
      "matches": 2,
      "nationalGoals": 0,
      "Injuries": 0,
      "number": 23,
      "shirtName": "Christensen",
      "shirt": "http://static.ekstrabladet.dk/redaktioneludvikling/data/dropper/2015/11e94e20-8390-11e5-be7b-954ea56d37f6.png",
      "team": "Danmark"
    }, {
      "firstName": "Lars ",
      "lastName": "Jacobsen",
      "age": 36,
      "matches": 79,
      "nationalGoals": 1,
      "Injuries": 0,
      "number": 6,
      "shirtName": "Jacobsen",
      "shirt": "http://static.ekstrabladet.dk/redaktioneludvikling/data/dropper/2015/11e94e20-8390-11e5-be7b-954ea56d37f6.png",
      "team": "Danmark"
    }, {
      "firstName": "Daniel ",
      "lastName": "Agger",
      "age": 30,
      "matches": 71,
      "nationalGoals": 12,
      "Injuries": 0,
      "number": 4,
      "shirtName": "Agger",
      "shirt": "http://static.ekstrabladet.dk/redaktioneludvikling/data/dropper/2015/c50b4400-8871-11e5-8fce-112a3fe88c2f.png",
      "team": "Danmark"
    }, {
      "firstName": "Jannik ",
      "lastName": "Vestergaard",
      "age": 23,
      "matches": 4,
      "nationalGoals": 0,
      "Injuries": 0,
      "number": 12,
      "shirtName": "Vestergaard",
      "shirt": "http://static.ekstrabladet.dk/redaktioneludvikling/data/dropper/2015/11e94e20-8390-11e5-be7b-954ea56d37f6.png",
      "team": "Danmark"
    }, {
      "firstName": "Simon ",
      "lastName": "Poulsen",
      "age": 31,
      "matches": 31,
      "nationalGoals": 0,
      "Injuries": 0,
      "number": 21,
      "shirtName": "Poulsen",
      "shirt": "http://static.ekstrabladet.dk/redaktioneludvikling/data/dropper/2015/11e94e20-8390-11e5-be7b-954ea56d37f6.png",
      "team": "Danmark"
    }, {
      "firstName": "William ",
      "lastName": "Kvist",
      "age": 30,
      "matches": 60,
      "nationalGoals": 2,
      "Injuries": 0,
      "number": 7,
      "shirtName": "Kvist",
      "shirt": "http://static.ekstrabladet.dk/redaktioneludvikling/data/dropper/2015/11e94e20-8390-11e5-be7b-954ea56d37f6.png",
      "team": "Danmark"
    }, {
      "firstName": "Thomas ",
      "lastName": "Kahlenberg",
      "age": 32,
      "matches": 46,
      "nationalGoals": 5,
      "Injuries": 0,
      "number": 15,
      "shirtName": "Kahlenberg",
      "shirt": "http://static.ekstrabladet.dk/redaktioneludvikling/data/dropper/2015/11e94e20-8390-11e5-be7b-954ea56d37f6.png",
      "team": "Danmark"
    }, {
      "firstName": "Michael",
      "lastName": " Krohn-Dehli",
      "age": 32,
      "matches": 55,
      "nationalGoals": 6,
      "Injuries": 0,
      "number": 9,
      "shirtName": " Krohn-Dehli",
      "shirt": "http://static.ekstrabladet.dk/redaktioneludvikling/data/dropper/2015/11e94e20-8390-11e5-be7b-954ea56d37f6.png",
      "team": "Danmark"
    }, {
      "firstName": "Thomas ",
      "lastName": "Delaney",
      "age": 24,
      "matches": 4,
      "nationalGoals": 0,
      "Injuries": 0,
      "number": 19,
      "shirtName": "Delaney",
      "shirt": "http://static.ekstrabladet.dk/redaktioneludvikling/data/dropper/2015/11e94e20-8390-11e5-be7b-954ea56d37f6.png",
      "team": "Danmark"
    }, {
      "firstName": "Jakob ",
      "lastName": "Poulsen",
      "age": 32,
      "matches": 35,
      "nationalGoals": 2,
      "Injuries": 0,
      "number": 8,
      "shirtName": "Poulsen",
      "shirt": "http://static.ekstrabladet.dk/redaktioneludvikling/data/dropper/2015/11e94e20-8390-11e5-be7b-954ea56d37f6.png",
      "team": "Danmark"
    }, {
      "firstName": "Christian ",
      "lastName": "Eriksen",
      "age": 23,
      "matches": 55,
      "nationalGoals": 6,
      "Injuries": 0,
      "number": 10,
      "shirtName": "Eriksen",
      "shirt": "http://static.ekstrabladet.dk/redaktioneludvikling/data/dropper/2015/11e94e20-8390-11e5-be7b-954ea56d37f6.png",
      "team": "Danmark"
    }, {
      "firstName": "Pierre-Emile ",
      "lastName": "Højbjerg",
      "age": 20,
      "matches": 11,
      "nationalGoals": 1,
      "Injuries": 0,
      "number": 23,
      "shirtName": "Højbjerg",
      "shirt": "http://static.ekstrabladet.dk/redaktioneludvikling/data/dropper/2015/11e94e20-8390-11e5-be7b-954ea56d37f6.png",
      "team": "Danmark"
    }, {
      "firstName": "Martin ",
      "lastName": "Braithwaite",
      "age": 24,
      "matches": 11,
      "nationalGoals": 1,
      "Injuries": 1,
      "number": 19,
      "shirtName": "Braithwaite",
      "shirt": "http://static.ekstrabladet.dk/redaktioneludvikling/data/dropper/2015/11e94e20-8390-11e5-be7b-954ea56d37f6.png",
      "team": "Danmark"
    }, {
      "firstName": "Nicolai ",
      "lastName": "Jørgensen",
      "age": 25,
      "matches": 12,
      "nationalGoals": 0,
      "Injuries": 1,
      "number": 20,
      "shirtName": "Jørgensen",
      "shirt": "http://static.ekstrabladet.dk/redaktioneludvikling/data/dropper/2015/11e94e20-8390-11e5-be7b-954ea56d37f6.png",
      "team": "Danmark"
    }, {
      "firstName": "Viktor ",
      "lastName": "Fischer",
      "age": 21,
      "matches": 7,
      "nationalGoals": 1,
      "Injuries": 1,
      "number": 14,
      "shirtName": "Fischer",
      "shirt": "http://static.ekstrabladet.dk/redaktioneludvikling/data/dropper/2015/11e94e20-8390-11e5-be7b-954ea56d37f6.png",
      "team": "Danmark"
    }, {
      "firstName": "Nicklas ",
      "lastName": "Bendtner",
      "age": 27,
      "matches": 72,
      "nationalGoals": 29,
      "Injuries": 1,
      "number": 11,
      "shirtName": "Bendtner",
      "shirt": "http://static.ekstrabladet.dk/redaktioneludvikling/data/dropper/2015/11e94e20-8390-11e5-be7b-954ea56d37f6.png",
      "team": "Danmark"
    }, {
      "firstName": "Yussuf ",
      "lastName": "Poulsen",
      "age": 21,
      "matches": 9,
      "nationalGoals": 1,
      "Injuries": 1,
      "number": 18,
      "shirtName": "Poulsen",
      "shirt": "http://static.ekstrabladet.dk/redaktioneludvikling/data/dropper/2015/11e94e20-8390-11e5-be7b-954ea56d37f6.png",
      "team": "Danmark"
    }, {
      "firstName": "Morten ",
      "lastName": "Duncan' Rasmussen",
      "age": 30,
      "matches": 10,
      "nationalGoals": 3,
      "Injuries": 1,
      "number": 17,
      "shirtName": "Duncan ",
      "shirt": "http://static.ekstrabladet.dk/redaktioneludvikling/data/dropper/2015/11e94e20-8390-11e5-be7b-954ea56d37f6.png",
      "team": "Danmark"
    }],
    "injuries": [{
      "firstName": "Leon",
      "lastName": "Andreasen",
      "age": 21,
      "matches": 9,
      "nationalGoals": 1,
      "Injuries": 0,
      "number": 23,
      "shirtName": "Andreasen",
      "shirt": "http://static.ekstrabladet.dk/redaktioneludvikling/data/dropper/2015/11e94e20-8390-11e5-be7b-954ea56d37f6.png",
      "team": "Danmark"
    }, {
      "firstName": "Pione ",
      "lastName": "Sisto",
      "age": 30,
      "matches": 10,
      "nationalGoals": 3,
      "Injuries": 0,
      "number": 24,
      "shirtName": "Sisto",
      "shirt": "http://static.ekstrabladet.dk/redaktioneludvikling/data/dropper/2015/11e94e20-8390-11e5-be7b-954ea56d37f6.png",
      "team": "Danmark"
    }, {
      "firstName": "Andreas",
      "lastName": "Bjelland",
      "age": 21,
      "matches": 9,
      "nationalGoals": 1,
      "Injuries": 0,
      "number": 23,
      "shirtName": "Bjelland",
      "shirt": "http://static.ekstrabladet.dk/redaktioneludvikling/data/dropper/2015/11e94e20-8390-11e5-be7b-954ea56d37f6.png",
      "team": "Danmark"
    }, {
      "firstName": "Jorés ",
      "lastName": "Okore",
      "age": 30,
      "matches": 10,
      "nationalGoals": 3,
      "Injuries": 0,
      "number": 24,
      "shirtName": "Okore",
      "shirt": "http://static.ekstrabladet.dk/redaktioneludvikling/data/dropper/2015/11e94e20-8390-11e5-be7b-954ea56d37f6.png",
      "team": "Danmark"
    }],
    "substitutes": [{
      "team": "home",
      "name": "Lionel Messi",
      "score": 22,
      "class": "homeColor"
    }, {
      "team": "home",
      "name": " Daniel Agger",
      "score": 22,
      "class": "awayColor"
    }, {
      "team": "home",
      "name": " Perter andersen",
      "score": "22",
      "class": "homeColor"
    }, {
      "team": "home",
      "name": " Messi",
      "score": "22",
      "class": "awayColor"
    }, {
      "team": "home",
      "name": " Messi",
      "score": "22",
      "class": "homeColor"
    }]
  };
  $scope.home = {
    "team": "Sverige",
    "coach": "Erik Hamrén",
    "lastFive": [{
      'var': 'V',
      'order': 5
    }, {
      'var': 'V',
      'order': 4
    }, {
      'var': 'T',
      'order': 3
    }, {
      'var': 'T',
      'order': 2
    }, {
      'var': 'V',
      'order': 1
    }],
    "players": [{
      "firstName": "Patrik ",
      "lastName": "Carlgren",
      "age": 23,
      "matches": 0,
      "nationalGoals": 0,
      "Injuries": 1,
      "number": 12,
      "shirtName": "Carlgren",
      "shirt": "http://static.ekstrabladet.dk/redaktioneludvikling/data/dropper/2015/52231ef0-87b2-11e5-8446-39b787dbbc67.png",
      "team": "Sverige"
    }, {
      "firstName": "Andreas ",
      "lastName": "Isaksson",
      "age": 34,
      "matches": 125,
      "nationalGoals": 0,
      "Injuries": 1,
      "number": 1,
      "shirtName": "Isaksson",
      "shirt": "http://static.ekstrabladet.dk/redaktioneludvikling/data/dropper/2015/52231ef0-87b2-11e5-8446-39b787dbbc67.png",
      "team": "Sverige"
    }, {
      "firstName": "Robin ",
      "lastName": "Olsen",
      "age": 25,
      "matches": 2,
      "nationalGoals": 0,
      "Injuries": 1,
      "number": 23,
      "shirtName": "Olsen",
      "shirt": "http://static.ekstrabladet.dk/redaktioneludvikling/data/dropper/2015/52231ef0-87b2-11e5-8446-39b787dbbc67.png",
      "team": "Sverige"
    }, {
      "firstName": "Mikael ",
      "lastName": "Antonsson",
      "age": 34,
      "matches": 27,
      "nationalGoals": 0,
      "Injuries": 1,
      "number": 3,
      "shirtName": "Antonsson",
      "shirt": "http://static.ekstrabladet.dk/redaktioneludvikling/data/dropper/2015/52231ef0-87b2-11e5-8446-39b787dbbc67.png",
      "team": "Sverige"
    }, {
      "firstName": "Pierre ",
      "lastName": "Bengtsson",
      "age": 27,
      "matches": 23,
      "nationalGoals": 0,
      "Injuries": 1,
      "number": 17,
      "shirtName": "Bengtsson",
      "shirt": "http://static.ekstrabladet.dk/redaktioneludvikling/data/dropper/2015/52231ef0-87b2-11e5-8446-39b787dbbc67.png",
      "team": "Sverige"
    }, {
      "firstName": "Andreas ",
      "lastName": "Granqvist",
      "age": 30,
      "matches": 46,
      "nationalGoals": 2,
      "Injuries": 0,
      "number": 4,
      "shirtName": "Granqvist",
      "shirt": "http://static.ekstrabladet.dk/redaktioneludvikling/data/dropper/2015/52231ef0-87b2-11e5-8446-39b787dbbc67.png",
      "team": "Sverige"
    }, {
      "firstName": "Erik ",
      "lastName": "Johanssen",
      "age": 26,
      "matches": 6,
      "nationalGoals": 0,
      "Injuries": 0,
      "number": 25,
      "shirtName": "Johanssen",
      "shirt": "http://static.ekstrabladet.dk/redaktioneludvikling/data/dropper/2015/52231ef0-87b2-11e5-8446-39b787dbbc67.png",
      "team": "Sverige"
    }, {
      "firstName": "Sebastian ",
      "lastName": "Larsson",
      "age": 30,
      "matches": 78,
      "nationalGoals": 6,
      "Injuries": 0,
      "number": 7,
      "shirtName": "Larsson",
      "shirt": "http://static.ekstrabladet.dk/redaktioneludvikling/data/dropper/2015/52231ef0-87b2-11e5-8446-39b787dbbc67.png",
      "team": "Sverige"
    }, {
      "firstName": "Mikael ",
      "lastName": "Lustig",
      "age": 28,
      "matches": 46,
      "nationalGoals": 2,
      "Injuries": 0,
      "number": 2,
      "shirtName": "Lustig",
      "shirt": "http://static.ekstrabladet.dk/redaktioneludvikling/data/dropper/2015/52231ef0-87b2-11e5-8446-39b787dbbc67.png",
      "team": "Sverige"
    }, {
      "firstName": "Martin ",
      "lastName": "Olsson",
      "age": 27,
      "matches": 31,
      "nationalGoals": 5,
      "Injuries": 0,
      "number": 5,
      "shirtName": "Olsson",
      "shirt": "http://static.ekstrabladet.dk/redaktioneludvikling/data/dropper/2015/52231ef0-87b2-11e5-8446-39b787dbbc67.png",
      "team": "Sverige"
    }, {
      "firstName": "Marcus ",
      "lastName": "Berg",
      "age": 29,
      "matches": 33,
      "nationalGoals": 8,
      "Injuries": 0,
      "number": 19,
      "shirtName": "Berg",
      "shirt": "http://static.ekstrabladet.dk/redaktioneludvikling/data/dropper/2015/52231ef0-87b2-11e5-8446-39b787dbbc67.png",
      "team": "Sverige"
    }, {
      "firstName": "Jimmy ",
      "lastName": "Durmaz",
      "age": 26,
      "matches": 27,
      "nationalGoals": 2,
      "Injuries": 0,
      "number": 21,
      "shirtName": "Durmaz",
      "shirt": "http://static.ekstrabladet.dk/redaktioneludvikling/data/dropper/2015/52231ef0-87b2-11e5-8446-39b787dbbc67.png",
      "team": "Sverige"
    }, {
      "firstName": "Emil ",
      "lastName": "Forsberg",
      "age": 24,
      "matches": 11,
      "nationalGoals": 0,
      "Injuries": 0,
      "number": 8,
      "shirtName": "Forsberg",
      "shirt": "http://static.ekstrabladet.dk/redaktioneludvikling/data/dropper/2015/52231ef0-87b2-11e5-8446-39b787dbbc67.png",
      "team": "Sverige"
    }, {
      "firstName": "John ",
      "lastName": "Guidetti",
      "age": 23,
      "matches": 4,
      "nationalGoals": 0,
      "Injuries": 0,
      "number": 15,
      "shirtName": "Guidetti",
      "shirt": "http://static.ekstrabladet.dk/redaktioneludvikling/data/dropper/2015/52231ef0-87b2-11e5-8446-39b787dbbc67.png",
      "team": "Sverige"
    }, {
      "firstName": "Oscar ",
      "lastName": "Hiljemark",
      "age": 23,
      "matches": 6,
      "nationalGoals": 1,
      "Injuries": 0,
      "number": 12,
      "shirtName": "Hiljemark",
      "shirt": "http://static.ekstrabladet.dk/redaktioneludvikling/data/dropper/2015/52231ef0-87b2-11e5-8446-39b787dbbc67.png",
      "team": "Sverige"
    }, {
      "firstName": "Zlatan ",
      "lastName": "Ibrahimovic",
      "age": 34,
      "matches": 109,
      "nationalGoals": 59,
      "Injuries": 0,
      "number": 10,
      "shirtName": "Ibrahimovic",
      "shirt": "http://static.ekstrabladet.dk/redaktioneludvikling/data/dropper/2015/f13c3d40-887b-11e5-8fce-112a3fe88c2f.png",
      "team": "Sverige"
    }, {
      "firstName": "Abdulrahman ",
      "lastName": "Khalili",
      "age": 23,
      "matches": 1,
      "nationalGoals": 0,
      "Injuries": 0,
      "number": 18,
      "shirtName": "Khalili",
      "shirt": "http://static.ekstrabladet.dk/redaktioneludvikling/data/dropper/2015/52231ef0-87b2-11e5-8446-39b787dbbc67.png",
      "team": "Sverige"
    }, {
      "firstName": "Emir ",
      "lastName": "Kujovic",
      "age": 27,
      "matches": 0,
      "nationalGoals": 0,
      "Injuries": 0,
      "number": 16,
      "shirtName": "Kujovic",
      "shirt": "http://static.ekstrabladet.dk/redaktioneludvikling/data/dropper/2015/52231ef0-87b2-11e5-8446-39b787dbbc67.png",
      "team": "Sverige"
    }, {
      "firstName": "Kim ",
      "lastName": "Källström",
      "age": 33,
      "matches": 123,
      "nationalGoals": 16,
      "Injuries": 0,
      "number": 9,
      "shirtName": "Källström",
      "shirt": "http://static.ekstrabladet.dk/redaktioneludvikling/data/dropper/2015/52231ef0-87b2-11e5-8446-39b787dbbc67.png",
      "team": "Sverige"
    }, {
      "firstName": "Oscar ",
      "lastName": "Lewicki",
      "age": 23,
      "matches": 6,
      "nationalGoals": 0,
      "Injuries": 0,
      "number": 6,
      "shirtName": "Lewicki",
      "shirt": "http://static.ekstrabladet.dk/redaktioneludvikling/data/dropper/2015/52231ef0-87b2-11e5-8446-39b787dbbc67.png",
      "team": "Sverige"
    }, {
      "firstName": "Gustav ",
      "lastName": "Svensson",
      "age": 28,
      "matches": 3,
      "nationalGoals": 0,
      "Injuries": 0,
      "number": 11,
      "shirtName": "Svensson",
      "shirt": "http://static.ekstrabladet.dk/redaktioneludvikling/data/dropper/2015/52231ef0-87b2-11e5-8446-39b787dbbc67.png",
      "team": "Sverige"
    }, {
      "firstName": "Ola ",
      "lastName": "Toivonen",
      "age": 29,
      "matches": 45,
      "nationalGoals": 9,
      "Injuries": 0,
      "number": 20,
      "shirtName": "Toivonen",
      "shirt": "http://static.ekstrabladet.dk/redaktioneludvikling/data/dropper/2015/52231ef0-87b2-11e5-8446-39b787dbbc67.png",
      "team": "Sverige"
    }, {
      "firstName": "Erkan ",
      "lastName": "Zengin",
      "age": 30,
      "matches": 18,
      "nationalGoals": 3,
      "Injuries": 0,
      "number": 22,
      "shirtName": "Zengin",
      "shirt": "http://static.ekstrabladet.dk/redaktioneludvikling/data/dropper/2015/52231ef0-87b2-11e5-8446-39b787dbbc67.png",
      "team": "Sverige"
    }],
    "injuries": [{
      "firstName": "Albin ",
      "lastName": "Ekdal",
      "age": 34,
      "matches": 125,
      "nationalGoals": 0,
      "Injuries": 0,
      "number": 2,
      "shirtName": "Ekdal",
      "shirt": "http://static.ekstrabladet.dk/redaktioneludvikling/data/dropper/2015/52231ef0-87b2-11e5-8446-39b787dbbc67.png",
      "team": "Sverige"
    }, {
      "firstName": "Pontus ",
      "lastName": "Wernblom",
      "age": 25,
      "matches": 2,
      "nationalGoals": 0,
      "Injuries": 0,
      "number": 3,
      "shirtName": "Wernblom",
      "shirt": "http://static.ekstrabladet.dk/redaktioneludvikling/data/dropper/2015/52231ef0-87b2-11e5-8446-39b787dbbc67.png",
      "team": "Sverige"
    }],
    "substitutes": [{
      "team": "home",
      "name": "Lionel Messi",
      "score": 22,
      "class": "homeColor"
    }, {
      "team": "home",
      "name": " Daniel Agger",
      "score": 22,
      "class": "awayColor"
    }, {
      "team": "home",
      "name": " Perter andersen",
      "score": 22,
      "class": "homeColor"
    }, {
      "team": "home",
      "name": " Messi",
      "score": 22,
      "class": "awayColor"
    }, {
      "team": "home",
      "name": " Messi",
      "score": 22,
      "class": "homeColor"
    }]
  };
  $scope.lastFive = [{
    "type": "Venskabskamp",
    "date": "28. maj 2014",
    "home": "danmark",
    "away": "sverige",
    "score": "1-0",
    "winner": "Danmark",
    "header": "awayColor",
    "homeGoals": [{
      "time": "90'",
      "player": "Agger",
    }],
    "awayGoals": [{
      "time": "",
      "player": "",
      "team": ""
    }],
  }, {
    "type": "Venskabskamp",
    "date": "11. november 2011",
    "home": "danmark",
    "away": "sverige",
    "score": "2-0",
    "winner": "Danmark",
    "header": "awayColor",
    "homeGoals": [{
      "time": "35'",
      "player": "Bendtner",
    }, {
      "time": "80'",
      "player": "Krohn-Dehli",
    }],
    "awayGoals": [{
      "time": "",
      "player": "",
      "team": ""
    }],
  }, {
    "type": "VM-kvalifikation",
    "date": "10. oktober 2009",
    "home": "danmark",
    "away": "sverige",
    "score": "1-0",
    "winner": "Danmark",
    "header": "awayColor",
    "homeGoals": [{
      "time": "78'",
      "player": "Poulsen",
    }],
    "awayGoals": [{
      "time": "",
      "player": "",
      "team": ""
    }],
  }, {
    "type": "VM-kvalifikation",
    "date": "6. juni 2009",
    "home": "sverige",
    "away": "danmark",
    "score": "0-1",
    "winner": "Danmark",
    "header": "awayColor",
    "homeGoals": [{
      "time": "",
      "player": "",
      "team": ""
    }],
    "awayGoals": [{
      "time": "22'",
      "player": "Kahlenberg",
      "team": "away"
    }]
  }, {
    "type": "EM-kvalifikation",
    "date": "8. september 2007",
    "home": "sverige",
    "away": "danmark",
    "score": "0-0",
    "winner": "Tie",
    "header": "tie",
    "homeGoals": [{
      "time": "",
      "player": "",
      "team": ""
    }],
    "awayGoals": [{
      "time": "",
      "player": "",
      "team": ""
    }]
  }]
  $scope.topscore = [{
    "team": "home",
    "class": "awayColor",
    "name": "Poul ’Tist’ Nielsen ",
    "score": 15,
  }, {
    "team": "home",
    "class": "awayColor",
    "name": "Pauli Jørgensen ",
    "score": 12,
  }, {
    "team": "away",
    "class": "homeColor",
    "name": "Gunnar Nordahl ",
    "score": 11,
  }, {
    "team": "away",
    "class": "homeColor",
    "name": "Gunnar Gren ",
    "score": 7,
  }, {
    "team": "home",
    "class": "awayColor",
    "name": "Kaj Hansen ",
    "score": 6,
  }, {
    "team": "home",
    "class": "awayColor",
    "name": "Ole Madsen ",
    "score": 6,
  }, {
    "team": "away",
    "class": "homeColor",
    "name": "Nils-Åke Sandell ",
    "score": 6,
  }, {
    "team": "awayColor",
    "class": "awayColor",
    "name": "Bertil Ericsson",
    "score": 6,
  }]
}]);
app.directive('topHeader', function() {
  return {
    restrict: 'E',
    transclude: true,
    templateUrl: 'parts/top-header.html',
    link: function(scope, element, attrs) {
      function getTimeRemaining(endtime) {
        var t = Date.parse(endtime) - Date.parse(new Date());
        var seconds = Math.floor((t / 1000) % 60);
        var minutes = Math.floor((t / 1000 / 60) % 60);
        var hours = Math.floor((t / (1000 * 60 * 60)));
        var days = Math.floor(t / (1000 * 60 * 60)) % 24;
        return {
          'total': t,
          'days': days,
          'hours': hours,
          'minutes': minutes,
          'seconds': seconds
        };
      }

      function initializeClock(id, endtime) {
        var clock = document.getElementById(id);
        var hoursSpan = clock.querySelector('.hours');
        var minutesSpan = clock.querySelector('.minutes');
        var secondsSpan = clock.querySelector('.seconds');
        var daysSpan = clock.querySelector('.days');

        function updateClock() {
          var t = getTimeRemaining(endtime);

          // daysSpan.innerHTML = t.days;
          hoursSpan.innerHTML = t.hours;
          minutesSpan.innerHTML = ('0' + t.minutes).slice(-2);
          secondsSpan.innerHTML = ('0' + t.seconds).slice(-2);

          if (t.total <= 0) {
            clearInterval(timeinterval);
          }
        }

        updateClock();
        var timeinterval = setInterval(updateClock, 1000);
      }

      var deadline = 'November 14 2015 20:45:00 UTC+0200';
      initializeClock('clockdiv', deadline);

    }
  };
});

app.directive('dual', function() {
  return {
    restrict: 'E',
    transclude: true,
    templateUrl: 'parts/dual.html',
    link: function(scope, element, attrs) {
      var maxValue = 15;
      scope.caclwidth = function(maxvalue, thisValue) {
        return thisPct = (thisValue / maxValue) * 100 + "%";
      };
      var dataset = [{
        label: '40',
        count: 40
      }, {
        label: '18',
        count: 18
      }, {
        label: '45',
        count: 45
      }, ];

      var width = d3.select('#chart')[0][0].offsetWidth - 20;
      var height = 350;
      var radius = Math.min(width, height) / 2;
      var donutWidth = 35;

      var color = d3.scale.category20b();
      var color = d3.scale.ordinal()
        .range(['#BE0F0F', 'black', '#005ABE']);

      var svg = d3.select('#chart')
        .append('svg')
        .attr('width', width)
        .attr('height', height)
        .append('g')
        .attr('transform', 'translate(' + (width / 2) + ',' + (height / 2) + ')');

      var arc = d3.svg.arc()
        .innerRadius(radius - donutWidth) // NEW
        .outerRadius(radius);

      var pie = d3.layout.pie()
        .value(function(d) {
          return d.count;
        })
        .startAngle(-1.5707963268)
        .endAngle(1.5707963268)
        .sort(null);

      var path = svg.selectAll('path')
        .data(pie(dataset))
        .enter()
        .append('path')
        .attr('d', arc)
        .attr('fill', function(d, i) {
          return color(d.data.label);
        });

      var text = svg.selectAll('text')
        .data(pie(dataset))
        .enter()
        .append('text')
        .text(function(d) {
          return d.value;
        })
        .attr('text-anchor', 'middle')
        .attr('alignment-baseline', 'middle')
        .attr('fill', '#fff')
        .attr('transform', function(d) {
          return 'translate(' + arc.centroid(d) + ')';
        });

    }
  };
});

app.directive('preText', function() {
  return {
    restrict: 'E',
    transclude: true,
    templateUrl: 'parts/pre-text.html'
  };
});

app.directive('lastFive', function() {
  return {
    restrict: 'E',
    transclude: true,
    templateUrl: 'parts/last-five.html'
  };
});

app.directive('awayFavorites', function() {
  return {
    restrict: 'E',
    transclude: true,
    templateUrl: 'parts/away-favorites.html'
  };
});

app.directive('headsUp', function() {
  return {
    restrict: 'E',
    transclude: true,
    templateUrl: 'parts/heads-up.html'
  };
});

app.directive('lineUp', function() {
  return {
    restrict: 'E',
    transclude: true,
    templateUrl: 'parts/line-up.html'
  };
});

app.directive('injuries', function() {
  return {
    restrict: 'E',
    transclude: true,
    templateUrl: 'parts/injuries.html'
  };
});

app.directive('homeText', function() {
  return {
    restrict: 'E',
    transclude: true,
    templateUrl: 'parts/home-text.html'
  };
});

app.directive('info', function() {
  return {
    restrict: 'E',
    transclude: true,
    templateUrl: 'parts/info.html',
    link: function(scope, element, attrs) {
      scope.infobtn = 0;
      scope.allPlayers = scope.home.players.concat(scope.away.players);
      scope.heightArray = [];

      scope.testHeight = function() {
        var intervals = document.getElementsByClassName('intervals');

        for (var k = 0; k < intervals.length; k++) {
          intervals[k].style.height = 'auto';
        }
        window.setTimeout(function() {
          if (window.innerWidth > 567) {
            for (var i = 0; i < intervals.length; i++) {
              var elmHeight = document.getElementsByClassName('intervals');
              scope.heightArray.push(elmHeight[i].offsetHeight);
            }
            scope.max = Math.max(parseInt(scope.heightArray));
            scope.heightArray = [];
            for (var j = 0; j < intervals.length; j++) {
              intervals[j].style.height = scope.max + 10 + 'px';
              if (scope.infobtn == 2) {
                intervals[j].style.height = 1218 + 10 + 'px';
              }
            }
          };
        }, 10)
      };
      window.setTimeout(function() {
        scope.testHeight();
      }, 1000)

    }
  };
});

app.directive('stadium', function() {
  return {
    restrict: 'E',
    transclude: true,
    templateUrl: 'parts/stadium.html'
  };
});

app.directive('shirt', function() {
  return {
    restrict: 'E',
    transclude: true,
    templateUrl: 'parts/shirt.html'
  };
});
