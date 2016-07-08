(function () {
    'use strict';

    angular
        .module('MyApp', [ 'ngRoute', 'ngMaterial', 'ngMdIcons'])
        .run(run)
        .config(config);


    function run($location, $rootScope) {
        $rootScope.$on('$routeChangeSuccess', function (event, current, previous) {
            if (current.$$route) {
                $rootScope.title = current.$$route.title + ' - My Tunes';
                $rootScope.containerFluid = current.$$route.containerFluid;
            }
        });
    }

    function config($httpProvider) {
        $httpProvider.defaults.useXDomain = true;
        $httpProvider.defaults.headers.post['Content-Type'] = 'application/json; charset=utf-8';
        var appID = 945564255504675;
        var version = "v2.0";
    }

})();
