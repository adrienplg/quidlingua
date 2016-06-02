(function (){
  var app = angular.module('quidlingua-mainpage', []);

  app.directive('qlMainpage', function(){
    return{
      restrict: 'E',
      templateUrl: 'views/mainpage/ql-mainpage.html',
      controller: function(){

      },
      controllerAs: 'mainpageCtrl'
    };
  });

  app.directive('qlContact', function(){
    return{
      restrict: 'E',
      templateUrl: 'views/mainpage/ql-contact.html',
      controller: function(){

      },
      controllerAs: 'contactCtrl'
    };
  });

  app.directive('qlTeam', function(){
    return{
      restrict: 'E',
      templateUrl: 'views/mainpage/ql-team.html',
      controller: function(){

      },
      controllerAs: 'teamCtrl'
    };
  });

  app.directive('qlServices', function(){
    return{
      restrict: 'E',
      templateUrl: 'views/mainpage/ql-services.html',
      controller: function(){

      },
      controllerAs: 'servicesCtrl'
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

})();