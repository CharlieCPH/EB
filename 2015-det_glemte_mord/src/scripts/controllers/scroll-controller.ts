angular.module('scrollCtrl', [])
  .controller('scrollController', function($timeout, $scope) {



    if (!(/Android|iPhone|iPad|iPod|BlackBerry/i).test(navigator.userAgent || navigator.vendor || window.opera)) {
      $timeout(function() {
        skrollr.init({
          smoothScrolling: true,
          forceHeight: false,
          constants: {
            vh: function() {
              return Math.max(document.documentElement.clientHeight, window.innerHeight || 0);
            },
            th: function() {
              return document.getElementById('skrollr-body').offsetHeight;
            }
          }
        });
      });
    }

});
