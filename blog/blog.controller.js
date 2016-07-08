(function () {
  'use strict';

  angular
    .module('MyApp')
    .controller('BlogController', BlogController);


  function BlogController($scope, $http, $sce, $location, $routeParams, blogService) {
    var vm = this;
    vm.page = $routeParams.page == null ? 1 : parseInt($routeParams.page);
    vm.nxt_page = vm.page + 1;
    vm.prv_page = vm.page > 1 ? vm.page - 1 : 1;
    console.log(vm.page);

    vm.setNxtPage = function () {
      vm.page++;
      console.log(vm.page);
      vm.tumblerConnector(vm.page);
    }

    vm.setPrvPage = function () {
      vm.page = vm.page > 1 ? vm.page - 1 : 1;
      console.log(vm.page);
      vm.tumblerConnector(vm.page);
    }

    blogService.tumblerPosts(vm.page).then(function(posts) {
      vm.posts = posts;
    });

    return vm;
  }


})();