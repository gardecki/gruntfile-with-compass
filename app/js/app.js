var myApp = angular.module('myApp', ['ui.router']);

myApp.config(['$stateProvider', '$urlRouterProvider', function($stateProvider, $urlRouterProvider) {

	$urlRouterProvider.when('/',"/sprites"); 
    $stateProvider
		.state("parent", {
			url: "/",
			templateUrl: 'views/parent.html',
		})
			.state("parent.sprites", {
				url: "sprites",
				templateUrl: 'views/sprites.html',
				controller: 'spritesCtrl'
			});  
}]);
