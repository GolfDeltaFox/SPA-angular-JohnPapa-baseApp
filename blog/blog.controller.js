(function () {
    'use strict';

    angular
        .module('MyApp')
        .controller('BlogController', BlogController);


    function BlogController($http, $location, blogService) {
        var vm = this;


        this.compose = function(){
            blogService.hello();
        }

        vm.compose();

        return this;
    }
})();
