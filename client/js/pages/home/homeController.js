(function() {
  'use strict';

  angular
  .module('app')
  .controller('HomeController', homeController);

  homeController.$inject = ['authService', '$rootScope', '$scope'];

  /* @ngInject */
  function homeController(authService, $rootScope, $scope) {

	  $scope.isAuthenticated = authService.isAuthenticated();

	  if($scope.isAuthenticated){
		  $scope.currentUser = authService.getCurrentUser();
	  }

  }

})();