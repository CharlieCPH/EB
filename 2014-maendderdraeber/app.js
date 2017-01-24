/*global angular:false */
/*global _:false */
var app = angular.module('filterApp', []);

app.controller('AppCtrl', function($scope, $http, $sce){
    'use strict';
    $scope.loading = true;

    var url = 'https://spreadsheets.google.com/feeds/list/1KMq3vY5fwFfLWppH8-2cvUA-wL4aH5_Yoi7loemvmqU/default/public/values?alt=json-in-script&callback=JSON_CALLBACK';

    $http.jsonp(url).then(function (response) {
        $scope.items = parse(response.data);
        $scope.loading = false;
        $scope.createSelectBoxes($scope.items);
    });
    $scope.createSelectBoxes = function (items){
        $scope.weapons = [{name:'', value:' '}];
        $scope.year = [{name:'', value:' '}];
        $scope.regions = [{name:'', value:' '}];

        angular.forEach(items, function(item) {
            $scope.weapons.push({name: item.vaaben, value: item.vaaben});
            $scope.year.push({name: item.år, value: item.år});
            $scope.regions.push({name: item.region, value: item.region});
        });

        $scope.weapons = _.uniq($scope.weapons, function(item, key, name){
            return item.name;
        });
        $scope.year = _.uniq($scope.year, function(item, key, name){
            return item.name;
        });
        $scope.regions = _.uniq($scope.regions, function(item, key, name){
            return item.name;
        });

        function compare(a,b) {
            if (a.value < b.value){
                return -1;
            }
            if (a.value > b.value){
                return 1;
            }
            return 0;
        }
        $scope.year.sort(compare);

        // $scope.weaponselect = $scope.weapons.name;
        // $scope.yearselect = $scope.year.name;
        // $scope.regionsselect = $scope.regions.name;

    };

    $scope.renderHtml = function(html_code) {
        return $sce.trustAsHtml(html_code);
    };

    // RF Gist: https://gist.github.com/avector/19d4594a0430205613fb
    var parse = function(response){
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
                            newRow[key.substring(dollarIndex+1)] = row[key].$t;
                        }
                    }
                }
                newRows.push(newRow);
            }
        }

        return newRows;
    };
});

app.directive('a', function() {
    'use strict';
    return {
        restrict: 'E',
        link: function(scope, elem, attrs) {
            if(attrs.ngClick || attrs.href === '' || attrs.href === '#'){
                elem.on('click', function(e){
                    e.preventDefault();
                });
            }
        }
   };
});