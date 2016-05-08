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

        this.setActiveLang = function(lang) {
          // get both language links
          enLangLink = angular.element(document.querySelector('#enLang'));
          frLangLink = angular.element(document.querySelector('#frLang'));
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
        };

        this.init = function() {
          // initialize the language module
          langModule.init();
          // get the stored language and use it to set the active flag on the language buttons
          lang = langModule.getStoredLang();
          this.setActiveLang(lang);
        };

        this.init();
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
