<!DOCTYPE html>
<html lang="en" ng-app="filterApp">
    <head>
    <meta charset="utf-8">
    <title>Mænd der dræber</title>
    <meta name="viewport" content="width=device-width,initial-scale=1" />
    <meta name="description" content="">
    <meta name="author" content="ekstrabladet.dk - redaktionelle udviklings team">
    <meta name="robots" content="noindex" />
    <link rel="stylesheet" type="text/css" href="../../helpers/bower_components/bootstrap/dist/css/bootstrap.min.css">
    <link href='http://fonts.googleapis.com/css?family=Special+Elite' rel='stylesheet' type='text/css'>
    <link rel="stylesheet" type="text/css" href="../../helpers/css/ebstyles.css">
    <link rel="stylesheet" type="text/css" href="dist/frontend.css">
    <script src="../../helpers/bower_components/angularjs/angular.min.js"></script>
    <script src="../../helpers/bower_components/angular-animate/angular-animate.min.js"></script>
    <script src="../../helpers/bower_components/underscore/underscore-min.js"></script>
    <!-- HTML5, for IE6-8 support of HTML5 elements -->
    <!--[if lt IE 9]>
        <script src="//cdnjs.cloudflare.com/ajax/libs/html5shiv/3.7/html5shiv.js"></script>
    <![endif]-->
    </head>
    <body ng-controller="AppCtrl">
        <header>
            <h1>Mænd der dræber deres kvinder</h1>
        </header>
        <div class="container-fluid">
            <div class="spinner" ng-show="loading">
                <img src="../../helpers/gfx/spinner.gif" alt="loading" style="max-width:150px;"/>
            </div>
            <div class="row" ng-show="!loading">
                <div class="col-sm-12">
                    <input ng-model="query" placeholder="Søg efter offer" autofocus class="form-control">
                </div>
            </div>
            <div class="row">
                <div class="col-xs-4">
                    <div class="form-group">
                        <label>Drabsmetode</label>
                        <select ng-model="weaponselect" class="form-control" ng-options="weapon.name as weapon.name for weapon in weapons">
                            <option value="">Alle våben</option>
                        </select>
                    </div>
                </div>
                <div class="plus col-xs-1">
                    <span class="glyphicon glyphicon-plus plus"></span>
                </div>
                <div class="col-xs-2">
                   <div class="form-group">
                        <label>År</label>
                        <select ng-model="yearselect" class="form-control" ng-options="year.name as year.name for year in year">
                              <option value="">Alle år</option>
                        </select>
                   </div>
                </div>
                   <div class="plus col-xs-1">
                    <span class="glyphicon glyphicon-plus plus"></span>
                </div>
                <div class="col-xs-4">
                   <div class="form-group">
                        <label>Region</label>
                        <select ng-model="regionsselect" class="form-control" ng-options="region.name as region.name for region in regions">
                              <option value="">Alle regioner</option>
                        </select>
                   </div>
                </div>
            </div>

            <!-- Counter -->
            <div class="row">
                <div class="counter col-xs-12">
                    <label>
                       Du ser {{(items | filter:query | filter:regionsselect | filter:yearselect | filter:weaponselect).length}} ud af de {{(items).length}} partnerdrab på kvinder, som Ekstra Bladet har fundet frem til.
                    </label>
                </div>
            </div>

            <div class="folder" ng-repeat="item in items | filter:query | filter:regionsselect:true | filter:yearselect:true | filter:weaponselect:true | orderBy:dato:reverse ">
                <div class="row" ng-class="{folderback: showMore}">
                    <div class="background"></div>
                    <div class="absolute leftfolder">
                        <a href="#" ng-click="showMore = ! showMore">Kort om sagen</a>
                    </div>
                    <div class="absolute rightfolder">
                        <a href="#" ng-click="showMore = ! showMore" class="absolute">Mere om drabet</a>
                    </div>
                </div>
                <div class="row bg">
                    <div class="col-md-12">
                        <div ng-hide="showMore">
                            <div class="col-xs-6">
                                <ul>
                                    <li>{{item.datosomtekst}}</li>
                                    <li>Offer: {{item.offer}} ({{item.aldero}})</li>
                                    <li>Drabsmand: {{item.morder}} ({{item.alderm}})</li>
                                    <li>Metode: {{item.vaaben}}</li>
                                    <li>Adresse: {{item.adresse}}</li>

                                </ul>
                            </div>
                            <div class="col-xs-6">
                                <img class="regionmap" src="http://static.ekstrabladet.dk/redaktioneludvikling/data/images/2014/maendderdraeber/reg_{{item.region}}.png" alt="{{item.region}}" />
                            </div>
                        </div>
                        <div ng-show="showMore">
                            <h2>Drabet på {{item.offer}}</h2>
                            <div class="col-md-6">
                                <h4>Om parret</h4>
                                <p ng-bind-html="renderHtml(item.omdem)"></p>
                                <h4>Om drabet</h4>
                                <p ng-bind-html="renderHtml(item.sagenkort)"></p>
                            </div>
                            <div class="row">
                                <div class="col-xs-6 col-sm-6 col-md-6 col-lg-6 fakta">
                                    <h4>Fakta</h4>
                                    <strong>Forholdets længde:</strong><p> {{item.forholdetslaengde}}.</p>
                                    <strong>Dom:</strong><p> {{item.dom}}.</p>
                                    <strong>Motiv:</strong><p> {{item.motiv}}. {{item.motivforklaring}}.</p>
                                </div>
                                <div class="col-xs-5 col-sm-6 col-md-6 col-lg-6 pull-right">
                                    <img class="sagsimg" ng-src="img/img/{{item.nytid}}-sag.jpg" onerror="this.src='http://static.ekstrabladet.dk/redaktioneludvikling/data/images/2014/maendderdraeber/Silhouet.jpg'" alt="Foto fra sagen" />
                                    <img class="paperclip" ng-src="http://static.ekstrabladet.dk/redaktioneludvikling/data/images/2014/maendderdraeber/paperclip.png"/>  <br><br><br><br><br><br><br><br><br>
                                </div> <!-- images -->
                            </div><!-- fakta and image box -->
                        </div><!--showMore div end -->
                    </div>
                </div><!-- end row -->
            </div><!-- end case -->
        </div><!-- end container-fluid -->
    <!-- <script src="dist/app.js"></script> -->
    <script src="app.js"></script>
    <script src="../../helpers/js/client.js"></script>
    </body>
</html>
