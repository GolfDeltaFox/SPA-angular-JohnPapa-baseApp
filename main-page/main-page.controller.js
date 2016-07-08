(function () {
    'use strict';

    angular
        .module('MyApp')
        .controller('MainController', ComposeController);


    function ComposeController($http, $location, MainService) {
        var vm = this;


        this.compose = function(){
            console.log("Hello world");
        }

        vm.compose();

        return this;
    }
})();
