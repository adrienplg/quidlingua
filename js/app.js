(function (){
	var app = angular.module('quidlingua', ['quidlingua-mainpage']);

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
      controllerAs: 'bsNavbarCtrl'
    };
  });

  app.directive('qlNavbar', function(){
    return{
      restrict: 'E',
      templateUrl: 'views/navbar/ql-navbar.html',
      controller: function(){

      },
      controllerAs: 'navbarCtrl'
    };
  });

  app.directive('qlFooter', function(){
    return{
      restrict: 'E',
      templateUrl: 'views/footer/ql-footer.html',
      controller: function(){

      },
      controllerAs: 'footerCtrl'
    };
  });

})();
