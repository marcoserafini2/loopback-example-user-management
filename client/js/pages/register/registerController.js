(function() {
  'use strict';

  angular
  .module('app')
  .controller('RegisterController', registerController);

  registerController.$inject = ['authService', '$rootScope', '$scope', '$state'];

  /* @ngInject */
  function registerController(authService, $rootScope, $scope, $state) {

	  $scope.register = function(email, password){
		  authService.register(email, password).then(function(){
			  $state.go('login');
		  }, function(err, err2){
			  console.log("error on registration", err , err2);
		  });
	  }
  }

})();