(function () {
    'use strict';

    angular
        .module('MyApp')
        .service('blogService', function ($q, $http, API_URL) {
            var self = this;


            this.hello = function (params) {
                var q = $q.defer();
                console.log('hello');
//                $http.post(API_URL + "/musics", cparams)
//                    .then(function (success) {
//                        console.log(success);
//                        q.resolve(success.data);
//                    });
                return q.promise;
            }

        });
})();
