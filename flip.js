var App = angular.module("app",[]);

App.controller("MyCtrl",function($scope){

});

App.directive('card', function () {
        return {
            restrict: 'EA',
            scope: true, 
            link: function($scope, $elem, $attrs) {
                angular.forEach(['front', 'back'], function(name) {
                    var el = $elem.find(name);
					angular.element(el[0]).css('-webkit-transition', 'all 0.5s ease-in-out');
                });
                $scope.flip = function() {
                    $elem.toggleClass('flipped');
                }
            }
        };
 });
var App = angular.module("app",[]);

App.controller("MyCtrl",function($scope){

});

App.directive('card', function () {
        return {
            restrict: 'EA',
            scope: true, 
            link: function($scope, $elem, $attrs) {
                angular.forEach(['front', 'back'], function(name) {
                    var el = $elem.find(name);
					angular.element(el[0]).css('-webkit-transition', 'all 0.5s ease-in-out');
                });
                $scope.flip = function() {
                    $elem.toggleClass('flipped');
                }
            }
        };
 });