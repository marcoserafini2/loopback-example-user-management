(function() {
  'use strict';

  angular
  .module('app')
  .factory('authService', authService);

  authService.$inject = ['User', 'authEvents', '$rootScope'];

  /* @ngInject */
  function authService(User, authEvents, $rootScope) {
    var service = {
      login: login,
      logout: logout,
      register: register,
      isAuthenticated: isAuthenticated,
      getCurrentUser: getCurrentUser
    };
    return service;

    ////////////////

    function login(email, password) {
      var loginPromise = User
      .login({email: email, password: password})
      .$promise;

      loginPromise.then(function(response) {
        $rootScope.$broadcast(authEvents.LOGIN_SUCCESS);
      }, function() {
        $rootScope.$broadcast(authEvents.LOGIN_FAILED);
      });

      return loginPromise;
    }

    function logout() {
      return User
      .logout()
      .$promise
      .then(function(response) {
        $rootScope.$broadcast(authEvents.LOGOUT_SUCCESS);
      }, function() {
        $rootScope.$broadcast(authEvents.LOGOUT_FAILED);
      });
    }

    function register(email, password) {
      return User
      .create({
       email: email,
       password: password
     })
      .$promise;
    }

    function isAuthenticated() {
      return User.isAuthenticated();
    }

    function getCurrentUser() {
      return User.getCurrent();
    }
  }

})();