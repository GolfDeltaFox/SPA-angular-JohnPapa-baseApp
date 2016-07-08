(function () {
  'use strict';

  angular
    .module('MyApp')
    .service('blogService', function ($q, $http, $sce, API_URL, BLOG_NAME, API_KEY) {
      var self = this;


      this.tumblerPosts = function (page) {
        var q = $q.defer();
        var elt_per_page = 20;
        var offset = (page - 1) * elt_per_page;
        var uri = API_URL+'/v2/blog/' + BLOG_NAME + '/posts?api_key=' + API_KEY + '&limit=' + elt_per_page + '&offset=' + offset + '&callback=JSON_CALLBACK'

        $http({
          method: 'JSONP',
          url: uri,
        }).then(function successCallback(res) {
          var posts = [];
          //parsing
          console.log(res.data.response.posts);

          res.data.response.posts.forEach(function (post) {
            if (post.body != null) {
              var el = document.createElement('html');
              el.innerHTML = (post.body);
              var photos = Array.prototype.slice.call(el.getElementsByTagName('img'), 0);
              Array.prototype.slice.call(el.getElementsByTagName('figure')).forEach(function (elt) {
                elt.parentNode.removeChild(elt);
              })
              var html = $sce.trustAsHtml(el.innerHTML);
              posts.push({
                "title": post.summary,
                "url": post.post_url,
                "date": post.date,
                "tags": post.tags,
                "html": html,
                "images": photos.map(function (photo) {
                  return photo.src;
                })

              })

            } else {
              posts.push({
                "title": post.summary,
                "url": post.image_permalink,
                "date": post.date,
                "tags": post.tags,
                "images": post.photos.map(function (photo) {
                  return photo.original_size.url;
                })
              })

            }

            q.resolve(posts);

          })

        }, function errorCallback(response) {
          // called asynchronously if an error occurs
          // or server returns response with an error status.
        });


        //                $http.post(API_URL + "/musics", cparams)
        //                    .then(function (success) {
        //                        console.log(success);
        //                        q.resolve(success.data);
        //                    });
        return q.promise;
      }

//      self.tumblerPosts = function (page) {
//        var blog = 'golfdeltafox.tumblr.com'
//          //      var blog = 'cynsdelectabledesserts.tumblr.com'
//        var api_key = '9g68Lf8Q7MiFmEylclXB8oYOeXMKF4U7Kvf4Rbvp2c5HzVU43g'
//        var elt_per_page = 20
//        if (page == null) page = 1;
//
//        //            $scope.nxt_page = page+1;
//        //            $scope.prv_page = page>1? page-1 : 1;
//        var offset = (page - 1) * elt_per_page;
//        console.log(page);
//        var posts = [];
//
//
//        var uri = '//api.tumblr.com/v2/blog/' + blog + '/posts?api_key=' + api_key + '&limit=' + elt_per_page + '&offset=' + offset + '&callback=JSON_CALLBACK'
//        $http({
//          method: 'JSONP',
//          url: uri,
//        }).then(function successCallback(res) {
//
//          //parsing
//          console.log(res.data.response.posts);
//
//          res.data.response.posts.forEach(function (post) {
//            if (post.body != null) {
//              var el = document.createElement('html');
//              el.innerHTML = (post.body);
//              var photos = Array.prototype.slice.call(el.getElementsByTagName('img'), 0);
//              Array.prototype.slice.call(el.getElementsByTagName('figure')).forEach(function (elt) {
//                elt.parentNode.removeChild(elt);
//              })
//              var html = $sce.trustAsHtml(el.innerHTML);
//              posts.push({
//                "title": post.summary,
//                "url": post.post_url,
//                "date": post.date,
//                "tags": post.tags,
//                "html": html,
//                "images": photos.map(function (photo) {
//                  return photo.src;
//                })
//
//              })
//
//            } else {
//              posts.push({
//                "title": post.summary,
//                "url": post.image_permalink,
//                "date": post.date,
//                "tags": post.tags,
//                "images": post.photos.map(function (photo) {
//                  return photo.original_size.url;
//                })
//              })
//
//            }
//
//
//
//          })
//
//        }, function errorCallback(response) {
//          // called asynchronously if an error occurs
//          // or server returns response with an error status.
//        });
//      }
      
      
      return self;
    });
})();
//
//(function () {
//    'use strict';
//
//    angular
//        .module('MyApp')
//        .factory('blogService', blogService);
//
//
//    function blogService($scope, $http, $sce, $location, $routeParams) {
//
//         var tumblerPosts = function (page) {
//            var blog = 'golfdeltafox.tumblr.com'
//      //      var blog = 'cynsdelectabledesserts.tumblr.com'
//            var api_key = '9g68Lf8Q7MiFmEylclXB8oYOeXMKF4U7Kvf4Rbvp2c5HzVU43g'
//            var elt_per_page = 20
//            if (page == null) page = 1;
//            console.log($location.search().page);
//
//            $scope.nxt_page = page+1;
//            $scope.prv_page = page>1? page-1 : 1;
//            var offset = (page - 1)*elt_per_page;
//            console.log(page);
//            $scope.posts = [];
//
//
//            var uri = '//api.tumblr.com/v2/blog/' + blog + '/posts?api_key='+api_key+'&limit='+elt_per_page+'&offset='+offset+'&callback=JSON_CALLBACK'
//            $http({
//              method: 'JSONP',
//              url: uri,
//            }).then(function successCallback(res) {
//
//              //parsing
//              console.log(res.data.response.posts);
//
//              res.data.response.posts.forEach(function (post) {
//                if (post.body != null) {
//                  var el = document.createElement( 'html' );
//                  el.innerHTML =(post.body);
//                  var photos = Array.prototype.slice.call(el.getElementsByTagName('img'), 0 );
//                  Array.prototype.slice.call(el.getElementsByTagName('figure')).forEach(function(elt){
//                    elt.parentNode.removeChild(elt);
//                  })
//                  var html = $sce.trustAsHtml(el.innerHTML);
//                  $scope.posts.push({
//                    "title": post.summary,
//                    "url": post.post_url,
//                    "date": post.date,
//                    "tags": post.tags,
//                    "html": html,
//                    "images": photos.map(function (photo) {
//                      return photo.src;
//                    })
//
//                  })
//
//                } else {
//                  $scope.posts.push({
//                    "title": post.summary,
//                    "url": post.image_permalink,
//                    "date": post.date,
//                    "tags": post.tags,
//                    "images": post.photos.map(function (photo) {
//                      return photo.original_size.url;
//                    })
//                  })
//
//                }
//
//
//
//              })
//
//            }, function errorCallback(response) {
//              // called asynchronously if an error occurs
//              // or server returns response with an error status.
//            });
//          }
//      
//      
//      
//    }
//
//})();