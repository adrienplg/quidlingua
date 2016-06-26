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

  app.directive('qlTeam', function(){
    return{
      restrict: 'E',
      templateUrl: 'views/mainpage/ql-team.html',
      controller: function(){

      },
      controllerAs: 'teamCtrl'
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