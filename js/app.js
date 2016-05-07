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
      controllerAs: 'bsNavbarCtrl'
    };
  });

  app.directive('qlMainpage', function(){
    return{
      restrict: 'E',
      templateUrl: 'views/mainpage/ql-main.html',
      controller: function(){

      },
      controllerAs: 'mainpageCtrl'
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

  app.directive('qlQuote', function(){
    return{
      restrict: 'E',
      templateUrl: 'views/mainpage/ql-quote.html',
      controller: function(){

      },
      controllerAs: 'quoteCtrl'
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
