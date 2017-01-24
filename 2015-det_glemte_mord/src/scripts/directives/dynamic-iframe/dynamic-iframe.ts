angular.module('dynamicIframeDirective', [])
  .directive('dynamicIframe', function() {
    return {
      restrict: "A",
      link: function(scope, ele, attrs) {
        var vw = Math.max(document.documentElement.clientWidth, window.innerWidth || 0);
        var mobileHeight = attrs.mobile;
        // 767 is Hypes mobile breakpoint
        if (vw < 950) {
          angular.element(ele[0])[0].height = mobileHeight;
        }
      }
    }
  });