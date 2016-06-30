(function (){
  var app = angular.module('quidlingua', []);

  app.directive('qlNavbar', function(){
    return{
      restrict: 'E',
      templateUrl: 'views/navbar/ql-navbar.html',
      controller: function(){

        this.setActiveLang = function(lang) {
          // get both language links
          var enLangLink = angular.element(document.querySelector('#enLang'));
          var frLangLink = angular.element(document.querySelector('#frLang'));
          // activate the english link
          if (lang === 'en'){
            enLangLink.attr('class',"active");
            frLangLink.removeAttr('class',"active");
          }
          // activate the french link
          if (lang === 'fr'){
            frLangLink.attr('class',"active");
            enLangLink.removeAttr('class',"active");
          }
          langModule.changeLang(lang);
          $(".navbar-collapse").collapse('hide');
        };

        this.init = function() {
          // initialize the language module
          langModule.init();
          // get the stored language and use it to set the active flag on the language buttons
          var lang = langModule.getStoredLang();
          this.setActiveLang(lang);
        };

        this.init();
      },
      controllerAs: 'navbarCtrl'
    };
  });

  // navbar controller
  app.controller('NavBarController', function($scope){
    $scope.navbarItems = [
      {
        key: 'navbar-about',
        label: 'About',
        href: '#about'
      },
      {
        key: 'navbar-services',
        label: 'Services',
        href: '#services'
      },
      {
        key: 'navbar-clients',
        label: 'Clients',
        href: '#clients'
      },
      {
        key: 'navbar-contact',
        label: 'Contact',
        href: '#contact'
      }
    ]
  
    $scope.itemClicked = function ($index) {
      $scope.selectedIndex = $index;
      $scope.scrollToItem($scope.navbarItems[$index].href);
      $(".navbar-collapse").collapse('hide');
    }

    $scope.scrollToItem = function(itemId) {
      $('html, body').animate({scrollTop: $(itemId).offset().top});
      return false;
    };

    $scope.unselectAllItems = function() {
      $scope.selectedIndex = -1;
    }
  });

  app.directive('qlPresentation', function(){
    return{
      restrict: 'E',
      templateUrl: 'views/mainpage/ql-presentation.html',
      controller: function(){

      },
      controllerAs: 'presentationCtrl'
    };
  });

  app.directive('qlAbout', function(){
    return{
      restrict: 'E',
      templateUrl: 'views/mainpage/ql-about.html',
      controller: function(){

      },
      controllerAs: 'aboutCtrl'
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

  app.directive('qlClients', function(){
    return{
      restrict: 'E',
      templateUrl: 'views/mainpage/ql-clients.html',
      controller: function(){

      },
      controllerAs: 'clientsCtrl'
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

  app.directive('qlFooter', function(){
    return{
      restrict: 'E',
      templateUrl: 'views/footer/ql-footer.html',
      controller: function($scope){
        this.scrollDown = function() {
          $('html, body').animate({scrollTop: $(document).height()}, 10);
          return false;
        };

        this.scrollToTop = function() {
          $('html, body').animate({scrollTop: $('#ql-navbar').offset().top});
          return false;
        };
      },
      controllerAs: 'footerCtrl',
    };
  });
})();
