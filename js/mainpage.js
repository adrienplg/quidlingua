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