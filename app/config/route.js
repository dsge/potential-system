module.exports = function($routeProvider, $locationProvider) {
  $routeProvider.when('/login', {
    templateUrl: 'static/view/login-page.html',
  });
  $routeProvider.when('/register', {
    templateUrl: 'static/view/register-page.html',
  });
  $routeProvider.when('/user/:name', {
    templateUrl: 'static/view/user-profile-page.html',
    controller: 'UserProfileController',
  });
  $routeProvider.when('/user/:name/posts/:title', {
    templateUrl: 'static/view/user-post-page.html',
  });
}
