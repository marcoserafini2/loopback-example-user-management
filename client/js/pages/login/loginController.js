(function() {
  'use strict';

  angular
  .module('app')
  .controller('LoginController', loginController);

  loginController.$inject = ['authService', '$rootScope', '$scope', '$state'];

  /* @ngInject */
  function loginController(authService, $rootScope, $scope, $state) {

	  $scope.login = function(email, passoword){
		  authService.login(email, passoword).then(function(){
			  $state.go('home');
		  }, function(){
			  console.log("error on login");
		  });
	  }
  }

})();