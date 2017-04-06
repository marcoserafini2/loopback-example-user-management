(function() {
  'use strict';

  angular
  .module('app')
  .controller('LogoutController', logoutController);

  logoutController.$inject = ['authService', '$rootScope', '$scope', '$state'];

  /* @ngInject */
  function logoutController(authService, $rootScope, $scope, $state) {

	  $scope.logout = function(){
		  authService.logout().then(function(){
			  console.log('logged out');
			  $state.go('home');
		  }, function(){
			  console.log("error on logout");
		  });
	  }
	  
	  $scope.cancel = function() {
	      $state.go('home');
	  }
  }

})();