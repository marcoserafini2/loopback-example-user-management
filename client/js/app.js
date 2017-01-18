// Copyright IBM Corp. 2015,2016. All Rights Reserved.
// Node module: loopback-example-angular
// This file is licensed under the MIT License.
// License text available at https://opensource.org/licenses/MIT
(function() {
  'use strict';

angular
  .module('app', [
    'lbServices',
    'ui.router'
  ])
  .config(['$stateProvider', '$urlRouterProvider', function($stateProvider, $urlRouterProvider) {

    $stateProvider
      .state('home', {
        url: '',
        templateUrl: 'js/pages/home/home.html',
        controller: 'HomeController'
      })
      .state('register', {
        url: '/register',
        templateUrl: 'js/pages/register/register.html',
        controller: 'RegisterController'
      })
      .state('login', {
        url: '/login',
        templateUrl: 'js/pages/login/login.html',
        controller: 'LoginController'
      });

    $urlRouterProvider.otherwise('home');

  }])
  .constant('authEvents', {
    LOGIN_SUCCESS: 'auth_login_success',
    LOGIN_FAILED: 'auth_login_failed',
    LOGOUT_SUCCESS: 'auth_logout_success',
    LOGOUT_FAILED: 'auth_logout_failed',
    SESSION_TIMEOUT: 'auth_session_timeout',
    NOT_AUTHENTICATED: 'auth_not_authenticated',
    NOT_AUTHORIZED: 'auth_not_authorized'
  });

})();
