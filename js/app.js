(function (){

	// Main module
	var app = angular.module('quidLingua', []);

	// Index page controller
	app.controller('MainPageController', function(){
		var frenchMainPage = { name: 'french_main', url: 'fr/index.html'}
	});

  app.directive('bootstrapNavbar', function(){
    return{
      restrict: 'E',
      templateUrl: 'views/navbar/bs-navbar.html',
      controller: function(){

      },
      controllerAs: 'bsNavbar'
    };
  });

  app.directive('qlNavbar', function(){
    return{
      restrict: 'E',
      templateUrl: 'views/navbar/ql-navbar.html',
      controller: function(){

      },
      controllerAs: 'qlNavbar'
    };
  });

})();
