(function () {
    'use strict';

    angular
        .module('MyApp')
        .config(config);


    function config($routeProvider, $stateProvider) {
        $routeProvider
            .when('/compose', {
                templateUrl: './compose/compose.html',
                controller: 'ComposeController',
                controllerAs: 'Compose',
                title: 'Compose'
            })
    }

})();
