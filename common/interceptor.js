(function () {
    'use strict';

    angular
        .module('MyApp')
        .factory('AuthInterceptor', ['$q', '$window', 'API_URL', function ($q, $window, API_URL) {
            return {
                request: function (config) {
                    var domainPattern = new RegExp(API_URL.replace(/\./g, "\\."));
                    var token = $window.localStorage.iMuzeToken;
                    if (token && domainPattern.test(config.url)) {
                        config.headers.Authorization = 'Token ' + token;
                    }
                    return config;
                },
                responseError: function (response) {
                    if (response.status === 401 || response.status === 403) {
                        delete $window.localStorage.iMuzeToken;
                    }
                    return $q.reject(response);
                }
            };
    }])
        .config(['$httpProvider', function ($httpProvider) {
            $httpProvider.defaults.useXDomain = true;
            $httpProvider.defaults.headers.post['Content-Type'] = 'application/json; charset=utf-8';
            $httpProvider.interceptors.push('AuthInterceptor');
            delete $httpProvider.defaults.headers.common['X-Requested-With'];
}]);


})();
