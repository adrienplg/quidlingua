// Module responsible for the language management
langModule = function(){
	var langs = ['en', 'it', 'fr'];
	var currentLang = '';
	var langJS = null;

	// Modify the values of all tags having the 'tkey' attribute
	var translate = function (jsdata){	
		$("[tkey]").each (function (index)
		{
			var strTr = jsdata [$(this).attr ('tkey')];
		    $(this).html (strTr);
		});
	}

	// Change the language of the website
	var changeLang = function(langCode){
		var lang = 'en';
		if ($.inArray(langCode, langs) > -1) {
			lang = langCode
		}
		if (lang !== currentLang){
			setStoredLang(lang);
			currentLang = lang;
			$.getJSON('lang/'+lang+'.json', translate);
			$('html').attr("lang", lang);
		}
	}

	// init should only be called when the browser is refreshed
	// check if a language is stored. if not defined, set English as default
	// change the website language
	var init = function (){
		var langCode;
		var lang = getStoredLang();
		if (lang){
			langCode = lang;
		}
		else{
			var language = window.navigator.userLanguage || window.navigator.language;
			langCode = language.substr (0, 2);
			setStoredLang(langCode);
		}
		changeLang(langCode);	
	}

	var getStoredLang = function(){
		var lang;
		if(typeof(Storage) !== "undefined") {
	    	// Code for localStorage/sessionStorage.
	    	lang = localStorage.getItem("lang");
		} else {
		    // Sorry! No Web Storage support..
		    lang = Cookies.get('langCode');
		}
		return lang;
	}

	var setStoredLang = function(langCode){
		if(typeof(Storage) !== "undefined") {
	    	// Code for localStorage/sessionStorage.
	    	localStorage.setItem("lang", langCode);
		} else {
		    // Sorry! No Web Storage support..
		    Cookies.set('lang', langCode);
		}
	}

	return {
		init:init, 
		translate:translate, 
		changeLang:changeLang, 
		getStoredLang:getStoredLang,
		setStoredLang:setStoredLang
	}
}();

// langModule.init();

