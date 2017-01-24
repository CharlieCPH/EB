var url = 'https://spreadsheets.google.com/feeds/list/1oCHXRn5xlyyO-c_9ytieQYweXR2lytFxJ471HXcGNH0/default/public/values?alt=json-in-script&callback=JSON_CALLBACK';
var app = angular.module('App', ['ngDraggable', 'ngTouch']);
var success = document.getElementById("success");
var fail = document.getElementById("fail");
var quiz = document.getElementById("quiz");
var svarContWidth = document.querySelector(".svar").offsetWidth;
var textHeights = document.querySelector("#text-block").offsetHeight;
var sprg, dropper = true;
document.querySelector(".svar").style.height = svarContWidth +'px';
document.querySelector(".svar1").style.height = svarContWidth +'px';
document.querySelector(".questphoto").style.height = svarContWidth +'px';
document.querySelector(".logo").style.height = svarContWidth +'px';
document.querySelector(".logo1").style.height = svarContWidth +'px';
document.querySelector("#fail").style.height = svarContWidth +'px';
document.querySelector("#success").style.height = svarContWidth +'px';
document.querySelector(".bannertxt").style.top = svarContWidth-25 +'px';
document.querySelector(".bannertxt1").style.top = svarContWidth-25 +'px';
document.querySelector(".sprgtxt").style.top = svarContWidth-23 +'px';
document.querySelector(".glyphicon-remove").style.paddingTop = svarContWidth/2 - 35 +'px';
document.querySelector(".glyphicon-ok").style.paddingTop = svarContWidth/2  - 35+'px';
document.querySelector("html").style.height = svarContWidth*3+ textHeights + 55 +'px';
document.querySelector("body").style.height = svarContWidth*3+ textHeights + 55 +'px';

app.filter('slice', function() {
  return function(arr, start, end) {
    return (arr || []).slice(start, end);
  };
});
app.controller('AppCtrl', function($scope, $http, $timeout) {
  var analInit = true;
  $scope.questIndex = 0;
  $scope.categories;
  function analyse() {
    if (analInit) {
      analInit = false;
      ga('send', {'hitType': 'event','eventCategory': 'game of thrones - quiz','eventAction': 'firstClick','eventLabel': 'features'});
    };
  };
  var shuffleArray = function(array) {
    var m = array.length,
      t, i;
    while (m) {
      i = Math.floor(Math.random() * m--);
      t = array[m];
      array[m] = array[i];
      array[i] = t;
    }
    return array;
  }
    $http.jsonp(url).then(function(response) {
    $scope.categories = [];
    $scope.question = [];
    $scope.droppedObjects = [];
    $scope.nodroppedObjects = [];
    $scope.banner = 'http://static.ekstrabladet.dk/redaktioneludvikling/data/images/2016/got/signals/';
    $scope.imagesDir = 'http://static.ekstrabladet.dk/redaktioneludvikling/data/images/2016/got/imgs/';

    $scope.idArray = [];

    $scope.categories = parse(response.data);
    $scope.question = angular.copy($scope.categories);

    $scope.imgCount = $scope.question.length;
    $scope.end = false
    $scope.msg = 'Har du overhovedet set Game of Thrones?';
    shuffleArray($scope.question);
		sprg = $scope.question[$scope.questIndex];
  });

  $scope.toggleCenterAnchor = function() {
    $scope.centerAnchor = !true;
  }
	$scope.clickComplete = function(datum){
		analyse();
    var data = JSON.parse(datum);
    $scope.onDropComplete(data,$scope.question[$scope.questIndex]);
  }
  $scope.onDropComplete = function(data, evt) {
    if(dropper == true){
    analyse();
    var index = $scope.droppedObjects.indexOf(data);
    var indexDrag = $scope.question.indexOf(data);
    if (data.id != $scope.question[$scope.questIndex].id ) {
      fail.style.opacity = 1;
			fail.style.display = 'block';
      dropper = false;
      $timeout(function() {
        fail.style.opacity = 0;
				fail.style.display = 'none';
        $scope.questIndex++;
        dropper = true;
      }, 600);
      // $scope.question.splice(indexDrag, 1);
      $scope.nodroppedObjects.push($scope.question[$scope.questIndex]);
    } else {
      success.style.opacity = 1;
			success.style.display = 'block';
      dropper = false;
      $timeout(function() {
        success.style.opacity = 0;
				success.style.display = 'none';
        $scope.questIndex++;
        dropper = true;
      }, 600);
      if (index == -1) {
        $scope.droppedObjects.push($scope.question[$scope.questIndex]);
      };

      if ($scope.droppedObjects.length >= 1 && $scope.droppedObjects.length <= 4) {
        $scope.msg = 'Det er ikke meget, du ved om Game of Thrones. Du har meget til gode, og vi er endda nået til sæson 6!';
      };
      if ($scope.droppedObjects.length >= 5 && $scope.droppedObjects.length <= 8) {
        $scope.msg = 'Det er ikke meget, du ved om dynastierne; gense eventuelt sæsonerne 1-5, og få mere ud af sæson 6.';
      };
      if ($scope.droppedObjects.length >= 9 && $scope.droppedObjects.length <= 12) {
        $scope.msg = 'Flot! Du har et godt kendskab til dynastierne. Start din træning som maester!';
      };
      if ($scope.droppedObjects.length >= 13 && $scope.droppedObjects.length <= 16) {
        $scope.msg = 'Du har fortjent en plads som kongens højre hånd. Din viden om dynastierne i Westeros måler sig med Tyrion Lannisters';
      };
      if ($scope.droppedObjects.length >= 17 ) {
        $scope.msg = 'Med din viden er jerntronen så godt som din. Du har en krage i hvert et hjørne af Westeros!';
      };
    };
    if ($scope.droppedObjects.length + $scope.nodroppedObjects.length == $scope.question.length) {
      $scope.end = true;
    };
}
  };
  var inArray = function(array, obj) {
    var index = array.indexOf(obj);
  }

  // RF Gist: https://gist.github.com/avector/19d4594a0430205613fb
  var parse = function(response) {
    var i,
      row,
      newRow,
      newRows,
      dollarIndex;

    newRows = [];

    if ((response && response.feed) && response.feed.entry) {
      for (i = 0; i < response.feed.entry.length; i++) {
        row = response.feed.entry[i];
        newRow = {};
        var key;
        for (key in row) {
          if (row.hasOwnProperty(key)) {
            dollarIndex = key.indexOf('$');
            if (dollarIndex !== -1) {
              newRow[key.substring(dollarIndex + 1)] = row[key].$t;
            }
          }
        }
        newRows.push(newRow);
      }
    }
    return newRows;
  };
});
