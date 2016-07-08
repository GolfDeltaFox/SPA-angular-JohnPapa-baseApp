(function () {
    'use strict';

    angular
        .module('MyApp')
        .config(['$routeProvider', config]);


    function config($routeProvider) {
        $routeProvider
            .when('/', {
                templateUrl: './main-page/main-page.html',
                controller: 'MainController',
                controllerAs: 'Main',
                title: 'Main'
            })
    }

})();
