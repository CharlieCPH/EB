var dummyurl = 'http://datared-eb15-0.herokuapp.com/d/188.178.198.158?alt=json-in-script&callback=JSON_CALLBACK';
var realurl = 'http://datared-eb15-0.herokuapp.com?alt=json-in-script&callback=JSON_CALLBACK';
var url = realurl;
var app = angular.module('App', []);
// var mq = window.matchMedia( "(min-width: 420px)" );
// var mqa = window.matchMedia( "(max-width: 420px)" );

// var switcher = 2;
app.controller('AppCtrl', ['$scope', '$http', function($scope, $http) {


  if (/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)) {
    $scope.mobileSwitcher = true;

  }
  $scope.switcher = 2;
  $scope.data = 'unknown';
  // $http.jsonp(url).success(function(data) {
  //   $scope.data = data;
  //   $scope.ports = $scope.data.ports;
  //   $scope.switcher = 2;
  //   $scope.spinner = angular.element(document.querySelector('#spinner'));
  //   $scope.textwrapper = angular.element(document.querySelector('#textwrapper'));
  //   $scope.textbox = angular.element(document.querySelector('#textbox'));
  //   $scope.mailContentIp = $scope.data.ip;
  //   $scope.mailContent = '';
  //   $scope.mailStart = 'Ekstra Bladet har registreret et potentielt sikkerhedshul på din IP-adresse, men måske er alt i orden alligevel. Vores undersøgelse gav følgende svar, som du kan bruge til tjekke din it-sikkerhed:'+'%0D%0A'+'%0D%0A';
  //   $scope.mailEnd = '%0D%0A'+'Sådan tjekker du, om alt er ok'+'%0D%0A'+'Du skal bruge en computer, som ikke er på dit hjemmenetværk. Det kan være fra din telefon, din nabos internet eller adgangen fra biblioteket.'+'%0D%0A'+'%0D%0A'+' Tast IP-adressen ind i internetbrowseren, og se, hvad der popper op. Hvis du f.eks. finder dit overvågningskamera, så tjek, om det er beskyttet med en kode.'+'%0D%0A'+'%0D%0A'+'Testen er kun vejledende'+'%0D%0A'+'%0D%0A'+'- Vores undersøgelse af dansk internetsikkerhed blev lavet tidligere i år. Du kan altså have fået et hul i sikkerheden, selv om vi ikke har det registreret.'+'%0D%0A'+'%0D%0A'+'- Vi har undersøgt meget, men ikke alt. Ligger dit udstyr på en "special-port", har vi ikke undersøgt det.'+'%0D%0A'+'%0D%0A'+'- Selv om du er registreret med et potentielt sikkerhedshul, kan alting være i orden.'+'%0D%0A'+'%0D%0A'+'- Det kan være, at du har udstyr koblet til internettet, som der skal være adgang til. Nogle internetudbydere leverer f.eks. routere og modemmer, som skal være åbne, så udbyderen kan få adgang og løbende opdatere udstyret.'+'%0D%0A'+'%0D%0A'+'- I helt specielle tilfælde kan testen vise et potentielt sikkerhedshul hos en anden person. Det sker, hvis du har overtaget din nuværende IP-adresse fra en tidligere bruger.';
  //   $scope.regards ='%0D%0A'+'%0D%0A'+'Venlig Hilsen Ekstra Bladet';
  //   for (var i = $scope.ports.length - 1; i >= 0; i--) {
  //     $scope.mailContent += ('http://' + $scope.mailContentIp + ':' + $scope.ports[i].port + ' - ' + $scope.ports[i].report) + '%0D%0A';
  //   };
  //
  // });
  // $http.jsonp(url).error(function(data){
  //   document.querySelector(".content").innerHTML = "<h1 style='text-align:center;'>Ups, der skete en fejl</h1> <br> <p style='text-align:center;'>Der er desværre ikke hul igennem til serveren<br> Dette sker, når der er mange som checker deres netsikkerhed samtidigt</p><br><button style='margin:auto;' class='btn primary' onclick='location.reload();' onclick='ebComscore.sendComscoreNonPageview({ 'le_type': 'webapp', 'le_name':'ebinteractive', 'le_label':'reload'});'>Prøv igen</button>";
  // });
  $scope.toggle = function() {
    $scope.switcher = $scope.switcher + 1;


    setTimeout(function() {
      document.getElementById("spinner").style.display = "none";
      document.getElementById("textwrapper").style.display = "block";
      if (3 >= 1) {
      }
    }, 1000);
  };
}]);
